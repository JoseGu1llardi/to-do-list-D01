import { useState } from 'react';

import api from '../../services/api';

import { Trash } from '@phosphor-icons/react'

import styles from './styles.module.css';

interface TasksProps {
    id: number;
    content: string;
    status: boolean;
}[]

export function Task() {
    const [tasks, setTasks] = useState([]);
    const [isChecked, setIsChecked] = useState(false);

    return (
        <section className={styles.task}>
            <div>
                <input
                    id='checked'
                    type="checkbox"
                    onClick={() => setIsChecked(!isChecked)}
                />
                <span
                    className={isChecked ? styles.isChecked : ''}
                >
                    Integer urna interdum massa libero auctor neque turpis turpis semper.
                </span>
            </div>
            <Trash size={20} />
        </section>
    )
}