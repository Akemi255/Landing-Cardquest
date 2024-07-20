
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Terms of Service | HPMaid ",
  description: "Terms of Service for Harem: Project Maid.",
};

const TermsOfService: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 text-[#e0e7ff]">
      <h1 className="text-4xl font-bold mb-4 uppercase">Terms of Service</h1>
      <p className='text-[#fff]'>Welcome to Harem: Project Maid. By using our website and game, you agree to these terms. If you do not agree, please stop using the Service.</p>

      <h2 className="text-2xl font-bold mt-8 mb-4 uppercase">Account and Conduct</h2>
      <p className='text-[#fff]'>You are responsible for securing your account and for all activities that occur under your account.</p>
      <p className='text-[#fff]'>Engaging in illegal activities, cheating, or misusing the Service is prohibited.</p>

      <h2 className="text-2xl font-bold mt-8 mb-4 uppercase">Access Rights</h2>
      <p className='text-[#fff]'>We reserve the right to limit or revoke access to the Service at any time and for any reason, at our discretion.</p>

      <h2 className="text-2xl font-bold mt-8 mb-4 uppercase">Disclaimers</h2>
      <p className='text-[#fff]'>We are not responsible for any real or virtual damages resulting from the use of the Service.</p>
      <p className='text-[#fff]'>Any illegal or malicious use of the Service may result in loss of access. We are not responsible for malicious use of the Service by other users.</p>

      <h2 className="text-2xl font-bold mt-8 mb-4 uppercase">Changes</h2>
      <p className='text-[#fff]'>We may update these terms in the future. Continued use of the Service means you accept the new terms.</p>

      <h2 className="text-2xl font-bold mt-8 mb-4 uppercase">Contact</h2>
      <p className="text-[#e0e7ff]">
        If you have any questions, contact us at <a href="mailto:contact.hpmaid@gmail.com" className="text-[#fff] hover:underline">contact.hpmaid@gmail.com</a>.
      </p>

    </div>
  );
};

export default TermsOfService;
