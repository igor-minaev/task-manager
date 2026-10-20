"use client"

import TaskForm from "@/features/tasks/components/TaskForm";
import {useTasks} from "@/features/tasks/context/TasksContext";
import type {Task} from "@/features/tasks/types";
import type {TaskFormValues} from "@/features/tasks/types/taskForm";
import {useRouter} from "next/navigation";


export default function CreateTaskForm() {
    const router = useRouter()
    const {addTask} = useTasks()
    const handleCreateTask = (values: TaskFormValues) => {
        const dueDate = values.dueDate?.format('YYYY-MM-DD')
        const newTask: Task = {
            id: crypto.randomUUID(),
            title: values.title,
            status: values.status,
            priority: values.priority,
            createdAt: new Date().toISOString().slice(0, 10),
            description: values.description,
            dueDate
        }
        addTask(newTask)
        router.push('/tasks')
    }

    return (
        <TaskForm initialValues={{
            title: '',
            status: "todo",
            priority: "medium"
        }} onSubmit={handleCreateTask} submitText='Create'/>
    )
}

