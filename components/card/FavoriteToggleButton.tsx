
import { FaHeart } from 'react-icons/fa';
import { Button } from '../ui/button';
import { auth } from '@clerk/nextjs/server';

const FavoriteToggleButton = () => {
    return (
        <Button className='p-2 cursor-pointer' size="icon" variant='outline'>
            <FaHeart className="w-4 h-4" />
        </Button>
    )
}

export default FavoriteToggleButton