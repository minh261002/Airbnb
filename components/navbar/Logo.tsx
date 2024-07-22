import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    return (
        <>
            <head>
                <link rel="preload" href="/logo.png" as="image" />
            </head>
            <Link href='/'>
                <Image
                    src='/logo.png'
                    alt='logo'
                    width={130}
                    height={130}
                    priority
                    decoding="async"
                />
            </Link>
        </>
    );
}
