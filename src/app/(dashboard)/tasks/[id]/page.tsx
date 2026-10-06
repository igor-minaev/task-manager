import TaskDetails from "@/features/tasks/components/TaskDetails";
import {tasks} from "@/features/tasks/mocks/tasks";
import {notFound} from "next/navigation";

type TaskPageProps = {
    params: Promise<{ id: string }>
}

export default async function TaskPage({params}: TaskPageProps) {
    const {id} = await params
    const task = tasks.find(task => task.id === id)
    if(!task) notFound()
    return (
        <TaskDetails task={task}/>
    )
}