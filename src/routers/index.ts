import messagesRouter from './messages';

// TODO: Why session is not saved at all? With faked sigh in
// TODO: Reverse proxy? '/' should proxy to 3001, but in browser it will be 3000 still. Should work

export {
    messagesRouter,
}
