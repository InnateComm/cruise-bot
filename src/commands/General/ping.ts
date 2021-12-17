import { Command, CommandOptions } from '@sapphire/framework'
import { ApplyOptions } from '@sapphire/decorators'
import { Message, MessageEmbed } from 'discord.js'

@ApplyOptions<CommandOptions>({
  description: 'Checks the bot\'s ping to the Discord server.',
  fullCategory: ['General'],
  requiredClientPermissions: ['ADD_REACTIONS', 'SEND_MESSAGES'],
  requiredUserPermissions: ['SEND_MESSAGES']
})
export class PingCommand extends Command {
  async messageRun (message: Message) {
    const thinkingEmbed = new MessageEmbed({
      title: 'Ping?',
      description: 'Calculating...',
      color: '#444EA9'
    })

    const response = await message.channel.send({ embeds: [thinkingEmbed] })

    const pingEmbed = new MessageEmbed({
      title: 'Pong!',
      description: `Pong from ${this.container.client.user?.username}! Here are the stats about the latency 👇`,
      fields: [
        { name: 'Bot Latency', value: `${Math.round(this.container.client.ws.ping)}ms`, inline: true },
        { name: 'API Latency', value: `${response.createdTimestamp - message.createdTimestamp}ms`, inline: true }
      ],
      color: '#444EA9'
    })

    message.react('✅')

    return response.edit({ embeds: [pingEmbed] })
  }
}
