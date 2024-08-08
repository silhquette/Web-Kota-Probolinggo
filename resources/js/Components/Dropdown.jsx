import { useState, createContext, useContext, Fragment } from 'react';
import { Link } from '@inertiajs/react';
import { Transition } from '@headlessui/react';

const DropDownContext = createContext();

const Dropdown = ({ children }) => {
    const [open, setOpen] = useState(false);

    const toggleOpen = () => {
        setOpen((previousState) => !previousState);
    };

    return (
        <DropDownContext.Provider value={{ open, setOpen, toggleOpen }}>
            <div className="relative">{children}</div>
        </DropDownContext.Provider>
    );
};

const Trigger = ({ children }) => {
    const { open, toggleOpen } = useContext(DropDownContext);

    return (
        <>
            <div onClick={toggleOpen} className='h-full flex items-stretch cursor-pointer'>
                {children}
            </div>

            {open && <div className="fixed inset-0 z-40" onClick={() => toggleOpen()}></div>}
        </>
    );
};

const Content = ({ align = 'left', width = '56', contentClasses = 'py-1 bg-white', children }) => {
    const { open, setOpen } = useContext(DropDownContext);

    let alignmentClasses = 'origin-top';

    if (align === 'left') {
        alignmentClasses = 'ltr:origin-top-left rtl:origin-top-right start-0';
    } else if (align === 'right') {
        alignmentClasses = 'ltr:origin-top-right rtl:origin-top-left end-0';
    }

    let widthClasses = '';

    if (width === '56') {
        widthClasses = 'w-56';
    }

    return (
        <>
            <Transition
                as={Fragment}
                show={open}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <div
                    className={`absolute z-50 mt-2 rounded-md shadow-lg ${alignmentClasses} ${widthClasses}`}
                    onMouseLeave={() => setOpen(false)} // Close on mouse leave
                >
                    <div className={`rounded-md ring-1 ring-black ring-opacity-5 ${contentClasses}`}>
                        {children}
                    </div>
                </div>
            </Transition>
        </>
    );
};

// Component for Dropdown item
const DropdownItem = ({ children, submenu }) => {
    const [subOpen, setSubOpen] = useState(false);

    const toggleSubOpen = () => {
        setSubOpen((prev) => !prev);
    };

    return (
        <div
            className="relative"
            onMouseEnter={() => setSubOpen(true)}
            onMouseLeave={() => setSubOpen(false)}
        >
            <div
                onClick={toggleSubOpen}
                className="flex justify-between items-center cursor-pointer px-4 py-2 hover:bg-gray-100"
            >
                {children}
                {submenu && (
                    <span className="ml-2"><svg  xmlns="http://www.w3.org/2000/svg"  width="16"  height="16"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6" /></svg></span> // Arrow indicator
                )}
            </div>
            {submenu && subOpen && (
                <div className="absolute left-full -top-1 py-1 w-48 bg-white border rounded-md shadow-lg">
                    {submenu.map((item, index) => (
                        <div key={index} className="px-4 py-2 hover:bg-gray-100 hover:text-blue-700">
                            <a href={item.link}>{item.label}</a>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Object.assign(Dropdown, { Trigger, Content, DropdownItem });
