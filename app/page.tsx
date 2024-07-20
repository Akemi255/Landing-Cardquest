import type { Metadata } from "next";
import Head from "next/head";
import Nav from '../components/Nav'
import "./globals.css";

export const metadata: Metadata = {
  title: "Harem: Project Maid",
  description: "Welcome to Harem: Project Maid. Collect and trade to build your perfect harem. Discover the rarity of each card and rise in the global ranking. ¡Join our community and have fun!",
};

export default function Page() {
  return (
    <>
      <main className="flex flex-col md:flex-row items-start justify-between min-h-[80vh] p-8 max-w-7xl mx-auto mt-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto">
        
          <div className="md:w-[30vw] mb-8 md:mb-0">
            <h1 className="text-4xl font-bold text-[#d946ef] mb-4 uppercase">
              The First Online Anime Card Collection Game
            </h1>
            <p className="text-lg text-[#eee] font-bold mb-6">
              Welcome to <span className="text-[#4361ee]">Harem: Project Maid</span>. Collect and trade to build your perfect harem. Discover the rarity of each card and rise in the global ranking. ¡Join our community and have fun!
            </p>

            <div className="flex space-x-5">
              <a 
                href="https://discord.gg/your-discord-link" 
                className="py-2 px-6 bg-[#7289da] text-white rounded-md hover:bg-[#5b6eae] transform scale-100 hover:scale-105 transition-transform duration-300"
              >
                Discord
              </a>
              <a 
                href="/play" 
                className="py-2 px-4 border-2 border-[#c026d3] text-white rounded-md transform scale-100 hover:scale-105 transition-transform duration-300"
              >
                Play Now
              </a>
            </div>
          </div>

      
          <div className="md:w-1/2 flex justify-center float">
            <img 
              src="assets/waifu.jpg" 
              alt="Waifu" 
              className="w-[350px]"
            />
          </div>
        </div>
      </main>

      {/* Servers */}

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#d946ef] mb-2">Partners Servers</h2>
          <p className="text-lg text-gray-300 mb-6">Explore more servers or see the ones that support us!</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Server 1 */}

            <div className="bg-[#2a2d35] p-6 rounded-lg shadow-lg flex items-center">
              <img src="assets/logo.jpg" alt="Server 1" className="w-16 h-16 rounded-full mr-4"/>
              <div>
                <h3 className="text-xl font-semibold text-[#fff]">Server 1</h3>
                <p className="text-gray-300">3,000 members</p>
              </div>
            </div>

            {/* Server 2 */}

            <div className="bg-[#2a2d35] p-6 rounded-lg shadow-lg flex items-center">
              <img src="assets/logo.jpg" alt="Server 2" className="w-16 h-16 rounded-full mr-4"/>
              <div>
                <h3 className="text-xl font-semibold text-[#fff]">Server 2</h3>
                <p className="text-gray-300">6,000 members</p>
              </div>
            </div>

            {/* Server 3 */}

            <div className="bg-[#2a2d35] p-6 rounded-lg shadow-lg flex items-center">
              <img src="assets/logo.jpg" alt="Server 3" className="w-16 h-16 rounded-full mr-4"/>
              <div>
                <h3 className="text-xl font-semibold text-[#fff]">Server 3</h3>
                <p className="text-gray-300">10,000 members</p>
              </div>
            </div>
            
            {/* Server 4 */}
            
            <div className="bg-[#2a2d35] p-6 rounded-lg shadow-lg flex items-center">
              <img src="assets/logo.jpg" alt="Server 4" className="w-16 h-16 rounded-full mr-4"/>
              <div>
                <h3 className="text-xl font-semibold text-[#fff]">Server 4</h3>
                <p className="text-gray-300">10,000 members</p>
              </div>
            </div>

            {/* Server 5 */}

            <div className="bg-[#2a2d35] p-6 rounded-lg shadow-lg flex items-center">
              <img src="assets/logo.jpg" alt="Server 5" className="w-16 h-16 rounded-full mr-4"/>
              <div>
                <h3 className="text-xl font-semibold text-[#fff]">Server 5</h3>
                <p className="text-gray-300">10,000 members</p>
              </div>
            </div>

            {/* Server 6 */}

            <div className="bg-[#2a2d35] p-6 rounded-lg shadow-lg flex items-center">
              <img src="assets/logo.jpg" alt="Server 6" className="w-16 h-16 rounded-full mr-4"/>
              <div>
                <h3 className="text-xl font-semibold text-[#fff]">Server 6</h3>
                <p className="text-gray-300">10,000 members</p>
              </div>
            </div>

          </div>
          <div className="flex justify-center mt-8">
            <a 
              href="/more-servers" 
              className="py-2 px-6 bg-[#d946ef] text-white rounded-md hover:bg-[#c125e0] transform scale-100 hover:scale-105 transition-transform duration-300"
            >
              View More
            </a>
          </div>
        </div>
      </section>

    </>
  );
}
