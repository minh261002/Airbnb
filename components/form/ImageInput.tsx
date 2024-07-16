import { Input } from "../ui/input";
import { Label } from "../ui/label";

const ImageInput = () => {
    const name = 'image';
    return (
        <div>
            <Label htmlFor={name} className="capitalize">Image</Label>
            <Input type="file" name={name} id={name} required accept="image/*" className="max-w-xs" />
        </div>
    )
}

export default ImageInput