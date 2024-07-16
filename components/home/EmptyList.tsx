import { Button } from '@/components/ui/button'
import Link from 'next/link'

const EmptyList = ({
    heading = 'No results found',
    message = 'Keep exploring, you might find something you like',
    btnText = 'Back to Home',
}: {
    heading?: string;
    message?: string;
    btnText?: string;
}) => {
    return (
        <div className="mt-4">
            <h2 className="text-xl font-bold">{heading}</h2>
            <p className="text-lg">{message}</p>
            <Button asChild size="lg" className="mt-4 capitalize">
                <Link href="/"> {btnText} </Link>
            </Button>
        </div>
    )
}

export default EmptyList