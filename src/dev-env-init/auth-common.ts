import { Router } from 'express';

export function devAuthCommonRoute(router: Router) {
    router.get('/auth/logout', (req: any, res, next) => {
        console.debug('User is trying to log out. His session id:', req.session.id, 'His user obj:', req.session.user);

        req.session.user = undefined;
        req.session.save(err => {
            console.debug('User logged out. Session id:', req.session.id);

            res.status(200).json(req.session.user);
            next();
        });
    });
}
