import { fetchStats } from "@/utils/actions";
import StatsCard from "./StatsCard";

const StatsContainer = async () => {
    const data = await fetchStats();

    return (
        <div className="mt-8 grid md:grid-cols-2 gap-4 lg:grid-cols-3">
            <StatsCard title="Users" value={data.userCount || 0} />
            <StatsCard title="Properties" value={data.propertyCount || 0} />
            <StatsCard title="Bookings" value={data.bookingCount || 0} />
        </div>
    );
}

export default StatsContainer;