import * as React from 'react';
import './src/style.scss'
import Root from "./src/components/Root";
import type { GatsbySSR } from "gatsby"
export const wrapRootElement: GatsbySSR["wrapPageElement"] = ({ element }) => {
    return <Root>{element}</Root>;
};
