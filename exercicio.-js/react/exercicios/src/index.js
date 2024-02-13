import React from "react";
import ReactDOM from "react-dom";
import Bomdia from "./componentes/bomdia";
import Saudacao from "./componentes/saudacao"
//Sintaxe JSX
ReactDOM.render(<Bomdia nome="Lucas" idade={25} />, document.getElementById("root"))
ReactDOM.render(<div>
    <Saudacao tipo = "Bom dia" nome = "João"/>
</div>
, document.querySelector("#root"))
// $('<h1>').html('React 2')
