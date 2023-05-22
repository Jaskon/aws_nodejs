import cors from 'cors';
import { Router } from 'express';

export function devLocalCors(app: Router) {
    app.use(cors({
        origin: 'http://localhost:3001',
        credentials: true,
    }));
}
