export default function Cabecalho(props) {
    //props é somente leitura
    return (
        <header>
            <h1>{props.titulo}</h1>
            <h2>Vamos estudar este framework</h2>
        </header>
    )
}
