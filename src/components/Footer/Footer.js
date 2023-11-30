import styles from "./Footer.module.scss"



function Footer (){
    return (
    <footer className={`${ styles.footer } d-flex flex-row justify-content-center align-items-center p-20`}>
        <p>
        © 2023 jayjay. Tous droits réservés.
        </p>
    </footer>
    );
}

export default Footer;