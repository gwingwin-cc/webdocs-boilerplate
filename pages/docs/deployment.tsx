import {NextPageWithLayout} from "../_app";
import {ReactElement} from "react";
import {DocLayout} from "../../components/doc-layout";
import Link from "next/link";
import {Alert, Col, Row} from "react-bootstrap";


const Page: NextPageWithLayout = () => {
    return <>
        <h1>
            Deployment
        </h1>
        <hr/>

        <div>
            <h3 className={'mt-4'}>WIP </h3>
            recommend use <a href={'https://vercel.com/'}>https://vercel.com/</a> easy to hosting with free.

        </div>

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