import {priorityConfig, statusConfig} from "@/features/tasks/config/taskConfig";
import type {TaskFormValues} from "@/features/tasks/types/taskForm";
import {Button, DatePicker, Form, Input, Select} from "antd";


type TaskFormProps = {
    initialValues?: TaskFormValues;
    onSubmit: (values: TaskFormValues) => void | Promise<void>;
    submitText?: string
    isSubmitting?: boolean
};

const statusOptions = Object.entries(statusConfig).map(([key, config]) => ({value: key, label: config.label}))
const priorityOptions = Object.entries(priorityConfig).map(([key, config]) => ({value: key, label: config.label}))

export default function TaskForm({initialValues, onSubmit, submitText = 'Save task', isSubmitting = false}: TaskFormProps) {
    return (
        <Form<TaskFormValues> initialValues={initialValues} onFinish={onSubmit}>
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
            <Button type="primary" htmlType="submit" loading={isSubmitting}>{submitText}</Button>
        </Form>
    )
}