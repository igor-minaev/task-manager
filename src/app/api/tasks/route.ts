import type {CreateTaskDto} from "@/features/tasks/api/types";
import {tasks} from "@/features/tasks/mocks/tasks";
import type {Task} from "@/features/tasks/types";

export async function GET() {
    return Response.json(tasks, {
        status: 200,
    });
}

export async function POST(request: Request) {
    const body: CreateTaskDto = await request.json()

    const newTask: Task = {
        ...body,
        id: crypto.randomUUID(),
        createdAt: new Date().toISOString(),
    }
    return Response.json(newTask,{status:201})
}