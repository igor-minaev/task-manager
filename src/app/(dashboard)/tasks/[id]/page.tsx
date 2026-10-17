import TaskDetailsContainer from "@/features/tasks/components/TaskDetailsContainer";

type TaskPageProps = {
    params: Promise<{ id: string }>
}

export default async function TaskPage({params}: TaskPageProps) {
    const {id} = await params
    return <TaskDetailsContainer taskId={id}/>

}