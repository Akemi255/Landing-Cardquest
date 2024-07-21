import Link from "next/link";


export default function Logo() {
    return (
        <div>
            <Link href="/" className="flex items-center text-[#e0e7ff]">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                    <img src="assets/logo.jpg" alt="Logo" className="w-full h-full object-cover" />
                </div>
                <span className="ml-3 font-bold text-lg">Harem: Project Maid</span>
            </Link>
        </div>
    );
}