import TasksProvider from "@/features/tasks/context/TasksContext";
import type {ReactNode} from "react";

type TasksLayoutProps = {
    children: ReactNode;
}
export default function TasksLayout({children}: TasksLayoutProps) {
    return <TasksProvider>{children}</TasksProvider>

}