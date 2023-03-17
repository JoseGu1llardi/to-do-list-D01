import { useState, useContext, FormEvent } from 'react';

import { TaskContext, TaskType } from '../../contexts/TaskContext';

import { PlusCircle } from '@phosphor-icons/react';

import styles from './styles.module.css';

interface NewTaskProps {
    task: TaskType;
    event: FormEvent;
}

export function NewTaskForm() {
    const [contentNewTask, setContentNewTask] = useState("");

    const { setTasks } = useContext(TaskContext);

    async function handleCreateNewTask() {
        const newTask: TaskType = {
            id: 5,
            content: contentNewTask,
            status: false
        }
    }

    return (
        <form onSubmit={handleCreateNewTask} className={styles.newTaskContainer}>
            <input
                type="text"
                className={styles.input}
                placeholder='Type a task'
                value={contentNewTask}
                onChange={(e) => setContentNewTask(e.target.value)}
            />

            <button type='submit' className={styles.button}>
                <span>Create</span>
                <PlusCircle size={23} />
            </button>
        </form>
    )
}