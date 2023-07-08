/*// middleware pattern (chain of responsibility)

const passo1 = (ctx, next) => {
    ctx.valor1 = 'mid1'
    next()
} 

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2'
    next()
}

const passo3 = ctx => ctx.valor3 = 'mid3'

const exec = (ctx, ...middleware) => {
    const execPasso = indice => {
        middleware && indice < middleware.length &&
            middleware[indice] (ctx, () => execPasso(indice + 1))
    }
    execPasso(0)
}

const ctx = {}
exec(ctx, passo1, passo2, passo3)
console.log(ctx)
*/
// exemplo melhor
const verificarAutenticacao = (ctx, next) => {
    if (ctx.usuarioAutenticado) {
        console.log('Usuário autenticado.')
        next()
    } else {
        console.log('Usuário não autenticado. Redirecionando para a página de login.')
        // Redirecionar para a página de login
    }
}

const carregarPerfilUsuario = (ctx, next) => {
    if (ctx.usuarioAutenticado) {
        console.log('Carregando perfil do usuário...')
        ctx.perfilUsuario = carregarPerfil(ctx.usuarioAutenticado)
        next()
    } else {
        console.log('Usuário não autenticado. Redirecionando para a página de login.')
        // Redirecionar para a página de login
    }
}

const verificarAutorizacao = (ctx, next) => {
    if (ctx.perfilUsuario.admin) {
        console.log('Usuário possui permissões de administrador.')
        next()
    } else {
        console.log('Acesso não autorizado.')
        // Exibir página de acesso não autorizado
    }
}

const processarPedido = (ctx) => {
    console.log('Processando pedido...')
    // Lógica para processar o pedido
}
const ctx = {
    usuarioAutenticado: 'user123'
}

exec(ctx, verificarAutenticacao, carregarPerfilUsuario, verificarAutorizacao, processarPedido)

