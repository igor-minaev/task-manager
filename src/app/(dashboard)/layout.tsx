import DashboardShell from "@/components/layout/DashboardShell";
import type { ReactNode} from "react";


type DashboardLayoutProps = {
    children: ReactNode;
}

export default function DashboardLayout({children}: DashboardLayoutProps) {
    return <DashboardShell>{children}</DashboardShell>

}