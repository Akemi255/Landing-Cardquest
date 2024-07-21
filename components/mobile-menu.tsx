import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

export default function MobileMenu() {

    return (
        <div>
            <Sheet>
                <SheetTrigger asChild>
                    <Button className="bg-inherit border-none">
                        <svg className="w-6 h-6 text-[#e0e7ff]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </Button>
                </SheetTrigger>
                <SheetContent className="bg-[#1e293b] flex flex-col justify-between h-full border-none" side={"left"}>
                    <div>
                        <SheetHeader>
                            <SheetTitle className="text-[#e0e7ff]">Menu</SheetTitle>
                        </SheetHeader>
                        <div className="flex flex-col items-center py-4 space-y-2">
                            <Link href="#" className="block py-2 px-4 text-[#e0e7ff] hover:bg-[#334155] w-full text-center">Home</Link>
                            <Link href="#" className="block py-2 px-4 text-[#e0e7ff] hover:bg-[#334155] w-full text-center">Guide</Link>
                            <div className="w-full bg-[#1e293b]">
                                <Link href="https://discord.gg/tzHte7vBWv" target='_blank' className="block px-4 py-2 text-[#e0e7ff] hover:bg-[#334155] text-center">Discord</Link>
                                <Link href="https://x.com/hpmaid_" target='_blank' className="block px-4 py-2 text-[#e0e7ff] hover:bg-[#334155] text-center">Twitter</Link>
                                <Link href="https://www.youtube.com/@HaremProjectMaid" target='_blank' className="block px-4 py-2 text-[#e0e7ff] hover:bg-[#334155] text-center">YouTube</Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex justify-between space-x-2 mt-2 pb-4 px-4">
                        <Link href="#" className="w-1/2 py-2 px-4 border-2 border-indigo-600 hover:bg-indigo-700 text-gray-100 rounded-md transition duration-300 text-center">Login</Link>
                        <Link href="#" className="w-1/2 py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-gray-100 rounded-md transition duration-300 text-center">Signup</Link>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    );
}
