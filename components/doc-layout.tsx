import {Button, Col, Container, Modal, Offcanvas, Row} from "react-bootstrap";
import {ReactElement, useEffect, useMemo, useState} from "react";
import {Layout} from "./layout";
import Link from "next/link";
import {listOfContents} from "./meta";
import {List} from "react-bootstrap-icons";
import {usePathname} from "next/navigation";
import {useRouter} from "next/router";
import {useSearchParams} from "next/dist/client/components/navigation";

/**
 *
 * @param children
 * @constructor
 */

interface LayoutProps {
    children: ReactElement;
}

export const DocLayout = (props: LayoutProps) => {
    const [showOutlineModal, setShowOutlineModal] = useState(false);
    return <Layout>
        <Container fluid={"xl"}>
            <OutlineModal show={showOutlineModal} handleClose={setShowOutlineModal}/>
            <Row className={'d-md-none'}>
                <Col>
                    <Col>
                        <Button className={'mt-2'} variant={'outline-primary'} onClick={() => {
                            setShowOutlineModal(true)
                        }}>Menu <List/></Button>
                    </Col>
                </Col>
            </Row>
            <Row>
                <Col md={3} lg={3} xl={3} xxl={3} className={'d-none d-md-block'}
                     style={{borderRight: '1px solid gainsboro'}}>
                    <div className="flex-shrink-0 p-3 bg-white doc-div">
                        <ul className="list-unstyled ps-0">
                            {listOfContents.map((item, i) => {
                                return <MenuItemComponent menuItem={item} key={i} className="mb-1"/>
                            })}
                        </ul>
                    </div>
                </Col>
                <Col sm={12} xs={12} md={9} style={{height: '85vh'}}>
                    <div className={'p-2 pt-4 doc-div'}>
                        <Row>
                            <Col sm={10} md={10} xs={12}>
                                {props.children}
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>

    </Layout>
}

interface MenuItem {
    label: string;
    path: string;
    type: string;
    list: Array<MenuItem> | undefined;
}

interface MenuItemProp {
    menuItem: MenuItem | any;
    className?: string;
}

const MenuItemComponent = (props: MenuItemProp) => {
    const currentPath = usePathname()
    const { asPath } = useRouter()
    return (
        <li className={props.className}>
            {
                props.menuItem.type === 'link' ?
                    (
                        <Link href={props.menuItem.path ? '/docs/' + props.menuItem.path : '#'}>
                                            <div className="align-items-center rounded">
                                                {
                                                    currentPath == (props.menuItem.path ? '/docs/' + props.menuItem.path : '#')
                                                        ||
                                                    asPath == (props.menuItem.path ? '/docs/' + props.menuItem.path : '#')
                                                        ?
                                                        <div className={'menu-link-label'}>
                                                            <b>{props.menuItem.label}</b>
                                                        </div>:
                                                        <div className={'menu-link-label'}>
                                                            {props.menuItem.label}
                                                        </div>
                                                }
                                            </div>
                        </Link>
                    ) : null
            }
            {
                props.menuItem.type === 'list' ?
                    <>
                        <Link href={props.menuItem.path ? '/docs/' + props.menuItem.path : '#'}>
                            <div className="align-items-center rounded ">
                                {
                                    currentPath == (props.menuItem.path ? '/docs/' + props.menuItem.path : '#')
                                    ||
                                    asPath == (props.menuItem.path ? '/docs/' + props.menuItem.path : '#') ?
                                        <div className={'menu-link-label'}>
                                            <b>{props.menuItem.label}</b>
                                        </div>:
                                        <div className={'menu-link-label'}>
                                            {props.menuItem.label}
                                        </div>
                                }
                            </div>
                        </Link>
                        <ul>
                            {
                                props.menuItem.list.map((nestItem: MenuItem, nestItemKey: number) => {
                                    return <MenuItemComponent key={nestItemKey}
                                                              menuItem={nestItem}></MenuItemComponent>
                                })
                            }
                        </ul>
                    </>
                    : null
            }
        </li>
    )
}

const OutlineModal = (props: { show: boolean, handleClose: (s: boolean) => void }) => {
    return <>
        <Offcanvas show={props.show} onHide={() => {
            props.handleClose(false)
        }}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <div className="flex-shrink-0 p-3 bg-white">
                    <ul className="list-unstyled ps-0">
                        {listOfContents.map((item, i) => {
                            return <MenuItemComponent menuItem={item} key={i} className="mb-1"/>
                        })}
                    </ul>
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    </>
}