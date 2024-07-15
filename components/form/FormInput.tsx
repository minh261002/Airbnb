import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

type FormInputProps = {
    name: string;
    type: string;
    label?: string;
    default?: string;
    placeholder?: string;
}

const FormInput = (props: FormInputProps) => {

    const { name, type, label, default: defaultValue, placeholder } = props;

    return (
        <div className="mb-2">
            <Label htmlFor={name} className="capitalize">{label || name}</Label>
            <Input type="text" id={name} name={name} defaultValue={defaultValue} placeholder={placeholder} required />
        </div>
    )
}

export default FormInput