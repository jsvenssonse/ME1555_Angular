'use strict';

module.exports = function(app, passport) {
    app.get('/auth/google', passport.authenticate('google',
                                                  {scope: ['profile', 'email']}));

    app.get('/auth/google/callback', passport.authenticate('google',
                                                           {successRedirect: '/createStream', failureRedirect: '/'}));
    app.get('/logout', function(req, res){
        req.logout();
        res.redirect('/');
    });
}
