import { useState, useContext, FormEvent } from 'react';

import { v4 as uuidv4 } from 'uuid';

import api from '../../services/api';

import { TaskContext, TaskType } from '../../contexts/TaskContext';

import { PlusCircle } from '@phosphor-icons/react';

import styles from './styles.module.css';

export function NewTaskForm() {
    const [contentNewTask, setContentNewTask] = useState("");

    const { setTasks, tasks } = useContext(TaskContext);

    async function handleCreateNewTask(event: FormEvent) {
        event.preventDefault();

        try {
            if (contentNewTask !== "") {
                const res = await api.post("/tasks", { id: uuidv4(), content: contentNewTask, status: false });
                setTasks(state => [...state, res.data]);
            } else {
                alert("Enter a new task!");
            }

        } catch (err) {
            console.log(err);
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