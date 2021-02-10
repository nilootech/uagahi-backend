interface Configuration {
  port: number,
  secret: {
    key: string,
    expire: number
  },
  database: {
    uri: string
  }
}

export default (): Configuration => ({
  port: 3000,
  secret: {
    key: process.env.SECRET_JWT,
    expire: +process.env.JWT_EXPIRE,
  },
  database: {
    uri: process.env.MONGODB_URI,
  },
})