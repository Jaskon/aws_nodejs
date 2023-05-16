import { Router } from 'express';

export function devAuthRoute(app: Router) {
    // TODO: Check it works.
    //  Should set a fake user into session, should be able to grab it from UI.
    //  (?) Should redirect back to UI on '/'.
    app.get('/auth/github', (req: any, res, next) => {
        // Fake user
        req.login({
            id: 1958,
            name: 'Michael Jackson',
            picture: null,
        }, () => {
            console.log(`User logged in as fake one. Session:`, req.session);
            req.session.save();
        });
        res.status(200).send();
        next();
    });
}
