type NavLink = {
    href: string;
    label: string;
}

export const links: NavLink[] = [
    { href: "/", label: "Home" },
    { href: "/favourites", label: "Favourites" },
    { href: "/bookings", label: "Bookings" },
    { href: "/reviews", label: "reviews" },
    { href: "/rentals/create", label: "Add Rental" },
    { href: "/rentals", label: "Rentals" },
    { href: "/profile", label: "Profile" },
];