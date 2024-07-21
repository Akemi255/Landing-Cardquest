import { Button } from "@/components/ui/button"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

import Link from "next/link";

export default function Socials() {
    return (
        <div>
            <Popover>
                <PopoverTrigger asChild>
                    <Button variant="outline" className="w-[45px] bg-inherit border-none hover:bg-inherit hover:text-[#9ca3af]">
                        Socials
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-46 bg-[#1e293b] border border-[#2e3a4b]">
                    <div className="flex flex-col">
                        <Link href="https://discord.gg/tzHte7vBWv" target='_blank' className="block px-4 py-2 text-[#e0e7ff] hover:bg-[#334155] text-center">Discord</Link>
                        <Link href="https://x.com/hpmaid_" target='_blank' className="block px-4 py-2 text-[#e0e7ff] hover:bg-[#334155] text-center">Twitter</Link>
                        <Link href="https://www.youtube.com/@HaremProjectMaid" target='_blank' className="block px-4 py-2 text-[#e0e7ff] hover:bg-[#334155] text-center">YouTube</Link>
                    </div>
                </PopoverContent>
            </Popover>
        </div>
    );
}