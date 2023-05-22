import githubOauthRouter from './github';
import passport from "passport";
import express from "express";
import appConfig, { ENV } from "../../app-config";
import { devAuthCommonRoute } from "../../dev-env-init/auth-common";

const router = express.Router();


passport.serializeUser((user, cb) => {
    return cb(null, user);
});

passport.deserializeUser((user, cb) => {
    return cb(null, user);
});


router.get('/my-profile', (req: any, res, next) => {
    console.debug('User got his profile. Session id:', req.session.id, 'User obj:', req.session.user)
    res.json(req.session.user);
    next();
});

if (appConfig.env === ENV.prod) {
    router.get('/auth/logout', (req: any, res, next) => {
        console.debug('Logout route. Session id:', req.session.id, 'User obj:', req.session.user);
        req.logout((err) => {
            console.debug('User logged out. Session id:', req.session.id)
            next();
        });
    });
} else {
    devAuthCommonRoute(router);
}


export {
    githubOauthRouter,
    router as authCommonRouter,
}
