import type {CreateTaskDto} from "@/features/tasks/api/types";
import type {Task} from "@/features/tasks/types";

export async function createTask(
    data: CreateTaskDto
): Promise<Task> {
    const response = await fetch('/api/tasks', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
    )
    if (!response.ok) {
        throw new Error('Failed to create task')
    }
    return await response.json()
}

export async function getTasks(): Promise<Task[]> {
    const response = await fetch('/api/tasks')
    if (!response.ok) {
        throw new Error('Failed to fetch tasks')
    }
    return await response.json()
}