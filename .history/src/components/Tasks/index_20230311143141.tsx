import styles from './styles.module.css';

export function Tasks() {
    return (
        <>
            <div className={styles.info}>
                <div className={styles.created}>
                    <span>Completed</span>
                    <div className={styles.counter}>1</div>
                </div>
                <div>hello</div>
            </div>
        </>
    )
}