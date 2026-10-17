"use client"

import TaskDetails from "@/features/tasks/components/TaskDetails";
import {useTasks} from "@/features/tasks/context/TasksContext";

type TaskDetailsContainerProps = {
    taskId: string
}

export default function TaskDetailsContainer({taskId}: TaskDetailsContainerProps) {
    const {tasks} = useTasks()
    const task = tasks.find(task => task.id === taskId)
    if (!task) return <div>Task not found</div>
    return (
        <TaskDetails task={task}/>
    )
}
