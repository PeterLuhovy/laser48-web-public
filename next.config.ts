import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  htmlLimitedBots: {
    additionalBots: [
      "GPTBot",
      "ChatGPT-User",
      "OAI-SearchBot",
      "ClaudeBot",
      "Claude-User",
      "Claude-SearchBot",
      "PerplexityBot",
      "Perplexity-User",
      "Google-Extended",
      "Gemini-Deep-Research",
      "AzureAI-SearchBot",
    ],
  },
};

export default nextConfig;
