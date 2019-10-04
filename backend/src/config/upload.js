const multer = require('multer');
const path = require('path') // do node

module.exports = {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        filename: (req, file, callback) => {
            const extname = path.extname(file.originalname);
            const name = path.basename(file.originalname, extname);
                // retorna o nome se uma imagem sem a extensão

            callback(null, `${name}-${Date.now()}${extname}`);
        }
    })
}

// path.resolve -> 
    // primeiro parametro se baseia a partir do diretório no caso o proprio diretorio que está este arquivo
    // o restante ele converte o 'barra' conforme o s.o