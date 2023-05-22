export enum ENV {
    prod,
    dev,
}

function requiredEnv(name) {
    if (!process.env[name]) {
        console.error(`Provide a mandatory env variable ${name}`);
    }
    return process.env[name];
}

function to_int(value) {
    return Number(value);
}

const appConfig = {
    env: /^prod/.test(process.env.ENVIRONMENT || process.env.ENV) ? ENV.prod : ENV.dev,
    port: process.env.PORT || 3000,
    uiBaseUrl: process.env.UI_BASE_URL || '/',

    githubAuthClientID: requiredEnv('GITHUB_AUTH_CLIENT_ID'),
    githubAuthClientSecret: requiredEnv('GITHUB_AUTH_CLIENT_SECRET'),
    githubAuthCallbackURL: process.env.GITHUB_AUTH_CALLBACK_URL,

    redisPort: to_int(process.env.REDIS_PORT) || 6379,
    redisHost: process.env.REDIS_HOST || '127.0.0.1',
    redisUsername: process.env.REDIS_USERNAME || 'default',
    redisPassword: process.env.REDIS_PASSWORD || '',

    sessionSecret: requiredEnv('SESSION_SECRET'),
};

export default appConfig;
