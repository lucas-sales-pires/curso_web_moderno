import Cabecalho from "../../components/Cabecalho";
import Link from 'next/link'

export default function Exemplo() {
    return (
        <div>
            <Cabecalho titulo = "xyz" />
            <Link href={"/"}>Voltar</Link>
        </div>
    )
}
