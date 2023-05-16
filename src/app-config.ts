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
    env: (process.env.ENVIRONMENT || process.env.ENV) === 'prod' ? ENV.prod : ENV.dev,
    port: process.env.PORT || 3000,
    uiBaseUrl: process.env.UI_BASE_URL || '/',

    githubAuthClientID: requiredEnv('GITHUB_AUTH_CLIENT_ID'),
    githubAuthClientSecret: requiredEnv('GITHUB_AUTH_CLIENT_SECRET'),
    githubAuthCallbackURL: process.env.GITHUB_AUTH_CALLBACK_URL,

    redisPort: to_int(requiredEnv('REDIS_PORT')),
    redisHost: requiredEnv('REDIS_HOST'),
    redisUsername: requiredEnv('REDIS_USERNAME'),
    redisPassword: requiredEnv('REDIS_PASSWORD'),

    sessionSecret: requiredEnv('SESSION_SECRET'),
};

export default appConfig;
