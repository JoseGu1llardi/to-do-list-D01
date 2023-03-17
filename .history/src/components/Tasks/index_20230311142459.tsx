import styles from './styles.module.css';

export function Tasks() {
    return (
        <>
            <div className={styles.info}>
                <div className={styles.created}>
                    <span>Completed</span>
                    <span className={styles.counter}>1</span>
                </div>
                <div>hello</div>
            </div>
        </>
    )
}