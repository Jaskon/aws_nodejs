const prod = {
    BASE_URL: '',
};

const dev = {
    BASE_URL: 'http://localhost:3000',
};

const config = process.env.NODE_ENV === 'production' ? prod : dev;
export const {
    BASE_URL,
} = config;
