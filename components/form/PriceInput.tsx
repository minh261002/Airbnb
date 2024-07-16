import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { Prisma } from "@prisma/client"



type PriceInputProps = {
    defaultValue?: number
}

const name = 'price'

const PriceInput = ({ defaultValue }: PriceInputProps) => {
    return (
        <div className="mb-2">
            <Label htmlFor={name} className="capitalize">Price (đ) </Label>
            <Input
                type="number"
                id={name}
                name={name}
                min={0}
                defaultValue={defaultValue || 0}
            />
        </div>
    )
}

export default PriceInput