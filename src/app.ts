import * as path from 'path'
import { container } from '@sapphire/pieces'
import { CruiseClient } from './lib'
import { fetchOwners } from './util'
import { Intents } from 'discord.js'

const client = new CruiseClient({
  baseUserDirectory: path.join(__dirname),
  caseInsensitiveCommands: false,
  defaultCooldown: {
    delay: 3,
    filteredUsers: fetchOwners(),
    limit: 2,
    scope: 3
  },
  defaultPrefix: process.env.DISCORD_PREFIX ?? '!',
  enableLoaderTraceLoggings: true,
  typing: true
}, {
  intents: new Intents(32767)
})

client.once('ready', (bot) => {
  container.logger.info(`${bot.user.tag} has logged in!`)
})

client.login(process.env.DISCORD_TOKEN)
