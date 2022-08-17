//importar o mongoose
const mongoose = require('mongoose')
//scripts de conexão
const con = async()=>{
    const atlas = await mongoose.connect('mongodb+srv://TutuMbs:Fox1590051018@cluster0.mx6rm.mongodb.net/Final')
}

//exportar as infomações para acesso externo
module.exports = con