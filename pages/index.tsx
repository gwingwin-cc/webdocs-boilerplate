import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Button, Card, Container, Navbar} from "react-bootstrap";
import Link from "next/link";
import {ArrowRight, BookOpen, GitHub, Youtube} from "react-feather";


export default function Home() {
    return (
        <div className={styles.container}>
            <Navbar bg="dark" variant="dark" style={{borderBottom: '1px solid gainsboro'}}>
                <Container fluid={''}>
                    <Navbar.Brand href="#home">
                            <Image
                                className="p-0 navbar-brand mb-0 h1"
                                src="/web-logo.png"
                                alt="Picture of the author"
                                style={{objectFit: 'cover', borderRadius: 8}}
                                width={160}
                                height={90}
                            />
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <div className={'d-md-flex d-inline-block  gap-1 gap-md-3'}>
                            <Link href={'/docs'}>
                                <Button variant={"primary"} className={'fw-bolder me-3'}>Docs <BookOpen/></Button>
                            </Link>
                            <Link href={'https://www.youtube.com/@KawinSirikhanarat'}><Youtube size={40}></Youtube></Link>
                            <Link className={'ms-2'} href={'https://github.com/gwingwin-cc'}><GitHub size={36}></GitHub></Link>
                            </div>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Head>
                <title>Basic Web-Docs</title>
                <meta name="description" content="SDK for low-code"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <Container>
                    <div className={'d-flex mt-3 mx-auto'} style={{
                        maxWidth: 630,
                        height: 310,
                        backgroundColor: '#d3d3d3',
                        borderRadius: 20,
                        border: '1px solid black'
                    }}>
                        <div className={'image-container'}>
                            <Image style={{borderRadius: 20}} src={'/gwgwgw.jpg'} fill className={'image'}
                                   alt={'sampleMockup'}/>
                        </div>
                    </div>
                    <div style={{margin: '0 auto', maxWidth: 640}}>
                        <h2 className={' text-black-50'}>
                            Faster build web docs.
                        </h2>
                        <h1 style={{fontSize: '3em', fontWeight: 900}} className={'mt-4'}>
                            Boilerplate for starter build <span style={{color: '#064eea'}}>Web Document</span>  <span
                                style={{color: '#330a7b'}}></span> with <span style={{color: '#064eea'}}>NextJS.</span></h1>
                        <p>

                        </p>

                    </div>
                    <div style={{margin: '0 auto', maxWidth: 520}}>
                        <h2 className={'mt-5'} style={{fontWeight: 800}}><u>FEATURES</u></h2>
                        <Card className={'mt-2 mb-5 border-dark'}>
                            <Card.Body>
                                <u><b>Basic Project </b></u>
                                <div>to deploy SSR web document using <b>Bootstrap</b> css</div>
                                <ul>
                                    <li>Easy to start</li>
                                    <li>Full customization</li>
                                    <li>Support MDX</li>
                                </ul>

                            </Card.Body>
                        </Card>
                    </div>
                </Container>


                <div className={'bg-dark px-2'} style={{width: '100%', marginBottom: 0, paddingBottom: 120,}}>
                    <div className={'text-white'} style={{margin: '0 auto', maxWidth: 520}}>
                        <h2 className={'mt-4 mb-0'} style={{fontWeight: 800}}><u>TECH STACK</u></h2>
                        <p> you should know this project made from.</p>
                    </div>
                    <div style={{margin: '0 auto', maxWidth: 1024}}>
                        <div className={'d-flex gap-2 flex-wrap justify-content-center'}>

                            <Card className={'main-tech-card'}>
                                <Card.Body>
                                    <div className={'d-flex'}>
                                        <Image
                                            src={'/logo/nextjs.png'}
                                            alt="tech stack nextjs"
                                            style={{borderRadius: 15, objectFit: 'contain'}}
                                            className={'mx-auto'}
                                            width={180}
                                            height={180}
                                        />
                                    </div>
                                    <Card.Subtitle className={'mt-1 text-center'}>
                                        one of the most popular Frontend framework.
                                    </Card.Subtitle>
                                </Card.Body>
                                <Card.Footer className={'text-center'}>
                                    <Link href={'https://nextjs.org/'}>
                                        <h3>
                                            NextJS
                                        </h3>
                                    </Link>
                                </Card.Footer>
                            </Card>

                            <Card className={'main-tech-card'}>
                                <Card.Body>
                                    <div className={'d-flex'}>
                                        <Image
                                            src={'/logo/bootstrap.png'}
                                            alt="tech stack bootstrap"
                                            style={{borderRadius: 5, objectFit: 'contain'}}
                                            className={'mx-auto'}
                                            width={180}
                                            height={180}
                                        />
                                    </div>
                                    <Card.Subtitle className={'mt-1 text-center'}>
                                        Bootstrap UI lib with React support ready to as component
                                        by <a href={'https://react-bootstrap.github.io'}>React-Bootstrap</a>
                                    </Card.Subtitle>
                                </Card.Body>
                                <Card.Footer className={'text-center'}>
                                    <Link href={'https://getbootstrap.com/'}>
                                        <h3>
                                            Bootstrap
                                        </h3>
                                    </Link>
                                </Card.Footer>
                            </Card>
                        </div>

                        <div className={'text-white'}>
                            <p className={styles.description}>
                                Is above matching your requirement ?
                            </p>
                            <div className={'d-flex'}>
                                <div className={'mx-auto d-inline-block mt-5'}>
                                    <Link className={'text-white'} href="/docs">
                                        <h1>Go to documentation <ArrowRight size={28}/></h1>
                                        <p>Find more features and how to use it.</p>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </main>

            <footer className={'footer'}>
                Powered by
                <Link
                    className={'ms-1'}
                    href="https://www.gwingwin.cc"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GWINGWIN CC.
                </Link>
            </footer>
        </div>
    )
}
