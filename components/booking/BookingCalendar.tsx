'use client'
import { Calendar } from "../ui/calendar";
import { useState, useEffect } from "react";
import { useToast } from "../ui/use-toast";
import { DateRange } from "react-day-picker";
import { useProperty } from "@/utils/store";
import { generateDisabledDates, generateDateRange, defaultSelected, generateBlockedPeriods } from "@/utils/calendar";

const BookingCalendar = () => {
    const currentDate = new Date();
    const [range, setRange] = useState<DateRange | undefined>(defaultSelected);
    const bookings = useProperty(state => state.bookings);
    const { toast } = useToast();

    const blockedPreiods = generateBlockedPeriods({
        bookings,
        today: currentDate,
    });

    const unavailableDates = generateDisabledDates(blockedPreiods);

    useEffect(() => {
        const selectedRange = generateDateRange(range);

        const isDisabledDateIncluded = selectedRange.some((date) => {
            if (unavailableDates[date]) {
                setRange(defaultSelected);
                toast({
                    description: "Some dates are booked, please select another date",
                });
                return true;
            }

            return false;
        });

        useProperty.setState({ range });
    }, [range])
    return (
        <Calendar mode="range"
            defaultMonth={currentDate}
            selected={range}
            onSelect={setRange}
            className="mb-4"
            disabled={blockedPreiods}

        />
    );
}

export default BookingCalendar