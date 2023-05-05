import styles from './Header.module.css';

const Header = () => {
    
    
    return (
        <>
            <header className={styles.header}>
                <h1 className={styles.title}>
                    Calculadora IMC
                </h1>
                <img className={styles.logo} 
                src="https://www.bienestarsaval.cl/assets_web/img/pesa-22.png" 
                alt="Calc IMC" />
            </header>
        </>
    );
}

export default Header;