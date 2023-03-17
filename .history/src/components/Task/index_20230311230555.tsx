import { useState } from 'react';

import { Trash } from '@phosphor-icons/react'

import styles from './styles.module.css';

export function Task() {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <section className={styles.task}>
            <div>
                <input
                    id='checked'
                    type="checkbox"
                    onClick={() => setIsChecked(!isChecked)}
                />
                <span className={isChecked ? styles.isChecked : ''}>Integer urna interdum massa libero auctor neque turpis turpis semper.aaaaaaaaaaaaaaaaaaaaaaaaaaaa</span>
            </div>
            <Trash size={20} />
        </section>
    )
}