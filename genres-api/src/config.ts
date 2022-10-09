interface Config {
    DATABASE_URL: string;
}

const config: Config = {
    DATABASE_URL: process.env.DATABASE_URL as string,
}

export default config