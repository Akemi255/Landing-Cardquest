import React from 'react';

export const metadata = {
  title: "Servers | HPMaid",
  description: "Explore the servers that support us.",
};

const Servers: React.FC = () => {
  const servers = [
    { id: 1, name: "Server 1", members: "3,000", image: "assets/logo.jpg" },
    { id: 2, name: "Server 2", members: "6,000", image: "assets/logo.jpg" },
    { id: 3, name: "Server 3", members: "10,000", image: "assets/logo.jpg" },
    { id: 4, name: "Server 4", members: "10,000", image: "assets/logo.jpg" },
    { id: 5, name: "Server 5", members: "10,000", image: "assets/logo.jpg" },
    { id: 6, name: "Server 6", members: "10,000", image: "assets/logo.jpg" },
    { id: 7, name: "Server 7", members: "10,000", image: "assets/logo.jpg" },
    { id: 8, name: "Server 8", members: "10,000", image: "assets/logo.jpg" },
    { id: 9, name: "Server 9", members: "10,000", image: "assets/logo.jpg" },
    { id: 10, name: "Server 10", members: "10,000", image: "assets/logo.jpg" },
    { id: 11, name: "Server 11", members: "10,000", image: "assets/logo.jpg" },
    { id: 12, name: "Server 12", members: "10,000", image: "assets/logo.jpg" },
    { id: 13, name: "Server 13", members: "10,000", image: "assets/logo.jpg" },
  ];

  return (
    <section className="py-12">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servers.map((server) => (
            <a
              key={server.id}
              href="#"
              target="_blank"
              className="bg-[#2a2d35] p-6 rounded-lg shadow-lg flex items-center transform scale-100 hover:scale-105 transition-transform duration-300"
            >
              <img src={server.image} alt={server.name} className="w-16 h-16 rounded-full mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-[#fff]">{server.name}</h3>
                <p className="text-gray-300">{server.members} members</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servers;
