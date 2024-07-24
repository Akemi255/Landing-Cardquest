import { Button } from "@/components/ui/button"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

import { FaChevronDown } from 'react-icons/fa'; // Importa el ícono de react-icons
import Link from 'next/link';

export default function Socials() {
    return (
        <div>
            <Popover>
                <PopoverTrigger asChild>
                    <Button variant="outline" className="bg-inherit hover:bg-inherit border-none text-[#e0e7ff] hover:text-[#9ca3af] text-lg flex items-center space-x-2 p-0 font-normal">
                        <span>Socials</span>
                        <FaChevronDown className="ml-1 w-3" /> {/* Ícono de dropdown a la derecha */}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-46 bg-[#1e293b] border border-[#2e3a4b]">
                    <div className="flex flex-col">
                        <Link href="https://discord.gg/tzHte7vBWv" target='_blank' className="block px-4 py-2 text-[#e0e7ff] hover:text-[#9ca3af] text-center text-lg">Discord</Link>
                        <Link href="https://x.com/hpmaid_" target='_blank' className="block px-4 py-2 text-[#e0e7ff] hover:text-[#9ca3af] text-center text-lg">Twitter</Link>
                        <Link href="https://www.youtube.com/@HaremProjectMaid" target='_blank' className="block px-4 py-2 text-[#e0e7ff] hover:text-[#9ca3af] text-center text-lg">YouTube</Link>
                    </div>
                </PopoverContent>
            </Popover>
        </div>
    );
}