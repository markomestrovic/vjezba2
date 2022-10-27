const navigationItems = [
    'Home',
    'About us',
    'Showcase',
    'Blog',
    'Contact',
    'Sign in',
];

const NavBar = () => {
    return (
        <nav className="inline-flex list-none font-medium text-hci-lila">
            {navigationItems.map((item) => (
                <li
                    key={item}
                    className="px-5 py-2 whitespace-nowrap hover:bg-hci-lila hover:bg-opacity-50 hover:text-white cursor-pointer"
                >
                    {item}
                </li>
            ))}
        </nav>
    );
};

export default NavBar;
