import { calculateTotals } from "@/utils/caculateTotals";
import { useProperty } from "@/utils/store"
import { formatCurrency } from '@/utils/format';
import { Card, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";

const BookingForm = () => {

    const { range, price } = useProperty((state) => state);
    const checkIn = range?.from as Date;
    const checkOut = range?.to as Date;

    const { totalNights, subTotal, cleaning, services, tax, orderTotal } = calculateTotals({ checkIn, checkOut, price });
    return (
        <Card className="p-8 mb-4">
            <CardTitle className="mb-8">Booking Summary</CardTitle>
            <FormRow label={`${formatCurrency(price)} x ${totalNights} nights`} amount={subTotal} />
            <FormRow label="Cleaning " amount={cleaning} />
            <FormRow label="Service " amount={services} />
            <FormRow label="Tax " amount={tax} />
            <Separator className="mt-4" />
            <CardTitle className="mt-8">
                <FormRow label="Booking Total" amount={orderTotal} />
            </CardTitle>
        </Card>
    )
}

const FormRow = ({ label, amount }: { label: string, amount: number }) => {
    return <p className="flex justify-between text-sm mb-2">
        <span>{label}</span>
        <span>{formatCurrency(amount)}</span>
    </p>
}

export default BookingForm