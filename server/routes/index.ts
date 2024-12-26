import { createDatabase } from 'db0'
import cloudflareD1 from 'db0/connectors/cloudflare-d1'

const db = createDatabase(
    cloudflareD1({
        bindingName: 'DB',
    })
)
