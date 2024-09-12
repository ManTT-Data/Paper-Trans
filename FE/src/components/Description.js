import React from 'react';
import { Flex, Typography } from 'antd';
import '../views/App.css'

const { Title } = Typography;
class Description extends React.Component {
    render() {
        return (
            <Flex justify='center' align='center' style={{ margin: 16 }}>
                <div>
                    <Title justify='center' align='center'>Translate with any Files</Title>
                    <Title level={5} type='secondary' justify='center' align='center'>Join millions of students, researchers and professionals to <br />
                        instantly answer questions and understand research with AI</Title>
                </div>
            </Flex>
        )
    }
}
export default Description;