'use client'

import { EmailShareButton, EmailIcon, FacebookShareButton, FacebookIcon, FacebookMessengerIcon, FacebookMessengerShareButton } from 'react-share'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Button } from '../ui/button'
import { LuShare2 } from 'react-icons/lu';

const ShareButton = ({ propertyId, name }: { propertyId: string, name: string }) => {
    const url = process.env.NEXT_PUBLIC_WEBSITE_URL;
    const shareLink = `${url}/properties/${propertyId}`;

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button className="p-2" variant="outline" size='icon'>
                    <LuShare2 />
                </Button>
            </PopoverTrigger>

            <PopoverContent side='top' align='end' sideOffset={10} className="flex items-center justify-center gap-x-2 w-full">
                <FacebookShareButton url={shareLink} title={name}>
                    <FacebookIcon size={32} round />
                </FacebookShareButton>

                <EmailShareButton url={shareLink} title={name}>
                    <EmailIcon size={32} round />
                </EmailShareButton>
            </PopoverContent>
        </Popover>
    );
}

export default ShareButton