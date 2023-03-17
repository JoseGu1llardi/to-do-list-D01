import { Button } from "../Button";
import { Input } from "../Input";

import styles from './styles.module.css';

export function NewTaskForm() {
    return (
        <form className={styles.newTaskContainer}>
            <Input />
            <Button />
        </form>
    )
}