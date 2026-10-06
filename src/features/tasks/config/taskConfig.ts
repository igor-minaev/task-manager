import type {TaskPriority, TaskStatus} from "@/features/tasks/types";

type TagConfig = {
    label: string,
    color: string
}


export const priorityConfig: Record<TaskPriority, TagConfig> = {
    low: {
        label: 'Low',
        color: "yellow"
    },
    medium: {
        label: "Medium",
        color: 'orange'
    },
    high: {
        label: 'High',
        color: "red"
    }
}


export const statusConfig: Record<TaskStatus, TagConfig> = {
    todo: {
        label: 'Todo',
        color: "purple"
    },
    in_progress: {
        label: "In progress",
        color: "magenta"
    },
    done: {
        label: "Done",
        color: "green"

    }
}