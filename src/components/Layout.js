import * as React from "react"
import {PROVIDER_ID, useInitializeProviders, WalletProvider} from '@txnlab/use-wallet'
import {DeflyWalletConnect} from '@blockshake/defly-connect'
import {PeraWalletConnect} from '@perawallet/connect'
import {DaffiWalletConnect} from '@daffiwallet/connect'
import {defineCustomElements as deckDeckGoHighlightElement} from "@deckdeckgo/highlight-code/dist/loader";
import {Link} from "gatsby";
import ConnectMenu from "./ConnectMenu";

deckDeckGoHighlightElement();
export default function Layout({children, title = "xGov", subtitle = "Governance", path}) {
    const providers = useInitializeProviders({
        providers: [
            {id: PROVIDER_ID.DEFLY, clientStatic: DeflyWalletConnect},
            {id: PROVIDER_ID.PERA, clientStatic: PeraWalletConnect},
            {id: PROVIDER_ID.DAFFI, clientStatic: DaffiWalletConnect},
        ]
    })
    const [open, setOpen] = React.useState(false)
    return (
        <WalletProvider value={providers}>
            <header style={{padding: 0,}}>
                <nav>
                    <ul style={{display: "flex", width: "100%"}}>
                        <li>
                            <hgroup>
                                <h1><Link to='/'>{title}</Link></h1>
                                <h2>{subtitle}</h2>

                            </hgroup>
                        </li>
                        <li style={{flex: 1}}></li>
                        <li>
                            <button onClick={()=>setOpen(!open)} aria-label="Connect Wallet Menu" style={{position: "relative", zIndex: 1000}}>
                                <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 24 24" height="16px" fill="none" stroke="currentColor"
                                     strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="3" y1="12" x2="21" y2="12"></line>
                                    <line x1="3" y1="6" x2="21" y2="6"></line>
                                    <line x1="3" y1="18" x2="21" y2="18"></line>
                                </svg>
                            </button>
                            {open && <ConnectMenu/>}
                        </li>
                    </ul>
                </nav>
            </header>
            {children}
            <footer>
                Built with <a href="https://v2.picocss.com/docs">PicoCSS</a>
            </footer>
        </WalletProvider>
    )
}
