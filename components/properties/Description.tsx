'use client'

import { useState } from "react"
import { Button } from "../ui/button"
import Title from './Title'

const Description = ({ description }: { description: string }) => {
    const [isFullDescription, setIsFullDescription] = useState(false)
    const words = description.split(' ')
    const isLongDescription = words.length > 100;

    const toggleDes = () => {
        setIsFullDescription(!isFullDescription)
    }

    const dispalyedDescription = isLongDescription && !isFullDescription ? words.slice(0, 100).join(' ') : description

    return (
        <article className="mt-4">
            <Title text="Description" />
            <p className="text-muted-foreground font-light leading-loose">
                {dispalyedDescription}
            </p>
            {isLongDescription &&
                <Button variant='link' className="pl-0" onClick={toggleDes}>
                    {isFullDescription ? 'Show less' : 'Show more'}
                </Button>}
        </article>
    )
}

export default Description