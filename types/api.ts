export type ApiError = {
  error: string;
  details?: Record<string, string[]>;
};

export type ApiResponse<T> = {
  data: T;
  meta?: Record<string, unknown>;
};
