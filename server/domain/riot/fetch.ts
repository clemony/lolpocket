export interface RiotFetchOptions {
  retryOnRateLimit?: boolean
}

export type RiotFetch = <T>(
  key: string,
  url: string,
  params?: unknown,
  options?: RiotFetchOptions
) => Promise<T>

export class RiotRateLimitError extends Error {
  retryAfterMs: number

  constructor(retryAfterMs: number) {
    super(`Riot rate limited; retry after ${Math.ceil(retryAfterMs / 1000)}s`)
    this.name = "RiotRateLimitError"
    this.retryAfterMs = retryAfterMs
  }
}

export function isRiotRateLimitError(err: unknown): err is RiotRateLimitError {
  return err instanceof RiotRateLimitError
}
