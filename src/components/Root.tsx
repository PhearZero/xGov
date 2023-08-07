import * as React from "react";

import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {PROVIDER_ID, useInitializeProviders, WalletProvider} from "@txnlab/use-wallet";
import {PeraWalletConnect} from "@perawallet/connect";
import {ReactElement} from "react";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 100_000,
        },
    },
});

type RootProps = {
    children: React.ReactNode
}
export default function Root({children}: RootProps): ReactElement | null {
    const providers = useInitializeProviders({
        providers: [
            // {id: PROVIDER_ID.DEFLY, clientStatic: DeflyWalletConnect},
            {id: PROVIDER_ID.PERA, clientStatic: PeraWalletConnect},
            // {id: PROVIDER_ID.DAFFI, clientStatic: DaffiWalletConnect},
        ]
    })
    return (
        <QueryClientProvider client={queryClient}>
            <WalletProvider value={providers}>
                {children}
            </WalletProvider>
        </QueryClientProvider>
    )
}
