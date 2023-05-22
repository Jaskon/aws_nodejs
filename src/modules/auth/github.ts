import express from 'express';
import passport from 'passport';
import { Strategy as GithubStrategy } from 'passport-github2';
import appConfig, { ENV } from '../../app-config';
import { devAuthRoute } from '../../dev-env-init/github-auth';

const router = express.Router();


passport.use(new GithubStrategy({
    clientID: appConfig.githubAuthClientID,
    clientSecret: appConfig.githubAuthClientSecret,
    callbackURL: appConfig.githubAuthCallbackURL,
}, (accessToken, refreshToken, profile, cb) => {
    console.log(`User logged in with Github. His id: ${profile.id}. His username: ${profile.username}.`);
    return cb(null, {
        id: profile.id,
        name: profile.username,
        picture: profile.photos[0].value,
    });
}));


if (appConfig.env === ENV.prod) {
    router.get('/auth/github', passport.authenticate('github', { keepSessionInfo: true }));

    router.get('/auth/github/callback', passport.authenticate('github', {
        successRedirect: 'http://localhost:3001',
        failureRedirect: 'http://localhost:3001/failed_log_in'
    }));
} else {
    devAuthRoute(router);
}


export default router;
