"use client"

import {priorityConfig, statusConfig} from "@/features/tasks/config/taskConfig";
import {useTasks} from "@/features/tasks/context/TasksContext";
import type {Task, TaskPriority, TaskStatus} from "@/features/tasks/types";
import {Button, DatePicker, Form, Input, Select} from "antd";
import type {Dayjs} from "dayjs";

type CreateTaskFormValues = {
    title: string
    description?: string
    status: TaskStatus
    priority: TaskPriority
    dueDate?: Dayjs
}

export default function CreateTaskForm() {
    const {addTask} = useTasks()
    const handleSubmit = (values: CreateTaskFormValues) => {
        const dueDate = values.dueDate?.format('YYYY-MM-DD')
        const newTask: Task = {
            id: crypto.randomUUID(),
            title: values.title,
            status: values.status,
            priority: values.priority,
            createdAt: new Date().toISOString().slice(0, 10),
            description: values.description,
            dueDate
        }
        addTask(newTask)
    }
    const statusOptions = Object.entries(statusConfig).map(([key, config]) => ({value: key, label: config.label}))
    const priorityOptions = Object.entries(priorityConfig).map(([key, config]) => ({value: key, label: config.label}))
    return (
        <Form onFinish={handleSubmit}>
            <Form.Item name='title' label="Title" rules={[
                {required: true, message: "Title is required"},
                {min: 3, message: "Title must be at least 3 characters"}
            ]}>
                <Input/>
            </Form.Item>
            <Form.Item name='description' label="Description" rules={[
                {min: 3, message: "Description must be at least 3 characters"}
            ]}>
                <Input.TextArea/>
            </Form.Item>
            <Form.Item name='status' label="Status" rules={[
                {required: true, message: "Status is required"},
            ]}>
                <Select options={statusOptions}/>
            </Form.Item>
            <Form.Item name='priority' label="Priority" rules={[
                {required: true, message: "Priority is required"},
            ]}>
                <Select options={priorityOptions}/>
            </Form.Item>
            <Form.Item name="dueDate" label="Due date">
                <DatePicker/>
            </Form.Item>
            <Button htmlType="submit">Create</Button>
        </Form>
    )
}