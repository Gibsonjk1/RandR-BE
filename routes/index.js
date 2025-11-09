const router = require('express').Router();
//const { auth } = require('express-openid-connect');

router.use('/exercise', require('./exercise'));
router.use('/user', require('./user'));
router.use('/api-docs', require('./swagger'));
router.use('/auth', require('./auth'));


// const config = {
//   authRequired: false,
//   auth0Logout: true,
//   secret: process.env.AUTH0_SECRET,
//   baseURL: process.env.BASEURL,
//   clientID: 'Ckdlf15Dm7fItOyhhaa8e04En4r8swxh',
//   issuerBaseURL: 'https://dev-rdi2sd0vh0yhi4p6.us.auth0.com'
// };

// // auth router attaches /login, /logout, and /callback routes to the baseURL
// router.use(auth(config));

// req.isAuthenticated is provided from the auth router
// router.get('/', (req, res) => {
//   res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
// });
module.exports = router;