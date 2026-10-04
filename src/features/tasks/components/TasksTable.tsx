"use client"
import type {Task, TaskStatus} from "@/features/tasks/types";
import {Table, type TableColumnsType} from "antd";

type TasksTableProps = {
    tasks:Task[]
}

const statusLabels: Record<TaskStatus, string> = {
    todo: 'Todo',
    in_progress: "In progress",
    done: "Done"
}

const columns: TableColumnsType<Task> = [
    {
        title: "Title",
        dataIndex: "title"
    },
    {
        title: "Status",
        dataIndex: "status",
        render: (_, record) => statusLabels[record.status]
    },
]

export default function TasksTable({tasks}:TasksTableProps) {
    return <Table<Task> rowKey="id" dataSource={tasks} columns={columns}/>
}