const router = require('express').Router();
const authController = require('../controllers/authController');
const util = require('../utilities/index');
const passport = require('passport');

router.get('/google', passport.authenticate('google', { scope: ['profile'] }));
router.get('/google/callback', 
    passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {
        // Successful authentication, redirect home.
        res.redirect('/');
    }
);
//router.get('/login', util.handleErrors(authController.isloggedIn));
//router.get('/logout', util.handleErrors(authController.logout));
//router.post('/login', passport.authenticate('local'), util.handleErrors(authController.login));

module.exports = router;