import { Label } from '@/components/ui/label';
import { formattedCountries } from '@/utils/countries';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const name = 'country'

const defaultValueSetting = 'VN'

const CountriesInput = ({ defaultValue }: { defaultValue?: string }) => {
    return (
        <div className="mb-2">
            <Label htmlFor={name} className='capitalize'>{name}</Label>
            <Select defaultValue={defaultValue || defaultValueSetting} name={name} required>
                <SelectTrigger>
                    <SelectValue />
                </SelectTrigger>

                <SelectContent>
                    {formattedCountries.map((item) => {
                        return <SelectItem key={item.code} value={item.code}>
                            <span className='flex items-center gap-2'>
                                {item.flag} {item.name}
                            </span>
                        </SelectItem>
                    })}
                </SelectContent>
            </Select>
        </div>
    );
}

export default CountriesInput;