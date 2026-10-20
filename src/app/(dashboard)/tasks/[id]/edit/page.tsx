import EditTaskForm from "@/features/tasks/components/EditTaskForm";

type EditTaskProps = {
    params: Promise<{ id: string }>
}

export default async function EditTask({params}: EditTaskProps) {
    const {id} = await params
    return (
        <EditTaskForm taskId={id}/>
    )
}