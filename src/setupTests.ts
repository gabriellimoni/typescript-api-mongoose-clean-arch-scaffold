const env = process.env.NODE_ENV || 'development'
// Configure environment variables using .env* files
require('dotenv').config({ node_env: env })

/**
 * Run tests with specific mongo database.
 */
if (
  env !== 'production' &&
  process.env.CI &&
  process.env.OVERIDE_MONGO_DATABASE
) {
  process.env.MONGO_DATABASE_NAME = process.env.OVERIDE_MONGO_DATABASE
}

export {}
