const express = require('express')
const passport = require('passport')
const router = express.Router()

// @desc    Auth with Google
// route    GET /auth/google
router.get('/google', passport.authenticate('google', {scope: ['profile'] }))

// @des     Google auth callback
// @route   GET /auth/google/callback
router.get(
    '/google/callback', 
    passport.authenticate('google', { failureRedirect: '/' }), 
    (req, res) => {
        res.redirect('/dashboard')
    }
)

// @des     Logout User
// @route   /auth/logout
router.get('/logout', function(req, res, next){
    req.logout(function(err) {
      if (err) { return next(err); }
      res.redirect('/');
    });
});

module.exports = router
