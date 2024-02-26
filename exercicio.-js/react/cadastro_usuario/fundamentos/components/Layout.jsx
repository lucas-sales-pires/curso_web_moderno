import Link from "next/link";
import styles from './Layout.module.css';

export default function Layout(props) {
    return (
        <div className={styles.Layout}>
            <div className={styles.cabecalho}>
            <Link href={"/"}>Voltar</Link>
            </div>
            <div className={styles.conteudo}>{props.children}</div>
            
        </div>
    )
}
