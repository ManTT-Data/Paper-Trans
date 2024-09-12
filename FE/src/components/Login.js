import React, { useState } from 'react';
import { Button, Flex, Modal } from 'antd';

const Login = () => {

        const [isModalOpen, setIsModalOpen] = useState(false);
        const showModal = () => {
            setIsModalOpen(true);
        };
        const handleOk = () => {
            setIsModalOpen(false);
        };
        const handleCancel = () => {
            setIsModalOpen(false);
        };
        return (
            <React.Fragment>

                <Flex justify="right" align="middle" style={{ height: '100%', margin: '16px 0', padding: '0 48px' }} gap='large'>
                    <Button ghost type='primary'>Create a free account</Button>
                    <Button type='primary' onClick={showModal}>Sign in</Button>
                    <Modal title="Sign in" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>

                    </Modal>
                </Flex>
            </React.Fragment>
        )
    
}
export default Login;