import { log } from 'console';
import { get } from 'http';
import { Client } from 'shieldbow';

const client = new Client('RGAPI-cd96d829-be6b-46b0-8382-07db11083c6c');

client.initialize({
  cache: true,
  storage: false,
  region: 'na',
  logger: {
    enable: true,
    level: 'WARN',
  },
  ratelimiter: {
    strategy: 'spread',
    throw: true,
    retry: {
      retries: 5,
      retryDelay: 5000,
    },
  },
  fetch: {
    champions: false,
    items: false,
    runes: false,
    summonerSpells: false,
  },
});
