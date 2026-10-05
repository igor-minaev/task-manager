import {priorityConfig, statusConfig} from "@/features/tasks/config/taskConfig";
import type {Task} from "@/features/tasks/types";
import {Descriptions, Tag} from "antd";

type TaskDetailsProps = {
    task: Task
}

export default function TaskDetails({task}: TaskDetailsProps) {

    const status = statusConfig[task.status]
    const priority = priorityConfig[task.priority]
    const items = [
        {
            key: 'title',
            label: 'Title',
            children: task.title
        },
        {
            key: 'description',
            label: 'Description',
            children: task.description ?? '-'
        },
        {
            key: 'status',
            label: 'Status',
            children: <Tag color={status.color}>{status.label}</Tag>
        },
        {
            key: 'priority',
            label: 'Priority',
            children: <Tag color={priority.color}>{priority.label}</Tag>
        },
        {
            key: 'createdAt',
            label: 'Created at',
            children: task.createdAt
        },
        {
            key: 'dueDate',
            label: 'Due date',
            children: task.dueDate ?? '-'
        }
    ]
    return <Descriptions items={items}/>
}