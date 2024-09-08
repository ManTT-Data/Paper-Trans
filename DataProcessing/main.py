from fastapi import FastAPI, File, UploadFile, HTTPException
import firebase_admin
from firebase_admin import credentials, storage
from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse, JSONResponse
from pydantic import BaseModel
from uuid import uuid4

app = FastAPI()

cred = credentials.Certificate("./cred.json")
firebase_admin.initialize_app(cred, {
    'storageBucket': 'paper-trans-3e6b8.appspot.com'
})



@app.get("/", response_class=HTMLResponse)
async def get():
    html_content = """
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Upload PDF to Firebase</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                max-width: 600px;
                margin: auto;
                padding: 20px;
                background-color: #f5f5f5;
            }

            h1 {
                text-align: center;
            }

            form {
                display: flex;
                flex-direction: column;
                gap: 20px;
                margin-top: 30px;
            }

            input[type="file"] {
                padding: 10px;
            }

            button {
                padding: 10px;
                background-color: #007bff;
                color: white;
                border: none;
                cursor: pointer;
            }

            button:hover {
                background-color: #0056b3;
            }

            #result {
                margin-top: 20px;
            }

            #result a {
                color: green;
                text-decoration: none;
            }
        </style>
    </head>
    <body>

        <h1>Upload PDF File</h1>

        <form id="uploadForm">
            <input type="file" id="fileInput" accept="application/pdf" required />
            <button type="submit">Upload PDF</button>
        </form>

        <div id="result"></div>

        <script>
            const form = document.getElementById("uploadForm");
            const resultDiv = document.getElementById("result");

            form.addEventListener("submit", async (e) => {
                e.preventDefault();
                const fileInput = document.getElementById("fileInput");

                // Lấy file từ input
                const file = fileInput.files[0];
                if (!file) {
                    alert("Please select a file");
                    return;
                }

                // Tạo FormData để gửi file
                const formData = new FormData();
                formData.append("file", file);

                // Gửi request đến FastAPI server
                try {
                    const response = await fetch("/upload", {
                        method: "POST",
                        body: formData,
                    });

                    const data = await response.json();

                    if (response.ok) {
                        resultDiv.innerHTML = `<p>File uploaded successfully! <a href="${data.file_url}" target="_blank">View PDF</a></p>`;
                    } else {
                        resultDiv.innerHTML = `<p style="color: red;">Error: ${data.detail}</p>`;
                    }
                } catch (error) {
                    console.error("Error uploading file:", error);
                    resultDiv.innerHTML = `<p style="color: red;">Failed to upload file.</p>`;
                }
            });
        </script>

    </body>
    </html>
    """
    return HTMLResponse(content=html_content)


@app.post("/upload")
async def upload_pdf(file: UploadFile = File(...)):
    if file.content_type != "application/pdf":
        raise HTTPException(status_code=400, detail="File không phải PDF")
    
    file_name = f"{uuid4()}.pdf"

    bucket = storage.bucket()
    blob = bucket.blob(file_name)
    
    blob.upload_from_file(file.file, content_type="application/pdf")
    blob.make_public()  

    file_url = blob.public_url
    return {"file_url": file_url}
