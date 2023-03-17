import { Trash } from '@phosphor-icons/react'

import styles from './styles.module.css';

export function Task() {

    function handleIsChecked() {

    }

    return (
        <section className={styles.task}>
            <div>
                <input
                    id='checked'
                    type="checkbox"
                    onClick={handleIsChecked}
                />
                <span>Integer urna interdum massa libero auctor neque turpis turpis semper.</span>
            </div>
            <Trash size={20} />
        </section>
    )
}