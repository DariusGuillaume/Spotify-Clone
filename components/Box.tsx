import { twMerge } from "tailwind-merge";

interface BoxProps {
  children: React.ReactNode;
  className?: string;
  shadow?: boolean; // Add a new prop to control the box-shadow
}

const Box: React.FC<BoxProps> = ({ children, className, shadow = false }) => {
  return (
    <div
      className={twMerge(
        `bg-white rounded-lg h-fit w-full`,
        shadow && "shadow-md shadow-gray-200", // Apply box-shadow if 'shadow' prop is true
        className
      )}
    >
      {children}
    </div>
  );
};

export default Box;