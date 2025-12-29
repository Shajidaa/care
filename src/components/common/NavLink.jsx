const { default: Link } = require("next/link");
const { usePathname } = require("next/navigation");

const NavLink = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`relative px-4 py-2 text-base font-medium transition-all duration-300 hover:text-primary ${
        isActive ? "text-primary" : "text-base-content/80"
      }`}
    >
      {children}
      {/* Active/Hover bottom border */}
      <span
        className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
          isActive ? "w-full" : "w-0 hover:w-full"
        }`}
      ></span>
    </Link>
  );
};
export default NavLink;
