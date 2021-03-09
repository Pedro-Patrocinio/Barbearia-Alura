class tables{
    init(connection){
        this.connection = connection;
        this.criarAgendamentos();
    }

    criarAgendamentos(){
        const sql = 'CREATE TABLE IF NOT EXISTS Agendamentos(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, cliente varchar(50) NOT NULL, telefone varchar(20) NOT NULL, mensagem text, tipoContato numeric(2) NOT NULL, horario numeric(2) NOT NULL, novidades bool NOT NULL,)';

        this.connection.query(sql,(erro) => {
            if(erro){
                console.log(erro);
            }else{
                console.log("Tabela atendimentos Ok");
            }
        })
    }
};

module.exports = new tables;