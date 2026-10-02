"use client"

import AppHeader from "@/components/layout/AppHeader";
import AppSidebar from "@/components/layout/AppSidebar";
import {Layout} from "antd";
import type {ReactNode} from "react";

type DashboardShellProps = {
    children: ReactNode
}

const {Content} = Layout;

export default function DashboardShell({children}: DashboardShellProps) {
    return (
        <Layout>

            <AppHeader/>
            <Layout>
                <AppSidebar/>
                <Content>{children}</Content>
            </Layout>

        </Layout>
    )
}