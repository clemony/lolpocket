import { createProxyMiddleware } from 'http-proxy-middleware'

/* export default function (req, res) {
  const proxy = createProxyMiddleware({
    target: 'https://leagueoflegends.fandom.com',
    changeOrigin: true,
    pathRewrite: {
      '^/api': '',
    },
  })
  return proxy(req, res)
} */