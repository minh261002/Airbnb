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
    useEffect(() => {
        useProperty.setState({ range });
    }, [range])
    return (
        <Calendar mode="range" defaultMonth={currentDate} selected={range}
            onSelect={setRange} className="mb-4"
        />
    );
}

export default BookingCalendar