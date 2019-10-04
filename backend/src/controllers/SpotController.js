const User = require('../models/User');
const Spot = require('../models/Spot');

module.exports = {
    async index(req, res){
        const { tech } = req.query;

        const spots = await Spot.find({ techs: tech })
        // faz o map automaticamente

        return res.json(spots);
    },

    async store(req, res){
        const { filename } = req.file;
        // salva apenas o nome do arquivo no banco e não o arquivo inteiro
        // o arquivo será salvo pelo multer no disco
        const { company, price, techs } = req.body;
        const { user_id } = req.headers;

        const user = await User.findById(user_id);

        if(!user)
            return res.status(400).json({ error: 'usuário não existe'});
        const spot = await Spot.create({
            thumbnail: filename,
            company,
            price,
            techs: techs.split(',').map(tech => tech.trim()),
            user: user_id
        })
        return res.json(spot);
    }
}