import Clipboard from '../../assets/Clipboard.svg';

import styles from './styles.module.css';

export function Tasks() {
    return (
        <>
            <section className={styles.info}>

                <div className={styles.created}>
                    <span>Completed</span>
                    <div className={styles.counter}>
                        <p>1</p>
                    </div>
                </div>

                <div className={styles.done}>
                    <span>Done</span>
                    <div className={styles.counter}>
                        <p>10</p>
                    </div>
                </div>

            </section>

            <section className={styles.tasks}>
                <img src={Clipboard} alt="" />
                <div style={{ display: "block" }}>
                    <strong>You don't have tasks registered yet!</strong>
                    kkk
                </div>
            </section>
        </>
    )
}