"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";

interface ListItemProps {
    image: string;
    name: string;
    href: string;
}

const ListItem: React.FC<ListItemProps> = ({ image, name, href }) => {
    const router = useRouter();
    const onClick = () => {
        router.push(href);
    };

    return (
        <button onClick={onClick} className="relative group flex items-center rounded-md overflow-hidden gap-x-4 bg-gray-100/20 hover:bg-gray-100/20 transition text-black  pr-12 w-full">
            <div className="relative min-h-[64px] min-w-[64px]">
                <Image className="object-cover" fill src={image} alt="Image" />
            </div>
            <p className="font-medium truncate py-5">
                {name}
            </p>
            {/* Adjusted play button */}
            <div className="absolute right-[-40px] top-1/2 transform -translate-y-1/2 transition opacity-0 rounded-full flex items-center justify-center bg-green-500 p-4 drop-shadow-md -translate-x-full group-hover:opacity-100 hover:scale-110 !important">
                <FaPlay className="text-white" style={{ fontSize: "10px" }} />

            </div>
        </button>
    );
};

export default ListItem;
