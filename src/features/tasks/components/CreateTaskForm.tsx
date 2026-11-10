"use client"

import {createTask} from "@/features/tasks/api/tasksApi";
import type {CreateTaskDto} from "@/features/tasks/api/types";
import TaskForm from "@/features/tasks/components/TaskForm";
import {useTasks} from "@/features/tasks/context/TasksContext";
import type {TaskFormValues} from "@/features/tasks/types/taskForm";
import {message} from "antd";
import {useRouter} from "next/navigation";
import {useState} from "react";


export default function CreateTaskForm() {
    const router = useRouter()

    const {addTask} = useTasks()

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleCreateTask = async (values: TaskFormValues) => {
        try {
            setIsSubmitting(true)
            const dueDate = values.dueDate?.format('YYYY-MM-DD')
            const data: CreateTaskDto = {
                title: values.title,
                status: values.status,
                priority: values.priority,
                description: values.description,
                dueDate
            }
            const createdTask = await createTask(data)
            addTask(createdTask)
            message.success("Task created successfully");
            router.push('/tasks')
        } catch (error) {
            console.error("Failed to create task:", error);
            message.error('Failed to create task')
        } finally {
            setIsSubmitting(false)
        }

    }

    return (
        <TaskForm initialValues={{
            title: '',
            status: "todo",
            priority: "medium"
        }} onSubmit={handleCreateTask} submitText='Create' isSubmitting={isSubmitting}/>
    )
}

