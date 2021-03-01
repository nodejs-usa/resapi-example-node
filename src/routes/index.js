const { Router } = require('express');
const router = Router();

router.get('/', (req,res) =>{
    res.json({
        "Titulo": "Hello Word"
    });
})

router.get('/test', (req,res) =>{
    const data = {
        "name": "marlon",
        "web": "asd"
    }
    res.json(data);
})

module.exports = router;