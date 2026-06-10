"use client";

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createConfig, http, WagmiProvider } from 'wagmi';
import { hardhat } from 'wagmi/chains';
import { ReactNode, useState } from 'react';

export const config = createConfig({
  chains: [hardhat],
  transports: {
    [hardhat.id]: http(),
  },
});

export default function Web3Provider({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  );
}
