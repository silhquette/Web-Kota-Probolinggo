import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
            <div className='flex w-full justify-between items-stretch px-24 bg-white gap-24 h-[9vh] fixed top-0'>
                <Link href="/" className='flex items-center justify-center text-lg'>
                    <ApplicationLogo className="text-gray-500" />
                </Link>
                <div className='flex gap-12 w-full'>
                    <NavLink href={route('dashboard')} active={route().current('dashboard')}>
                        Beranda
                    </NavLink>
                    <NavLink href={route('dashboard')} active={route().current('dashboard')}>
                        Profil
                    </NavLink>
                    <NavLink href={route('dashboard')} active={route().current('dashboard')}>
                        Layanan Publik
                    </NavLink>
                    <NavLink href={route('dashboard')} active={route().current('dashboard')}>
                        Statistik
                    </NavLink>
                    <NavLink href={route('article.index')} active={route().current('article*')}>
                        Berita
                    </NavLink>
                </div>
                <input type="text" placeholder='Cari Layanan' className='w-[500px] my-5 rounded-xl border border-gray-200' />
            </div>

            <div className="w-full mt-[9vh] px-6 py-4 bg-white overflow-hidden min-h-[91vh]">
                {children}
            </div>
        </div>
    );
}
