const passo1 = (ctx, next) => {
    ctx.valor1 = 'mid1'
    next()
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2'
    next()
}

const passo3 = ctx => ctx.valor3 = 'mid3'

const exec = (ctx, ...middlewares) => {
    const executePasso = function(index){
        if(middlewares && index < middlewares.length ){
            middlewares[index](ctx, () => ctx > executePasso(index + 1));
        }

    }

    executePasso(0);
}
const ctx = {}
exec(ctx, passo1, passo2, passo3)
console.log(ctx)
