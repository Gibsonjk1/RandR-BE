const router = require('express').Router();

router.use('/exercise', require('./exercise'));
router.use('/user', require('./user'));
router.use('/api-docs', require('./swagger'));

module.exports = router;