import { useState } from 'react';

import { Trash } from '@phosphor-icons/react'

import styles from './styles.module.css';

interface TasksProps {
    id: number;
    content: string;
    status: boolean;
}[]

export function Task({ content, status, id }: TasksProps) {
    const [isChecked, setIsChecked] = useState(Boolean);

    return (
        <section className={styles.task}>
            <div>
                <input
                    id='checked'
                    type="checkbox"
                    onClick={() => setIsChecked(!status)}
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