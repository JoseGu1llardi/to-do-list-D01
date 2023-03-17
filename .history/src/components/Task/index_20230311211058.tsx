import { Trash } from '@phosphor-icons/react'

import styles from './styles.module.css';

export function Task() {
    return (
        <section className={styles.task}>
            <input type="checkbox" />
            <span>Clean the house</span>
            <img src={Trash} alt="" />
        </section>
    )
}