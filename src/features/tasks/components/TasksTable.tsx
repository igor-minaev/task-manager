"use client"
import {priorityConfig, statusConfig} from "@/features/tasks/config/taskConfig";
import {useTasks} from "@/features/tasks/context/TasksContext";
import type {Task, TaskPriority, TaskStatus} from "@/features/tasks/types";
import {Input, Select, Table, type TableColumnsType, Tag} from "antd";
import Link from "next/link";
import {type ChangeEvent, useState} from "react";

type StatusFilter = TaskStatus | 'all'
type PriorityFilter = TaskPriority | 'all'


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

const statusOptions = [
    {value:'all',label:'All statuses'},
    ...Object.entries(statusConfig).map(([key, config]) => ({value: key, label: config.label}))
]
const priorityOptions = [
    {value:'all', label:'All priorities'},
    ...Object.entries(priorityConfig).map(([key, config]) => ({value: key, label: config.label}))
]

export default function TasksTable() {
    const {tasks} = useTasks()
    const [search, setSearch] = useState('')
    const [statusFilter, setStatusFilter] = useState<StatusFilter>('all')
    const [priorityFilter, setPriorityFilter] = useState<PriorityFilter>('all')

    const onSearchHandler = (e: ChangeEvent<HTMLInputElement>) => setSearch(e.currentTarget.value)

    const filteredTasks = tasks.filter(task => {
        const matchesSearch = task.title.toLowerCase().includes(search.trim().toLowerCase())
        const matchesStatus = statusFilter === "all" || task.status === statusFilter;
        const matchesPriority = priorityFilter === "all" || task.priority === priorityFilter;
        return matchesSearch && matchesStatus && matchesPriority
    });

    return (
        <>
            <Input value={search} onChange={onSearchHandler}/>
            <Select<StatusFilter>
                value={statusFilter}
                onChange={setStatusFilter}
                options={statusOptions}
            />
            <Select<PriorityFilter>
                value={priorityFilter}
                onChange={setPriorityFilter}
                options={priorityOptions}/>
            <Table<Task> rowKey="id" dataSource={filteredTasks} columns={columns}/>
        </>
    )
}