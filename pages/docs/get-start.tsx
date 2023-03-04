import {NextPageWithLayout} from "../_app";
import {ReactElement} from "react";
import {DocLayout} from "../../components/doc-layout";
import Link from "next/link";
import {Alert, Col, Row} from "react-bootstrap";
import Image from "next/image";


const Page: NextPageWithLayout = () => {
    return <>
        <h1>
            Get Started
        </h1>
        <hr/>
        <h2> Github </h2>
        <div>
            folk or clone from repository <Link
            href={'https://www.github.com'}> github</Link>.
            <li>run <code> yarn </code></li>
            <li>run <code> yarn dev</code> to serve</li>
        </div>

        <hr/>
        <div>
            <h3 className={'mt-4'}>1. Customize web </h3>
            <p> Change web signature first to be your.
            </p>
            <ul>
                <li>Web Logo <code>public/web-logo.ong</code></li>
            </ul>
        </div>
        <hr/>
        <div>
            <h3 className={'mt-4'}>2. Customize Main page </h3>
            <p> Main page is single TSX file contain full-page include top layout and Navbar customize this file will not effect to layout in document page.
                for file/image can be reference to <code>public</code> directory by start with path <code>/</code> see example on Image in this file.
            </p>
        </div>
        <hr/>
        <div className={'mb-5'}>
            <h3 className={'mt-4'}>3. Custom your content</h3>
            document page is route to /docs to customize layout see this picture
            <Image style={{objectFit: 'contain'}} width={640} height={360}
                   src={'/how-to/layout-1.png'} alt={'layout-sample'}/>
            <ul>
                <li> A can custom in file <code>components/layout</code> </li>
                <li> B can custom in file <code>components/doc-layout</code></li>
            </ul>

            <p>
                for C that is content can custom by creating new tsx file into <code>pages/docs</code> directory
                by copy the template file [<code>using-mdx.mdx</code> for MDX or <code>using-tsx.tsx</code> for TSX]
            </p>

            <p>
                the file will note reveal in the menu automatically need to customize in <code>components/meta.ts</code> to
                make path reveal in doc menus.
            </p>
        </div>
        <div className={'mb-5 mt-5'}></div>

    </>
}

Page.getLayout = function getLayout(page: ReactElement) {
    return (
        <DocLayout>
            {page}
        </DocLayout>
    )
}
export default Page;