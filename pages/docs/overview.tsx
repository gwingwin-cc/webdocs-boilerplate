import {NextPageWithLayout} from "../_app";
import {ReactElement} from "react";
import {DocLayout} from "../../components/doc-layout";

const Page: NextPageWithLayout = () => {
    return <>
        <h1>Website & Docs Boilerplate</h1>
        <p>by GWINGWIN.
        </p>

        <p>
            By use NextJS for creating web document site this is boilerplate not complete project,
            easy to start and full customization
        </p>

        <p>
            In deployment production can use  web hosting eg. Vercel or Firebase
        </p>

      <p>
          by  <a href={'https://www.gwingwin.cc/'}> GWINGWIN </a>
      </p>


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