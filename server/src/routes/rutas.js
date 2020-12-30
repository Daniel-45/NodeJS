import express from 'express'

const router = express.Router();

// Routes
router.get('/', (req, res) => {
    res.render('index.html', {
        title: 'NodeJS - Express',
    });
});

router.get('/contact', (req, res) => {
    res.render('contact.html', {
        title: 'Contacto'
    })
});

module.exports = router;