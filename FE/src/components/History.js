import React from 'react';
import '../views/App.css'
import { Card, Col, Row, Flex, Space } from 'antd';

class History extends React.Component {
    render() {
        return (
            <div className='container'>
                <Card title="My chats">
                    <Row gutter={16}>
                        <Col span={8}>
                            <Card title="a" >
                                Inner Card content
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title="a">
                                Inner Card content
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title="a">
                                Inner Card content
                            </Card>
                        </Col>
                    </Row>
                </Card>
            </div>
        )
    }
}


export default History;