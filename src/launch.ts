// Import dotenv dependencies

import * as path from 'path'
import * as fs from 'fs'
import * as dotenv from 'dotenv'

// Register Plugins

import '@sapphire/plugin-logger/register'

// Load dotenv

const envPath = path.join(__dirname, '..', '.env')

if (fs.existsSync(envPath)) {
  dotenv.config({
    path: envPath
  })
}

// Run the app

import('./app')
