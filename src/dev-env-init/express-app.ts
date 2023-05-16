import cors from 'cors';
import { Router } from 'express';
import httpProxy from 'http-proxy';

export function devLocalCors(app: Router) {
    app.use(cors({
        origin: 'http://localhost:3001',
        credentials: true,
    }));
}

export function devProxyForReact(app: Router) {
    // TODO: Try to set up proxy to localhost:3001 (including ws) for all routes, except /api and /auth.
    //  Also add a socket.io base path, to separate React dev ws and socket.io ws.
    //  https://github.com/http-party/node-http-proxy#setup-a-stand-alone-proxy-server-with-custom-server-logic
    const proxy = new httpProxy.createProxyServer();
}
