"use client"

import React from 'react'
import { SignOutButton } from '@clerk/nextjs'
import { useToast } from '../ui/use-toast'

const SignOutLink = () => {
    const { toast } = useToast();
    const handleSignOut = async () => {
        toast({ description: 'You have been signed out.' })
    }

    return (
        <SignOutButton redirectUrl='/'>
            <button className='w-full text-left' onClick={handleSignOut}>
                Log out
            </button>
        </SignOutButton>
    )
}

export default SignOutLink