import Layout from "../../components/Layout"
import { useState } from "react"

export default function Integracao() {
    const [cliente, setCliente] = useState({}) // [0, function(){}, 0
    const [codigo, setCodigo] = useState(1)

    function obterCliente(){
        fetch('http://localhost:3000/api/clientes/123')
            .then(resp => resp.json())
            .then(data => setCliente(data))
    }
    return (
        <Layout titulo = "Dados">
            <div>
                <input type="number" value={codigo} 
                onChange={e => setCodigo(e.target.value)}/>
                <button onClick={obterCliente}>Obter Cliente</button>
            </div>
                <ul>
                    <li>Código: {cliente.id}</li>
                    <li>Nome: {cliente.nome}</li>
                    <li>Email: {cliente.email}</li>
                </ul>
        </Layout>
    )
}
