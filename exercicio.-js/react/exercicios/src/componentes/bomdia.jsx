import React from "react";

export default props => [ 
    <h1 key={"h1"} > Olá {props.nome}</h1>,
    <h2 key={"h2"}> Você tem {props.idade} anos</h2>
]

// export default props  => <h1>Bom dia {props.nome}!</h1>

// export default props => <React.Fragment> 
//     <h1> Olá {props.nome}</h1>,
//     <h2 > Você tem {props.idade} anos</h2>
// </React.Fragment>
   
// export default props => <div> 
//     <h1> Olá {props.nome}</h1>,
//     <h2 > Você tem {props.idade} anos</h2>
// </div>
   