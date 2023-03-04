import {NextPageWithLayout} from "../../../_app";
import {ReactElement} from "react";
import {DocLayout} from "../../../../components/doc-layout";

const FormPage: NextPageWithLayout = () => {
    return <>
        <h1>Root of content directory</h1>
        <hr/>
        <div>
            <h2>Overview</h2>
            <p>
                Example for nested menu config reference with directory path and file name to setting
                in  <code>components/meta.ts</code> and also can ref with ID of html element.
            </p>
            <hr style={{borderColor: 'gray'}}/>
        </div>
    </>
}

FormPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <DocLayout>
            {page}
        </DocLayout>
    )
}

export default FormPage;
