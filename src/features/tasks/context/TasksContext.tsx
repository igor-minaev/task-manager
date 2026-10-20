"use client"
import {tasks as mockTasks} from "@/features/tasks/mocks/tasks";
import type {Task, TaskUpdates} from "@/features/tasks/types";
import {createContext, type ReactNode, useContext, useState} from "react";

type TasksProviderProps = {
    children: ReactNode
}

type TasksContextValue = {
    tasks: Task[]
    addTask: (task: Task) => void
    deleteTask: (taskId: string) => void
    updateTask: (taskId: string, updates: TaskUpdates) => void
}

const TasksContext = createContext<TasksContextValue | undefined>(undefined)

export default function TasksProvider({children}: TasksProviderProps) {
    const [tasks, setTasks] = useState<Task[]>(mockTasks)
    const addTask = (task: Task) => {
        setTasks(prevTasks => ([...prevTasks, task]))
    }
    const deleteTask = (taskId: string) => {
        setTasks(prevTasks => prevTasks.filter(task  => task.id !== taskId))
    }

    const updateTask = (taskId: string, updates: TaskUpdates) => {
        setTasks(prevTasks => prevTasks.map(task => task.id === taskId ? {...task, ...updates} : task))
    }

    return (
        <TasksContext.Provider value={{tasks, addTask, deleteTask, updateTask}}>
            {children}
        </TasksContext.Provider>
    )
}

export function useTasks() {
    const context = useContext(TasksContext)
    if (!context) {
        throw new Error("useTasks must be used within TasksProvider")
    }

    return context
}