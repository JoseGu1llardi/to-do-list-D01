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
    const [isChecked, setIsChecked] = useState(status);

    const { changeStatus } = useContext(TaskContext);

    function handleChangeStatus(id: number) {
        changeStatus(id);
    }

    return (
        <section className={styles.task}>
            <div>
                <input
                    id='checked'
                    type="checkbox"
                    onClick={() => handleChangeStatus(id)}
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