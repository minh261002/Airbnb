import React from 'react'
import Link from 'next/link'
import { Button } from '../ui/button'
import Image from 'next/image'

const Logo = () => {
    return (
        <Link href='/'>
            <Image src='/logo.png' alt='logo' width={130} height={130} />
        </Link>
    )
}

export default Logo