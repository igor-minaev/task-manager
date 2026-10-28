import type {Task} from "@/features/tasks/types";

export type CreateTaskDto = Omit<Task,'id' | 'createdAt'>
export type UpdateTaskDto = Partial<CreateTaskDto>