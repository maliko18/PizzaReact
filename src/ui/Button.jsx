import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  const base =
    "rounded-full text-sm bg-yellow-400 font-semibold tracking-wide text-stone-800 uppercase transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:ring focus:ring-yellow-300 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed";
  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    small: base + " text-xs px-2 py-2 sm:px-5 sm:py-2.5",
    secondary:
      " text-sm rounded-full border-2 border-stone-300 font-semibold tracking-wide text-stone-400 uppercase transition-colors duration-300 hover:bg-stone-300 hover:text-stone-900 focus:text-stone-900 focus:bg-stone-300 focus:ring focus:ring-stone-300 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5",
     round: base + " text-sm px-2.5 py-1 sm:px-3.5 sm:py-2.5",
     inForm: base + " text-xs px-2 py-2 sm:px-3 sm:py-2"
  };
  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );
  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
