import {tasks} from "@/features/tasks/mocks/tasks";

export async function GET(
    _request: Request,
    context: {
        params: Promise<{ id: string }>;
    }
) {
    const {id} = await context.params
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