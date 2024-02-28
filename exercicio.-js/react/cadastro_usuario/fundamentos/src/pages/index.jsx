import Link from 'next/link'
import Navegador from '../../components/Navegador'
export default function Inicio() {
    return (
      <div>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          height: '100vh'
        }}>
          <Navegador destino="/estiloso" nome = "estiloso"/>
          <Navegador destino="/exemplo" nome = "exemplo" cor="#9400d3"/>
          <Navegador destino="/jsx" nome = "jsx" cor="crimson"/>
          <Navegador destino="/navegacao" nome = "navegação 01" cor="green"/>
          <Navegador destino="/cliente/sp-2/123"  nome = "navegação 02" cor="blue"/>
          <Navegador destino="/estado"  nome = "estado" cor="#a45b71"/>
          <Navegador destino="/integracao1"  nome = "Integração com API" cor="#42a9a5"/>
          <Navegador destino="/estatico"  nome = "Conteúdo Estático" cor="#42a9a5"/>
        </div>
      </div>
    )
}
