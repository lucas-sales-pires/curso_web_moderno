export default function handler(req,res){
    const codigo = req.query.codigo
    res.status(200).json({
        id: codigo,
        nome: 'Maria '+ codigo,
        idade: 35 + codigo,
        email:'mariamariamaria@xfcmail.com ' +codigo
    })
}
