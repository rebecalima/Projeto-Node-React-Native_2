const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://user1:user1@cluster0-hu4dh.mongodb.net/semana-omnistack-9', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// req.query = Acessar query params (para filtros) --> req.query.idade : localhost:3333/?idade=20
// req.params = Acessar route params (para edição, delete) --> req.params.id : localhost:3333/id/1
// app.get('/', (req, res) => {
//     return res.json( { message: "Hello World" } );
// })
app.use(cors())
// app.use(cors({ origin: 'http://localhost:3333' })) -> restrição de acesso
app.use(express.json());
app.use(routes);

app.listen(3333)