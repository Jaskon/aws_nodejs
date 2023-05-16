import githubOauthRouter from './github';
import passport from "passport";
import messagesRouter from '../../routers/messages';


passport.serializeUser((user, cb) => {
    return cb(null, user);
});

passport.deserializeUser((user, cb) => {
    return cb(null, user);
});


messagesRouter.get('/my-profile', (req, res, next) => {
    res.json(req.user);
});


export {
    githubOauthRouter
}
