const Express = require('express');
const app = Express();
const PORT = 3000;
const db = require('./db/connection');
const cadPonto = require('./models/cadPonto');
const bodyParser = require('body-parser');
const routes = require('./routes/post');


//Definindo a porta para o express 
app.listen(PORT, ()=>{

    console.log(`O express está rodando na porta ${PORT}`);

});

//Rota de teste
app.get('/', (req,res) =>{
    res.send('Rota teste funcionando')
});

///VALIDADANDO BANCO
db
.authenticate()
.then(()=>{
    console.log("Banco conectado com sucesso");
})
.catch( err =>{
    console.log(`erro ao conectar no banco ${err}`);
});


//BODYPARSER 
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//USANDO AS ROTAS
app.use('/ponto', routes);

