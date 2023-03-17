import styles from './styles.module.css';

export function Tasks() {
    return (
        <>
            <div className={styles.info}>

                <div className={styles.created}>
                    <span>Completed</span>
                    <div className={styles.counter}>
                        <p>1</p>
                    </div>
                </div>

                <div className={styles.done}>
                    <span>Completed</span>
                    <div className={styles.counter}>
                        <p>1</p>
                    </div>
                </div>
            </div>
        </>
    )
}