const express = require('express');
const router = express.Router();
const passportGithub = require('../auth/github');
const {User} = require('../models/user');


router.get('/api/auth/github', passportGithub.authenticate('github', {scope: ['repo', 'user']}));

router.get('/api/auth/github/callback', passportGithub.authenticate('github', {failureRedirect: '/login'}),
    function(req,res) {
        res.cookie('token', req.user.token, {expires: 0});
        res.redirect('/');
    })


module.exports = router;
