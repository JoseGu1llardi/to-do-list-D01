import { useState, useContext } from 'react';

import { PlusCircle } from '@phosphor-icons/react';

import styles from './styles.module.css';

export function NewTaskForm() {
    const [newTask, setNewTask] = useState("");

    console.log(newTask);

    return (
        <form className={styles.newTaskContainer}>
            <input
                type="text"
                className={styles.input}
                placeholder='Type a task'
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
            />

            <button type='submit' className={styles.button}>
                <span>Create</span>
                <PlusCircle size={23} />
            </button>
        </form>
    )
}