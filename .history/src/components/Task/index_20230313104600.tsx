import { useState, useContext } from 'react';

import api from '../../services/api';

import { TaskContext } from '../../contexts/TaskContext';

import { Trash } from '@phosphor-icons/react'

import styles from './styles.module.css';

interface TasksProps {
    id: number;
    content: string;
    status: boolean;
}[]

export function Task({ content, status, id }: TasksProps) {
    const [isChecked, setIsChecked] = useState(Boolean);

    async function changeTaskStatus() {
        const response = await api.patch(`/tasks/${id}`, {
            status: !status
        });

        return response.data;
    }

    return (
        <section className={styles.task}>
            <div>
                <input
                    id='checked'
                    type="checkbox"
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