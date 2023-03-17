import { useEffect, useState } from 'react';

import api from '../../services/api';

import Clipboard from '../../assets/Clipboard.svg';

import { Task } from '../Task';

import styles from './styles.module.css';

interface TaskType {
    id: number;
    content: string;
    status: boolean;
}

export function TasksList() {
    const [tasks, setTasks] = useState<TaskType[]>([]);

    useEffect(() => {
        api.get("/tasks")
            .then(({ data }) => setTasks(data))
    }, []);
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
                        <span>2 of 5</span>
                    </div>
                </div>

            </section>

            {/* <section className={styles.tasks}>
                <img src={Clipboard} alt="" />
                <strong>You don't have tasks registered yet!</strong>
                <span>Create tasks and organize your to-do list</span>
            </section> */}

            <section className={styles.list}>
                {
                    tasks.map((task) => (
                        <Task id={task.id} content={task.content} status={task.status} />
                    ))
                }
            </section>
        </>
    )
}