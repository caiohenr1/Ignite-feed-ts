import styles from '../Header/Header.module.css'
import igniteLogo from '../../assets/ignite-logo.svg'
export const Header = () => {
    return (
        <div className={styles.header}>
            <img src={igniteLogo} alt="Logotipo do Ignite" />
            <strong>GSS CORPORATION ®</strong>
        </div>
    )
}