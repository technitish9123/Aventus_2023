import Link from "next/link";
import { ButtonProps } from "../../utils/shared.types";
import clsx from "clsx";

const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  hashRedColor = false,
  variant = "solid",
  textGradient = false,
  animated = true,
  href = "",
  wrapperClass,
  ...btn_props
}) => {
  return (
    <Link
      href={href}
      target={"_blank"}
      className={clsx(
        "group overflow-hidden rounded-xl",
        hashRedColor && variant === "outline" && "bg-hash-red",
        wrapperClass
      )}
    >
      <button
        type="submit"
        className={clsx(
          "flex flex-row items-center px-6 py-3 text-body-large font-medium",
          hashRedColor && variant === "solid" && "bg-hash-red text-hash-light",
          hashRedColor &&
            variant === "outline" &&
            "m-[1px] rounded-[10px] bg-hash-light dark:bg-hash-dark",
          !hashRedColor &&
            "bg-hash-dark text-hash-light hover:bg-hash-dark/90 dark:bg-hash-light dark:text-hash-dark dark:hover:bg-hash-light/90",
          className
        )}
        {...btn_props}
      >
        {children}
      </button>
    </Link>
  );
};

export default Button;

// ${
//     animated
//       ? "bg-no-repeat hover:bg-hash-red hover:bg-[length:100%_100%] lg:bg-[length:0%_100%] duration-300 transition-all "
//       : ""
//   }
