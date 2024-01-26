const {series} = require("gulp") // Executa os comandos pipe em serie
const gulp = require("gulp")
const concat = require("gulp-concat") // Concatena o resultado
const uglify = require("gulp-uglify") // Minifica o codigo
const babel = require("gulp-babel") // Transforma o código na forma mais aceita pelos browsers


function padrao(callback) {
    return gulp.src("src/**/*.js")
    .pipe(babel({
        comments: false, // Tirar comentários
        presets: ["env"] // Codigo mais compativel com codigo possivel
    }))
    .pipe(uglify()) //  Minifica o código
    .pipe(concat("codigo.min.js")) // Pega todos os arquivos que já estão transpilados e concatena eles e renomeia o final do nome do arquivo 
    .on("error",err => console.log(err)) // Resposta para um erro
    .pipe(gulp.dest("build"))// Pasta destino do arquivo
    
}
function fim(callback) {
    console.log("Fim !!!")
    return callback()
}

exports.default = series(padrao,fim)
