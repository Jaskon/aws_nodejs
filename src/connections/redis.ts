import Redis from 'ioredis';
import RedisStore from 'connect-redis';
import appConfig from "../app-config";

const redisRetryStrategy = (times) => {
    const timesToTry = 10;
    const delay = 5000;

    if (times > timesToTry) {
        throw new Error(`Failed to connect to Redis. Tried ${timesToTry} with ${delay}ms delay.`);
    }
    return delay;
};

export const redisClient = new Redis({
    port: appConfig.redisPort,
    host: appConfig.redisHost,
    username: appConfig.redisUsername,
    password: appConfig.redisPassword,
    db: 0,
    retryStrategy: redisRetryStrategy,
});

export const redisStore = new RedisStore({
    client: redisClient,
    prefix: 'aws_nodejs:',
});
