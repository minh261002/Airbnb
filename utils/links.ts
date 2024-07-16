type NavLink = {
    href: string;
    label: string;
}

export const links: NavLink[] = [
    { href: "/", label: "Home" },
    { href: "/favorites", label: "Favorites" },
    { href: "/bookings", label: "Bookings" },
    { href: "/reviews", label: "reviews" },
    { href: "/rentals/create", label: "Add Rental" },
    { href: "/rentals", label: "Rentals" },
    { href: "/profile", label: "Profile" },
];