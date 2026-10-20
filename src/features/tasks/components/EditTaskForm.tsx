"use client"
import TaskForm from "@/features/tasks/components/TaskForm";
import {useTasks} from "@/features/tasks/context/TasksContext";
import type {TaskUpdates} from "@/features/tasks/types";
import type {TaskFormValues} from "@/features/tasks/types/taskForm";
import dayjs from "dayjs";
import {useRouter} from "next/navigation";

type EditTaskFormProps = {
    taskId: string
}
export default function EditTaskForm({taskId}: EditTaskFormProps) {
    const router = useRouter()
    const {tasks, updateTask} = useTasks()
    const currentTask = tasks.find(task => task.id === taskId)
    if (!currentTask) {
        return <div>Task not found</div>;
    }
    const initialValues: TaskFormValues = {
        title: currentTask.title,
        description: currentTask.description,
        status: currentTask.status,
        priority: currentTask.priority,
        dueDate: currentTask.dueDate
            ? dayjs(currentTask.dueDate)
            : undefined,
    };
    const handleUpdateTask = (values: TaskFormValues) => {
        const dueDate = values.dueDate?.format('YYYY-MM-DD')
        const updates: TaskUpdates = {
            title: values.title,
            description: values.description,
            status: values.status,
            priority: values.priority,
            dueDate
        }
        updateTask(taskId, updates)
        router.push(`/tasks/${taskId}`)
    }

    return (
        <TaskForm initialValues={initialValues} onSubmit={handleUpdateTask} submitText='Update'/>
    )
}