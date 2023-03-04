import Head from 'next/head'
import Image from 'next/image'
import {Badge, Card, Col, Container, Row} from "react-bootstrap";
import CardHeader from "react-bootstrap/CardHeader";
import {NextPageWithLayout} from "../../../_app";
import {ReactElement} from "react";
import {DocLayout} from "../../../../components/doc-layout";
import Link from "next/link";

const Page: NextPageWithLayout = () => {
    return <>
                <h2>Form Field</h2>
                <p>
                    Represent data field in table of relation data base as form base. By reduce field type left only main type
                    of table field. Make more easier to decide field type and Data modeling to save time in development.
                </p>

                <ul>
                    <li>
                        <h3 id={'field-text'}> TEXT </h3>
                        <div>
                            Declaration field to store value as string.
                        </div>
                        <div>
                            in database will use field type <b>Varchar(255)</b> it mean for use please check requirement.
                            <ul>
                                <li>Not need more than 255 char.</li>
                                <li>You need to indexing this field.</li>
                            </ul>
                        </div>
                        <hr style={{borderColor:'gray'}} />
                    </li>
                    <li>
                        <h3 id={'field-longtext'}> Long TEXT</h3>
                        <div>
                            Declaration field to store value as string for any long text.
                        </div>
                        <div>
                            in database will use field type <b>MediumText</b>.
                        </div>
                        <hr style={{borderColor:'gray'}} />
                    </li>
                    <li>
                        <h3 id={'field-integer'}> Number </h3>
                        <div>
                            Declaration field to store value as number value will store as <b>Integer</b>.
                        </div>
                        <div><Badge bg={'danger'}>!</Badge> it will not store decimal.</div>
                        <hr style={{borderColor:'gray'}} />
                    </li>

                    <li>
                        <h3 id={'field-float'}> Float </h3>
                        <div>
                            Declaration field to store value as number value will store as <b>Float</b> in database and save
                            decimal by default.
                        </div>
                        <hr style={{borderColor:'gray'}} />
                    </li>

                    <li>
                        <h3 id={'field-boolean'}> Boolean </h3>
                        <p>Declaration field to store value to <b>boolean</b>.
                            in MariaDB database will save as 0,1
                        </p>
                        <hr style={{borderColor:'gray'}} />
                    </li>


                    <li><h3 id={'field-date'}>DATE</h3>
                        <p>
                            This data type represents a date range of “1000-01-01” to “9999-12-31,” and uses
                            the “YYYY-MM-DD” date format.
                        </p>
                        <hr style={{borderColor:'gray'}} />
                    </li>
                    <li><h3 id={'field-time'}>TIME</h3>
                        <p>
                            This data type represents a time range of “-838:59:59.999999” to
                            “838:59:59.999999.”
                        </p>
                        <hr style={{borderColor:'gray'}} />
                    </li>
                    <li>
                        <h3 id={'field-datetime'}>DATETIME</h3>
                        <p>
                            This data type represents the range “1000-01-01 00:00:00.000000” to “9999-12-31
                            23:59:59.999999.” It uses the “YYYY-MM-DD HH:MM:SS” format.
                        </p>
                        <hr style={{borderColor:'gray'}} />
                    </li>


                    <li>
                        <h3 id={'field-relation'}> Relation </h3>
                        <p>Declaration field to store reference to other form.</p>
                        <p>this field always suffix field name as _[form_to_ref]_id.</p>
                        <hr style={{borderColor:'gray'}} />
                    </li>

                    <li>
                        <h3 id={'field-user'}> User </h3>
                        <p>Declaration field to store reference to system user.</p>
                        <hr style={{borderColor:'gray'}} />
                    </li>

                    <li id={'field-role'}>
                        <h3> Role </h3>
                        <p>Declaration field to store reference to system <Link href={'/docs/permission#role'}>role.</Link></p>
                        <hr style={{borderColor:'gray'}} />
                    </li>

                    <li id={'field-permission'}>
                        <h3> Permission </h3>
                        <p>Declaration field to store reference to system <Link
                            href={'/docs/permission#permission'}>permission</Link>.</p>
                        <hr style={{borderColor:'gray'}} />
                    </li>

                </ul>

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
