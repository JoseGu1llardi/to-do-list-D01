import { InputHTMLAttributes } from 'react';

import styles from './styles.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {

}

export function Input({ ...props }): InputProps {
    return (
        <input
            type="text"
            className={styles.input}
            placeholder='Type a task'
            {...props}
        />
    )
}