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
                            <SheetTitle className="text-[#e0e7ff] font-normal">Menu</SheetTitle>
                        </SheetHeader>
                        <div className="flex flex-col items-center p-1">
                            <Link href="/" className="block py-2 text-[#e0e7ff] text-lg hover:bg-[#334155] w-full text-center">Home</Link>
                            <Link href="#" className="block pb-6 text-[#e0e7ff] text-lg hover:bg-[#334155] w-full text-center">Guide</Link>
                            <div className="w-full flex flex-col items-center space-y-2">
                                <Link href="https://discord.gg/tzHte7vBWv" target='_blank' className="block py-2 px-4 text-[#e0e7ff] bg-[#5865F2] hover:bg-[#4f54d3] rounded-md text-center flex items-center justify-center space-x-2 w-[100px]">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
                                        <path d="M18.59 5.88997C17.36 5.31997 16.05 4.89997 14.67 4.65997C14.5 4.95997 14.3 5.36997 14.17 5.69997C12.71 5.47997 11.26 5.47997 9.83001 5.69997C9.69001 5.36997 9.49001 4.95997 9.32001 4.65997C7.94001 4.89997 6.63001 5.31997 5.40001 5.88997C2.92001 9.62997 2.25001 13.28 2.58001 16.87C4.23001 18.1 5.82001 18.84 7.39001 19.33C7.78001 18.8 8.12001 18.23 8.42001 17.64C7.85001 17.43 7.31001 17.16 6.80001 16.85C6.94001 16.75 7.07001 16.64 7.20001 16.54C10.33 18 13.72 18 16.81 16.54C16.94 16.65 17.07 16.75 17.21 16.85C16.7 17.16 16.15 17.42 15.59 17.64C15.89 18.23 16.23 18.8 16.62 19.33C18.19 18.84 19.79 18.1 21.43 16.87C21.82 12.7 20.76 9.08997 18.61 5.88997H18.59ZM8.84001 14.67C7.90001 14.67 7.13001 13.8 7.13001 12.73C7.13001 11.66 7.88001 10.79 8.84001 10.79C9.80001 10.79 10.56 11.66 10.55 12.73C10.55 13.79 9.80001 14.67 8.84001 14.67ZM15.15 14.67C14.21 14.67 13.44 13.8 13.44 12.73C13.44 11.66 14.19 10.79 15.15 10.79C16.11 10.79 16.87 11.66 16.86 12.73C16.86 13.79 16.11 14.67 15.15 14.67Z" fill="#ffffff"></path>
                                    </svg>
                                    
                                </Link>
                                <Link href="https://x.com/hpmaid_" target='_blank' className="block py-2 px-4 text-[#e0e7ff] bg-[#000] hover:bg-[#1a91da] rounded-md text-center flex items-center justify-center space-x-2 w-[100px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 512 509.64">
                                        <rect width="512" height="509.64" rx="115.61" ry="115.61"/>
                                        <path fill="#fff" fillRule="evenodd" clipRule="evenodd" d="M323.74 148.35h36.12l-78.91 90.2 92.83 122.73h-72.69l-56.93-74.43-65.15 74.43h-36.14l84.4-96.47-89.05-116.46h74.53l51.46 68.04 59.53-68.04zm-12.68 191.31h20.02l-129.2-170.82H180.4l130.66 170.82z"/>
                                    </svg>
                                    
                                </Link>
                                <Link href="https://www.youtube.com/@HaremProjectMaid" target='_blank' className="block py-2 px-4 text-[#e0e7ff] bg-[#FF0000] hover:bg-[#e60000] rounded-md text-center flex items-center justify-center space-x-2 w-[100px]">
                                <svg className="w-7 h-7" viewBox="0 -3 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#fff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>youtube [#168]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-300.000000, -7442.000000)" fill="#fff"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M251.988432,7291.58588 L251.988432,7285.97425 C253.980638,7286.91168 255.523602,7287.8172 257.348463,7288.79353 C255.843351,7289.62824 253.980638,7290.56468 251.988432,7291.58588 M263.090998,7283.18289 C262.747343,7282.73013 262.161634,7282.37809 261.538073,7282.26141 C259.705243,7281.91336 248.270974,7281.91237 246.439141,7282.26141 C245.939097,7282.35515 245.493839,7282.58153 245.111335,7282.93357 C243.49964,7284.42947 244.004664,7292.45151 244.393145,7293.75096 C244.556505,7294.31342 244.767679,7294.71931 245.033639,7294.98558 C245.376298,7295.33761 245.845463,7295.57995 246.384355,7295.68865 C247.893451,7296.0008 255.668037,7296.17532 261.506198,7295.73552 C262.044094,7295.64178 262.520231,7295.39147 262.895762,7295.02447 C264.385932,7293.53455 264.28433,7285.06174 263.090998,7283.18289" id="youtube-[#168]"> </path> </g> </g> </g> </g></svg>
                                    
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex justify-between space-x-2 mt-2 pb-4 px-4">
                        <Link href="#" className="w-1/2 py-2 px-4 border-2 border-[#c026d3] text-gray-100 rounded-md transition duration-300 text-center">Login</Link>
                        <Link href="#" className="w-1/2 py-2 px-4 bg-[#d946ef] hover:bg-[#D83CEF] text-gray-100 rounded-md transition duration-300 text-center">Signup</Link>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    );
}
