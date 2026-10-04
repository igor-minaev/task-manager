"use client"
import type {Task, TaskPriority, TaskStatus} from "@/features/tasks/types";
import {Table, type TableColumnsType, Tag} from "antd";

type TasksTableProps = {
    tasks: Task[]
}
type StatusConfig = {
    label: string,
    color: string
}

type PriorityConfig = {
    label: string,
    color: string
}

const priorityConfig: Record<TaskPriority, PriorityConfig> = {
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


const statusConfig: Record<TaskStatus, StatusConfig> = {
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

]

export default function TasksTable({tasks}: TasksTableProps) {
    return <Table<Task> rowKey="id" dataSource={tasks} columns={columns}/>
}