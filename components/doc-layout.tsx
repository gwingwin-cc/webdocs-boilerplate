import {Button, Col, Container, Row} from "react-bootstrap";
import {ReactElement, useCallback, useState} from "react";
import {Layout} from "./layout";
import Link from "next/link";
import {listOfContents} from "./meta";
import {useRouter} from "next/router";
import {ChevronDown, ChevronRight} from "react-feather";

/**
 *
 * @param children
 * @constructor
 */

interface LayoutProps {
    children: ReactElement;
}

export const DocLayout = (props: LayoutProps) => {
    const [showMenu, setShowMenu] = useState(false);
    return <Layout>
        <Container>
            <div className={'text-end pe-2 pt-2 d-sm-block d-md-none'}>
                <Button onClick={() => setShowMenu(true)} variant={'dark'}>Menu 📄</Button>
            </div>
            <Row>
                <Col className={'d-md-block d-sm-none d-none '} md={3} xl={2}
                     style={{borderRight: '1px solid gainsboro'}}>
                    <div className="flex-shrink-0 p-3 bg-white">
                        <ul className="list-unstyled ps-0">
                            {listOfContents.map((item, i) => {
                                return <MenuItemComponent menuItem={item} key={i} className="mb-1"/>
                            })}
                        </ul>
                    </div>
                </Col>
                <Col style={{minHeight: '85vh'}} className={''}>
                    <div className={'p-2 pt-4'}>
                        <Row>
                            <Col md={8} xs={12}>
                                {props.children}
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>

            {showMenu ?
                <div className={'position-fixed w-100 h-75 bg-white'}
                     style={{left: 0, top: 120, border: '3px solid gray', overflowY: 'scroll'}}>
                    <div className={'text-end pe-2 pt-2'}>
                        <Button onClick={() => setShowMenu(false)} variant={'dark'}>❌</Button>
                    </div>
                    <Col className={'h-100'}>
                        <div className="flex-shrink-0 p-3">
                            <ul className="list-unstyled w-75 ms-auto ps-0">
                                {listOfContents.map((item, i) => {
                                    return <MenuItemComponent menuItem={item} key={i} className="mb-1"/>
                                })}
                            </ul>
                        </div>
                    </Col>
                </div> : null
            }
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
    const router = useRouter()
    const [expand, setExpand] = useState(false)
    const isMatchPatch = useCallback(() => {
        if (router.asPath.indexOf(props.menuItem.path) > -1) {
            return true;
        } else {
            return false
        }
    }, [router.asPath, props.menuItem.path])

    const renderIcon = useCallback(() => {
        if (props.menuItem.type === 'group' && expand) {
            return <ChevronDown/>;
        }
        if (props.menuItem.type === 'list' || props.menuItem.type === 'group') {
            if (router.asPath.indexOf(props.menuItem.path) > -1) {
                return <ChevronDown/>;
            } else {
                return <ChevronRight/>
            }
        }
        return '';
    }, [props.menuItem.type, props.menuItem.path, expand, router.asPath])

    const renderChild = useCallback(() => {
        if (props.menuItem.type === 'group' && expand) {
            return true
        }
        if (props.menuItem.type === 'list' || props.menuItem.type === 'group'
        ) {
            return router.asPath.indexOf(props.menuItem.path) > -1;
        }
        return false;
    }, [props.menuItem.type, props.menuItem.path, expand, router.asPath])


    return (
        <li className={(props.className ?? '')}>
            {
                props.menuItem.type === 'group' ?
                    <>
                        <Link href={'#'} onClick={() => {
                            setExpand(true
                            )
                        }
                        }>
                            <span
                                className={`btn btn-toggle align-items-center rounded ${isMatchPatch() ? 'fw-bold text-primary' : ''}`}
                                aria-expanded="true">
                                                  {props.menuItem.label} {renderIcon()}
                            </span>
                        </Link>
                        {
                            renderChild() ? <ul>
                                    {
                                        props.menuItem.list.map((nestItem: MenuItem, nestItemKey: number) => {
                                            return <MenuItemComponent key={nestItemKey}
                                                                      menuItem={nestItem}/>
                                        })
                                    }
                                </ul>
                                : null
                        }

                    </>
                    : null
            }
            {
                props.menuItem.type === 'link' ?
                    (
                        <Link href={props.menuItem.path ? '/docs/' + props.menuItem.path : '#'}>
                            <span
                                className={`btn btn-toggle align-items-center rounded ${isMatchPatch() ? 'fw-bold text-primary' : ''}`}
                                aria-expanded="true">
                                                    {props.menuItem.label}
                                                </span>
                        </Link>
                    ) : null
            }
            {
                props.menuItem.type === 'list' ?
                    <>
                        <Link href={props.menuItem.path ? '/docs/' + props.menuItem.path : '#'}>
                            <span
                                className={`btn btn-toggle align-items-center rounded ${isMatchPatch() ? 'fw-bold text-primary' : ''}`}
                                aria-expanded="true">
                                                  {props.menuItem.label} {renderIcon()}
                            </span>
                        </Link>
                        {
                            renderChild() ? <ul>
                                    {
                                        props.menuItem.list.map((nestItem: MenuItem, nestItemKey: number) => {
                                            return <MenuItemComponent key={nestItemKey}
                                                                      menuItem={nestItem}/>
                                        })
                                    }
                                </ul>
                                : null
                        }

                    </>
                    : null
            }
        </li>
    )
}