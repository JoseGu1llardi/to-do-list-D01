import styles from './styles.module.css';

export function NewTaskForm() {
    return (
        <form className={styles.newTaskContainer}>
            <input
                type="text"
                className={styles.input}
                placeholder='Type a task'
            />
        </form>
    )
}