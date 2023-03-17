import { Trash } from '@phosphor-icons/react'

import styles from './styles.module.css';

export function Task() {
    return (
        <section className={styles.task}>
            <div>
                <input type="checkbox" />
                <span>Integer urna interdum massa libero auctor neque turpis turpis semper.</span>
            </div>
            <Trash size={20} />
        </section>
    )
}