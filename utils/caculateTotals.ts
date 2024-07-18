
import { calculateDaysBetween } from '@/utils/calendar';

type BookingDetails = {
    checkIn: Date;
    checkOut: Date;
    price: number;
};

export const calculateTotals = ({
    checkIn,
    checkOut,
    price,
}: BookingDetails) => {
    const totalNights = calculateDaysBetween({ checkIn, checkOut });
    const subTotal = totalNights * price;
    const cleaning = 10;
    const services = 10;
    const tax = subTotal * 0.1;
    const orderTotal = subTotal + cleaning + services + tax;
    return { totalNights, subTotal, cleaning, services, tax, orderTotal };
};