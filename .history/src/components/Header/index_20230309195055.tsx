import Logo from '../../assets/Logo (1).svg'

import styles from './styles.module.css';

export function Header() {
    return (
        <header className={styles.container}>
            <Logo />
        </header>
    )
}