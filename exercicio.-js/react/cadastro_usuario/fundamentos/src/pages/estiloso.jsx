import styles from './Estiloso.module.css';
import Link from 'next/link';
import Layout from '../../components/Layout';
export default function Estiloso() {
    return (
        <Layout>
            <div className={styles.roxo}>
                <h1>Estiloso</h1>
                <Link href={"/"}>Voltar</Link>
            </div>

        </Layout>
    )
}
