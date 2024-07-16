import { Label } from "../ui/label"
import { categories } from "@/utils/categories"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"

const name = 'category'

const CategoriesInput = ({ defaultValue }: { defaultValue?: string }) => {
    return (
        <div className="mb-2">
            <Label htmlFor={name} className="capitalize">Category</Label>
            <Select defaultValue={defaultValue || categories[0].label} name={name} required>
                <SelectTrigger id={name}>
                    <SelectValue />
                </SelectTrigger>

                <SelectContent>
                    {categories.map((item) => {
                        return <SelectItem key={item.label} value={item.label}>
                            <span className="flex items-center gap-2 capitalize">
                                <item.icon />
                                {item.label}
                            </span>
                        </SelectItem>
                    })}
                </SelectContent>
            </Select>
        </div>
    )
}

export default CategoriesInput