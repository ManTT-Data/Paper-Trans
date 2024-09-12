import React from "react";
import { Card, Typography, Flex, Row, Col, Space, Avatar } from 'antd';
import '../views/App.css';
import student from '../assets/images/student.svg';
import research from '../assets/images/research.svg';
import profession from '../assets/images/professional.svg';
import multi from '../assets/images/multifile.svg';
import lang from '../assets/images/language.svg';
import citie from '../assets/images/cititedsrc.svg';


const { Title } = Typography;
const { Meta } = Card;

class Features extends React.Component {
    render() {
        return (
            <Flex align="center" vertical>

                <Title>The Features of Translate</Title>
                <div style={{ marginLeft: '30px' }}>
                    <Space direction="vertical" size={'middle'}>

                        <Row gutter={[16, 16]} justify={'center'}>
                            <Col xl={8}>
                                <Card>
                                    <div style={{ marginBottom: '16px' }}>
                                        <Meta title="For Students"
                                            avatar={<Avatar src={student} />} />
                                    </div>
                                    Study for exams, get help with homework,<br />
                                    and answer multiple choice questions<br />
                                    effortlessly.
                                </Card>
                            </Col>
                            <Col xl={8} >
                                <Card>
                                    <div style={{ marginBottom: '16px' }}>
                                        <Meta title="For Reseachers"
                                            avatar={<Avatar src={research} />} />
                                    </div>
                                    Dive into scientific papers, academic <br />
                                    articles, and books to get the information<br />
                                    you need for your research.
                                </Card>
                            </Col>
                            <Col xl={8}>
                                <Card>
                                    <div style={{ marginBottom: '16px' }}>
                                        <Meta title="For Professionnals"
                                            avatar={<Avatar src={profession} />} />
                                    </div>
                                    Navigate legal contracts, financial reports, <br />
                                    manuals, and training material. Ask <br />
                                    questions to any FIles for fast insights.
                                </Card>
                            </Col>
                            <Col xl={8}>
                                <Card>
                                    <div style={{ marginBottom: '16px' }}>
                                        <Meta title="Multi-file chats"
                                            avatar={<Avatar src={multi} />} />
                                    </div>
                                    Create folders to organize your files and <br />
                                    chat with multiple Files in one single <br />
                                    conversation.
                                </Card>
                            </Col>
                            <Col xl={8}>
                                <Card>
                                    <div style={{ marginBottom: '16px' }}>
                                        <Meta title="Cited Sources"
                                            avatar={<Avatar src={citie} />} />
                                    </div>
                                    Answers contain references to their source <br />
                                    in the original PDF document. No more <br />
                                    flipping pages.
                                </Card>
                            </Col>
                            <Col xl={8}>
                                <Card>
                                    <div style={{ marginBottom: '16px' }}>
                                        <Meta title="Any Language"
                                            avatar={<Avatar src={lang} />} />
                                    </div>
                                    Works worldwide! Translate accepts Files <br />
                                    in any language and can chat in any <br />
                                    language.
                                </Card>
                            </Col>
                        </Row>
                    </Space>
                </div>
            </Flex>

        )

    }

}
export default Features;
