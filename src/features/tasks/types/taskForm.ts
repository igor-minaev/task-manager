import type {TaskPriority, TaskStatus} from "@/features/tasks/types/task";
import type {Dayjs} from "dayjs";

export type TaskFormValues = {
    title: string
    description?: string
    status: TaskStatus
    priority: TaskPriority
    dueDate?: Dayjs
}