import styles from './styles.module.css';

export function Tasks() {
    return (
        <>
            <div className={styles.info}>
                <div>
                    <span>Tasks completed</span>
                    <span className={styles.counter}>1</span>
                </div>
                <div>hello</div>
            </div>
        </>
    )
}