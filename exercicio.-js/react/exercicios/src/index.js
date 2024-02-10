import React from "react";
import ReactDOM from "react-dom";
import Bomdia from "./componentes/bomdia";
import Multi,{ BoaTarde}  from "./componentes/multiplos"
//Sintaxe JSX
ReactDOM.render(<Bomdia nome="Lucas" idade={25} />, document.getElementById("root"))
ReactDOM.render(<div>
    <Multi.BoaNoite nome="Lucas"></Multi.BoaNoite>,
    <BoaTarde nome="Fatima"></BoaTarde>
</div>
, document.querySelector("#root"))
// $('<h1>').html('React 2')
