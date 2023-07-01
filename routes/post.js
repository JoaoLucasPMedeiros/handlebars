const Express = require('express');
const router = Express.Router();
const cadPonto = require('../models/cadPonto');


router.get('/get', ( req, res ) =>{
    res.send('rota funcionando');
});

module.exports = router;