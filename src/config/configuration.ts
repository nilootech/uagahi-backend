interface Configuration {
  port: number,
  database: {
    uri:   string
  }
}

export default (): Configuration => ({
  port: 3000,
  database: {
    uri: process.env.MONGODB_URI,
  },
})