import styles from './styles.module.css';

export function Task() {
    return (
        <section className={styles.task}>
            <input type="checkbox" />
            <span>Clean the house</span>
        </section>
    )
}