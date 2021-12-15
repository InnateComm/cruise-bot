import { SapphireClient } from '@sapphire/framework'
import { join } from 'path'
import { existsSync } from 'fs'
import { config } from 'dotenv'

const client = new SapphireClient({
  intents: ['GUILDS', 'GUILD_MESSAGES', 'DIRECT_MESSAGES']
})

if (existsSync(join(__dirname, '..', '.env'))) {
  config({
    path: join(__dirname, '..', '.env')
  })
}

client.login(process.env.DISCORD_TOKEN)
