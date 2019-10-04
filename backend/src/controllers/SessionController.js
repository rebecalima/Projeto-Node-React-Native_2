// index (listagem de ...)
// show (listar um única ...)
// store (criar uma ...)
// update (alterar uma ...)
// delete (deletar uma ...)
const User = require('../models/User');

module.exports = {
    async store(req, res){
        const { email } = req.body;

        let user = await User.findOne({ email });

        if(!user)
            user = await User.create({ email });
        return res.json(user);
    }
}