"use client"
import {DashboardOutlined, UnorderedListOutlined} from "@ant-design/icons";
import {Layout, Menu} from "antd";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useState} from "react";

const {Sider} = Layout;

const items = [
    {key: "/dashboard", icon: <DashboardOutlined/>, label: (<Link href='/dashboard'>Dashboard</Link>)},
    {key: "/tasks", icon: <UnorderedListOutlined/>, label: (<Link href='/tasks'>Tasks</Link>)}
]

export default function AppSidebar() {
    const [collapsed, setCollapsed] = useState(false)
    const pathname = usePathname()
    return (
        <Sider collapsible
               collapsed={collapsed}
               onCollapse={(value) => setCollapsed(value)}
               width={200}>
            <Menu mode='inline' items={items} selectedKeys={[pathname]}/>
        </Sider>
    )
}