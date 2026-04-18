import { useLocation } from "react-router-dom";
import { Link } from "@/components/ReloadLink";

interface NavLinkProps {
  to: string;
  children: string;
  onClick?: () => void;
  className?: string;
}

export function NavLink({ to, children, onClick, className = "" }: NavLinkProps) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      onClick={onClick}
      className={`group relative h-5 overflow-hidden inline-flex items-center ${className}`}
    >
      <span className="relative flex flex-col transition-transform duration-300 ease-out group-hover:-translate-y-5">
        <span
          className={`text-sm leading-5 transition-colors duration-200 ${
            isActive ? "text-foreground" : "text-muted-foreground"
          }`}
        >
          {children}
        </span>
        <span className="text-sm leading-5 text-foreground absolute top-5">
          {children}
        </span>
      </span>
    </Link>
  );
}
