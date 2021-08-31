import Link from 'next/link'
import ProfilePicture from '../../components/profie-picture'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>First Post</h1>
            <h5 className="title">
                Back to {' '}
                <Link href="/">
                    <a>Home</a>
                </Link>
            </h5>
            <ProfilePicture />
        </Layout>
    )
}