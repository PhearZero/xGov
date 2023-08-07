import * as React from 'react';
import './src/style.scss'
import Root from "./src/components/Root";
import type { GatsbyBrowser } from "gatsby"
export const wrapRootElement: GatsbyBrowser["wrapPageElement"] = ({ element }) => {
    return <Root>{element}</Root>;
};
