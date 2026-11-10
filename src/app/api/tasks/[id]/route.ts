import type {UpdateTaskDto} from "@/features/tasks/api/types";
import {tasks} from "@/features/tasks/mocks/tasks";

export async function GET(
    _request: Request,
    {params}: { params: Promise<{ id: string }>}
) {
    const {id} = await params
    const task = tasks.find(task=>task.id === id)
    if(!task){
        return Response.json({ message: "Task not found" }, {
            status: 404,
        });
    }
    return Response.json(task, {
        status: 200,
    });
}

export async function PATCH(
    request: Request,
    {params}: { params: Promise<{ id: string }>; }
){
    const {id} = await params
    const updates:UpdateTaskDto = await request.json()
    const task = tasks.find(task=>task.id === id)
    const updatedTask = {...task,...updates}
    if(!task){
        return Response.json({ message: "Task not found" }, {
            status: 404,
        });
    }
    return Response.json(updatedTask, {
        status: 200,
    });
}