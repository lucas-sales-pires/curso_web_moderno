const { series } = require("gulp")
const gulp = require("gulp")
const sass = require("gulp-sass")(require("node-sass"))
const uglifycss = require("gulp-uglifycss")
const concat = require("gulp-concat")

function transformacaoCSS() {
    return gulp.src("src/sass/index.scss") // Caminho do arquivo a ser alterado
    .pipe(sass().on("error",sass.logError)) // Converte em css
    .pipe(uglifycss({"uglyComments":true})) // junta tudo
    .pipe(concat("estilo.min.css")) // Nome do arquivo
    .pipe(gulp.dest("build/css")) // Pasta destino
}

function copiarHTML() {
    return gulp.src("src/index.html")
    .pipe(gulp.dest("build"))
    
}
exports.default = series(transformacaoCSS,copiarHTML)
