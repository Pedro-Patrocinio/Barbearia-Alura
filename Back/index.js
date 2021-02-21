const customExpress = require('./config/customExpress');
const connection = require('./infraestrutura/connection');
const tables = require('./infraestrutura/tables');

connection.connect(erro => {
    if(erro){
        console.log(erro);
    }
    else{
        console.log("Banco de dados conectado com sucesso");
        const app = customExpress();
        app.listen(3000, () => console.log("Servidor ativo na porta 3000"));
        tabelas.init(connection);
    }
})