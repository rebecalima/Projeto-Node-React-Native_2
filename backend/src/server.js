const express = require('express')

const app = express();

app.use(express.json());
// req.query = Acessar query params (para filtros) --> req.query.idade : localhost:3333/?idade=20
// req.params = Acessar route params (para edição, delete) --> req.params.id : localhost:3333/id/1
app.get('/', (req, res) => {
    return res.json( { message: "Hello World" } );
})

app.listen(3333)