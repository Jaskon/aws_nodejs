import { Router } from 'express';

export function devAuthRoute(router: Router) {
    const fakeUser = {
        id: 1958,
        name: 'Michael Jackson',
        picture: null,
    };

    router.get('/auth/github', (req: any, res, next) => {
        console.debug('User is trying to log in. His session id:', req.session.id);

        req.session.user = fakeUser;
        req.session.save(err => {
            console.debug('User logged in as fake one. Session id:', req.session.id);

            res.status(200).json(req.session.user);
            next();
        });
    });
}
