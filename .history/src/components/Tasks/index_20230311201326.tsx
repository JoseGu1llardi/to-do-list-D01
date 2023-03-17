import Clipboard from '../../assets/Clipboard.svg';

import styles from './styles.module.css';

export function Tasks() {
    return (
        <>
            <section className={styles.info}>

                <div className={styles.created}>
                    <span>Completed</span>
                    <div className={styles.counterCreated}>
                        <p>1</p>
                    </div>
                </div>

                <div className={styles.done}>
                    <span>Done</span>
                    <div className={styles.doneCreated}>
                        <span>2 de 5</span>
                    </div>
                </div>

            </section>

            <section className={styles.tasks}>
                <img src={Clipboard} alt="" />
                <strong>You don't have tasks registered yet!</strong>
                <span>Create tasks and organize your to-do list</span>
            </section>
        </>
    )
}