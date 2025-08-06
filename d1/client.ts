// db/client.ts
export default {
  async fetch(req, env) {
    const db = env.DB // <-- bound correctly from config
  },
}
