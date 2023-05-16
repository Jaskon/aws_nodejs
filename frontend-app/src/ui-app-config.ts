export enum ENV {
    prod,
    dev,
}

const prod = {
    ENV: ENV.prod,
    BASE_URL: '',
};

const dev = {
    ENV: ENV.dev,
    BASE_URL: 'http://localhost:3000',
};

const uiAppConfig = process.env.NODE_ENV === 'production' ? prod : dev;
export default uiAppConfig;
