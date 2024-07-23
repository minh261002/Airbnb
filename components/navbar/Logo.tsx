import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    const gradienStyle = {
        background: 'linear-gradient(90deg, #8564fb, #06aeef)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
    };
    return (
        <>
            <head>
                <link rel="preload" href="/logo.png" as="image" />
            </head>
            <Link href='/' className="flex items-center gap-3">
                <Image
                    src='/logo.svg'
                    alt='logo'
                    width={40}
                    height={40}
                    priority
                    decoding="async"
                />

                <p className="text-3xl font-semibold hidden md:block" style={gradienStyle}>
                    EcoNest
                </p>
            </Link>
        </>
    );
}
