import { useState, useContext } from 'react';

import { TaskContext } from '../../contexts/TaskContext';

import { Trash } from '@phosphor-icons/react'

import styles from './styles.module.css';

interface TasksProps {
    id: number;
    content: string;
    status: boolean;
}[]

export function Task({ content, status, id }: TasksProps) {
    const { changeTaskStatus, isChecked } = useContext(TaskContext);

    function handleChageTaskStatus() {
        changeTaskStatus(id, status)
    }

    return (
        <section className={styles.task}>
            <div>
                <input
                    id='checked'
                    type="checkbox"
                    onClick={handleChageTaskStatus}
                />
                <span
                    className={isChecked ? styles.isChecked : ''}
                >
                    {content}
                </span>
            </div>
            <Trash size={20} />
        </section>
    )
}