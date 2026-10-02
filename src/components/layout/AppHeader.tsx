import {Avatar, Layout, Space, Typography} from "antd";
import styles from './AppHeader.module.css'

const {Header} = Layout;

export default function AppHeader() {
    return (
        <Header className={styles.container}>
            <Typography.Title level={2}>TaskFlow</Typography.Title>
            <Space size="large" align="center">
                <Typography.Text>Igor</Typography.Text>
                <Avatar>I</Avatar>
            </Space>

        </Header>
    )
}