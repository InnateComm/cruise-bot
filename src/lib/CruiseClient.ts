import { SapphireClient } from '@sapphire/framework'
import { container } from '@sapphire/pieces'

import type {
  SapphirePrefix,
  SapphirePrefixHook,
  ClientLoggerOptions,
  CooldownOptions
} from '@sapphire/framework'
import type { Snowflake, ClientOptions } from 'discord.js'

export interface SapphireClientOptions {
  baseUserDirectory?: string | null;
  caseInsensitiveCommands?: boolean | null;
  caseInsensitivePrefixes?: boolean | null;
  defaultPrefix?: SapphirePrefix;
  regexPrefix?: RegExp;
  fetchPrefix?: SapphirePrefixHook;
  id?: Snowflake;
  logger?: ClientLoggerOptions;
  enableLoaderTraceLoggings?: boolean;
  loadDefaultErrorListeners?: boolean;
  typing?: boolean;
  defaultCooldown?: CooldownOptions;
}

export default class CruiseClient extends SapphireClient {
  constructor (options: SapphireClientOptions, config: ClientOptions) {
    super({
      ...options,
      ...config
    })

    container.client = this
  }
}
