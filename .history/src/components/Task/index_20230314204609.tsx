import { useState, useContext, ChangeEvent } from 'react';

import api from '../../services/api';

import { TaskContext } from '../../contexts/TaskContext';

import { Trash } from '@phosphor-icons/react'

import styles from './styles.module.css';

interface TasksProps {
    id: string;
    content: string;
    status: boolean;
}[]

export function Task({ content, status, id }: TasksProps) {
    const [isChecked, setIsChecked] = useState(status);

    async function changeTaskStatus(event: ChangeEvent<HTMLInputElement>) {
        const response = await api.patch(`/tasks/${id}`, {
            status: event.target.checked
        });

        setIsChecked(response.data.status);
    }

    return (
        <section className={styles.task}>
            <div>
                <input
                    id='checked'
                    type="checkbox"
                    checked={isChecked}
                    onChange={changeTaskStatus}
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