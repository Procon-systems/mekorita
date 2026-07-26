export const APP_CONFIG = {
  name: "Mekorita",
  description: "Internal developer collaboration platform",
  defaultTheme: "system",
  sessionKey: "mekorita_session",
  pagination: {
    defaultLimit: 20,
  },
  api: {
    mockLatencyMs: 600,
  }
} as const;
