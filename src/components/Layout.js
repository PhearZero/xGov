import * as React from "react"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
import {Link} from "gatsby";
deckDeckGoHighlightElement();
export default function Layout({children, title="xGov", subtitle="Governance", path}) {
    return (
        <>
            <header>
                <hgroup>
                    <h1><Link href='/'>{title}</Link></h1>
                <h2>{subtitle}</h2>
                </hgroup>
                {}
            </header>
            {children}
            <footer>
                Built with <Link href="https://v2.picocss.com/docs">PicoCSS</Link>
            </footer>
        </>
    )
}
