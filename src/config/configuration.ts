interface Configuration {
  port: number;
  secret: {
    key: string;
    expire: number;
  };
  googleAuth2: {
    clientId: string;
    clientSecret: string;
  };
  database: {
    uri: string;
  };
  domain: {
    api: string;
    site: string;
  };
}

export default (): Configuration => ({
  port: +process.env.PORT,
  secret: {
    key: process.env.SECRET_JWT,
    expire: +process.env.JWT_EXPIRE,
  },
  googleAuth2: {
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
  },
  database: {
    uri: process.env.MONGODB_URI,
  },
  domain: {
    api: process.env.API_DOMAIN,
    site: process.env.SITE_DOMAIN,
  },
});
