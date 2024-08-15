import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";

//import Footer
import Footer from "@/Components/Footer";

export default function AdminGuest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
            <div className="w-[480px] p-12 rounded-xl shadow-md bg-white overflow-hidden flex flex-col items-center justify-center gap-8">
                <ApplicationLogo  />
                {children}
            </div>
        </div>
    );
}
