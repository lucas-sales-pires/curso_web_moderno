import Link from 'next/link'
import styles from '../src/styles/Navegador.module.css'
export default function Navegador(props) {
  return (
    <Link href={props.destino} nome = {props.nome} >
        <span className={styles.navegador} style={{
            backgroundColor: props.cor ?? 'dodgerblue'
        }}>{props.nome}</span><br />
    </Link>
   )
}
