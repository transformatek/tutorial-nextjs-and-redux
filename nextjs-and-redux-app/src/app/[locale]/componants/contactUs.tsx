import { theme } from "@/styles/theme";
import { Button, Card, Col, Form, Input, message, Row } from "antd";
import { Content } from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";
import {
    PhoneFilled, MailFilled, EnvironmentFilled
} from '@ant-design/icons';
import TextArea from "antd/es/input/TextArea";
import { useI18n, useScopedI18n } from "../../../../locales/clients";
import { useAppDispatch } from "@/lib/hook";
import { postContact } from "@/lib/features/contact/contactThunks";
import { useContact } from "@/lib/features/contact/contactSelectors";
import { useEffect } from "react";

export default function ContactUs() {
    const t = useI18n()
    const scopedEnter = useScopedI18n('enter')
    const scopedInput = useScopedI18n('input')
    const dispatch = useAppDispatch();
    const [messageApi, contextHolder] = message.useMessage();
    const key = 'updatable';
    const { isLoading, contactResponse } = useContact()

    useEffect(()=> {
        if (isLoading == false)
            messageApi.open({
                key,
                type: 'success',
                content: contactResponse,

            });
    }, [isLoading, contactResponse])

    const sendMessage = async () =>{
        await dispatch(postContact())
    }
 
    return (
        <>
            {contextHolder}
            <Content style={{ paddingTop: 15 }} >
                <Title style={{ color: theme.token.colorWhite, textAlign: "center", paddingBottom: 5 }}>{t('contactUs')}</Title>
                <Row >

                    <Col
                        xs={{ flex: '100%' }}
                        sm={{ flex: '100%' }}
                        md={{ flex: '60%' }}
                        lg={{ flex: '60%' }}
                        style={{ display: "flex", justifyContent: "center", marginTop: 10 }}
                    >
                        <Card bordered={false} style={{ width: "80%" }}>
                            <Title level={2}>{t('sendMessage')}</Title>
                            <Form
                                name="wrap"
                                labelCol={{ flex: '110px' }}
                                labelAlign="left"
                                labelWrap
                                wrapperCol={{ flex: 1 }}
                                colon={false}
                                style={{ maxWidth: 600 }}
                            >
                                <Form.Item name="username" rules={[{ required: true }]}>
                                    <Input placeholder={scopedEnter('yourName')} />
                                </Form.Item>

                                <Form.Item
                                    name="email"

                                    rules={[
                                        {
                                            type: 'email',
                                            message: scopedInput('notValid'),
                                        },
                                        {
                                            required: true,
                                            message: scopedInput('email'),
                                        },
                                    ]}
                                >
                                    <Input placeholder={scopedEnter('email')} />
                                </Form.Item>
                                <Form.Item name="message" rules={[{ required: true }]}>
                                    <TextArea rows={4} placeholder={scopedEnter('message')} maxLength={6} />
                                </Form.Item>
                                <Form.Item label="">
                                    <Button type="primary" htmlType="submit" style={{ width: "70%" }}
                                        onClick={sendMessage}
                                    >
                                        Submit
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Card>
                    </Col>
                    <Col
                        xs={{ flex: '100%' }}
                        sm={{ flex: '100%' }}
                        md={{ flex: '40%' }}
                        lg={{ flex: '40%' }}
                        style={{ display: "flex", justifyContent: "center", marginTop: 10 }}
                    >
                        <Card bordered={false} style={{ width: "80%" }}>
                            <Title level={4}><EnvironmentFilled /> {t('adress')}</Title>
                            <Text>Ain temouchent , Algeria</Text>
                            <Title level={4}> <PhoneFilled /> {t('phone')}</Title>
                            <Text>(+213) 0661-55-77-30</Text>
                            <Title level={4}><MailFilled /> {t('email')}</Title>
                            <Text>contact@transformatek.dz</Text>
                        </Card>
                    </Col>

                </Row>

            </Content>
        </>
    )
}