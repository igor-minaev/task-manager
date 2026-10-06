"use client"
import {priorityConfig, statusConfig} from "@/features/tasks/config/taskConfig";
import {useTasks} from "@/features/tasks/context/TasksContext";
import type {Task} from "@/features/tasks/types";
import {Table, type TableColumnsType, Tag} from "antd";
import Link from "next/link";


const columns: TableColumnsType<Task> = [
    {
        title: "Title",
        dataIndex: "title"
    },
    {
        title: "Status",
        dataIndex: "status",
        render: (_, record) => {
            const config = statusConfig[record.status]
            return <Tag color={config.color}>{config.label}</Tag>
        }
    },
    {
        title: "Priority",
        dataIndex: "priority",
        render: (_, record) => {
            const config = priorityConfig[record.priority]
            return <Tag color={config.color}>{config.label}</Tag>
        }
    },
    {
        title: "Due date",
        dataIndex: "dueDate",
        render: (dueDate: Task["dueDate"]) => {
            return dueDate ?? '-'
        }
    },
    {
        title: "Actions",
        render: (_, record) => {
            return <Link href={`/tasks/${record.id}`}>View</Link>
        }
    }

]

export default function TasksTable() {
    const {tasks} = useTasks()
    return <Table<Task> rowKey="id" dataSource={tasks} columns={columns}/>
}