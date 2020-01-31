const Config = {
  baseUrl: process.env.NODE_ENV === 'production' ? 'https://api.brusw.com' : 'http://127.0.0.1:3000',
  staticPath: 'resource.brusw.com'
}

export default Config
