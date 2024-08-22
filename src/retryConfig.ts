import type AsyncRetry from "async-retry";

export type RetryConfig = AsyncRetry.Options;

export const DEFAULT_RETRY_CONFIG: RetryConfig = {
  retries: 5,
  factor: 2,
  minTimeout: 500,
};
