import type {Task} from "@/features/tasks/types";

export const tasks: Task[] = [
    {
        id: "1",
        title: "Task1",
        status: "done",
        priority: "low",
        createdAt: "2026-10-02"
    },
    {
        id: "2",
        title: "Task2",
        status: "todo",
        priority: "medium",
        createdAt: "2026-08-01"
    },
    {
        id: "3",
        title: "Task3",
        status: "in_progress",
        priority: "low",
        createdAt: "2026-07-22"
    },
    {
        id: "4",
        title: "Task4",
        description: 'what to do',
        status: "todo",
        priority: "high",
        createdAt: "2026-09-30"
    },
    {
        id: "5",
        title: "Task5",
        status: "in_progress",
        priority: "low",
        createdAt: "2026-10-02",
        dueDate: "2026-10-12"
    }
]