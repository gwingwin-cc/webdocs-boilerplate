import type {AppProps} from 'next/app'
// add bootstrap css
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import {ReactElement, ReactNode} from "react";
import {NextPage} from "next";
// own css files here


export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
    // Use the layout defined at the page level, if available
    const getLayout = Component.getLayout ?? ((page) => page)
    return getLayout(<Component {...pageProps} />)
}

