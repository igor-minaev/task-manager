import type {ReactNode} from "react";

type DashboardLayoutProps = {
    children: ReactNode
}

export default function DashboardLayout({children}: DashboardLayoutProps) {
    return (
        <div>
            <p>Dashboard layout</p>
            {children}
        </div>
    );
}