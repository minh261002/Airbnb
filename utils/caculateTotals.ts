import { calculateDaysBetween } from "./calendar";
type BookingDetails = {
    checkIn: Date;
    checkOut: Date;
    price: number;
}

export const calculateTotals = ({ checkIn, checkOut, price }: BookingDetails) => {
    const totalNight = calculateDaysBetween({ checkIn, checkOut });
    const subTotal = totalNight * price;
    const cleaning = 100000;
    const services = 50000;
    const tax = subTotal * 0.1;

    const total = subTotal + cleaning + services + tax;

    return {
        totalNight,
        subTotal,
        cleaning,
        services,
        tax,
        total
    }
}