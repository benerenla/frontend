import Head from 'next/head'
import { CONFIG } from '../libs/config/global'
export default function Header({ title }) {
    return (
        <Head>
            <title>{title ? title : CONFIG.defaulTitle}</title>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap" rel="stylesheet" />
        </Head>
    )
}