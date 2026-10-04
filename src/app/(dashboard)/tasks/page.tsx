import TasksTable from "@/features/tasks/components/TasksTable";
import {tasks} from "@/features/tasks/mocks/tasks";

export default function Tasks() {
    return <TasksTable tasks={tasks}/>

}