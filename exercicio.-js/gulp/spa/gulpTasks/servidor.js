const gulp = require("gulp")
const webserver = require("gulp-webserver")
const { watch } = require('gulp')

function servidor(callback) {
    return gulp.src("build")
    .pipe(webserver({
        port: 8080,
        open: true,
        liverreload: true
        //  port: 8080: Especifica que o servidor será iniciado na porta 8080.
        // open: true: Indica que o navegador padrão será aberto automaticamente quando o servidor iniciar.
        // livereload: true: Ativa a funcionalidade de LiveReload, o que significa que o navegador será recarregado automaticamente sempre que houver alterações nos arquivos.
    }))
}

function monitorarArquivos() {
    watch("src/**/*.html",() => gulp.series("appHTML")())
    watch("src/**/*.scss",() => gulp.series("appCSS")())
    watch("src/**/*.js",() => gulp.series("appJS")())
    watch("src/assets/imgs/*.*",() => gulp.series("appIMG")())
}


module.exports = {
    monitorarArquivos,
    servidor
}
