import { useContext } from 'react';

import { TaskContext } from '../../contexts/TaskContext';

import { Task } from '../Task';

import Clipboard from '../../assets/Clipboard.svg';

import styles from './styles.module.css';

export function TasksList() {
    const { tasks } = useContext(TaskContext);

    const tasksCompleted = tasks.filter(task => task.status !== false);

    console.log(tasksCompleted);

    return (
        <>
            <section className={styles.info}>

                <div className={styles.created}>
                    <span>Completed</span>
                    <div className={styles.counterCreated}>
                        <p>{tasks.length}</p>
                    </div>
                </div>

                <div className={styles.done}>
                    <span>Done</span>
                    <div className={styles.doneCreated}>
                        <span>{tasksCompleted.length} of {tasks.length}</span>
                    </div>
                </div>

            </section>

            {
                tasks.length === 0 ? (
                    <section className={styles.tasks}>
                        <img src={Clipboard} alt="" />
                        <strong>You don't have tasks registered yet!</strong>
                        <span>Create tasks and organize your to-do list</span>
                    </section>
                ) : (
                    <section className={styles.list}>
                        {
                            tasks.map((task) => (
                                <Task
                                    key={task.id}
                                    content={task.content}
                                    status={task.status}
                                    id={task.id} />
                            ))
                        }
                    </section>
                )
            }
        </>
    )
}