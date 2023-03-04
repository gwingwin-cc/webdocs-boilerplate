import {NextPageWithLayout} from "../_app";
import {ReactElement} from "react";
import {DocLayout} from "../../components/doc-layout";


const Page: NextPageWithLayout = () => {
    return <>
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