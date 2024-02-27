import Layout from "../../components/Layout"
import { useState } from "react"

export default function estado() {
    let estado = useState(0) // retorna um array com 2 elementos
    let [numero, alterarNumero] = estado // [0, function(){}, 0]

    function incrementar(){
        alterarNumero(numero + 1)
    
    }
    return (
        <Layout titulo = "Componente com estado">
        <div>
            <span>{numero}</span>
            <button onClick={incrementar}>Incrementar</button>
        </div>
        </Layout>
    )
}
