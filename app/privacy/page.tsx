// src/pages/privacy-policy/page.tsx

import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Privacy Policy | HPMaid",
  description: "Privacy Policy for Harem: Project Maid.",
};

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 text-[#e0e7ff]">
      <h1 className="text-4xl font-bold mb-4 uppercase">Privacy Policy</h1>
      <p className='text-[#fff]'>At Harem: Project Maid, we deeply value your privacy and are committed to protecting your personal information. This policy explains how we collect, use, store, and share your data when you use our website and game service. By using our service, you agree to the practices described in this policy.</p>

      <h2 className="text-2xl font-bold mt-8 mb-4 uppercase">Data We Collect</h2>
      <p className='text-[#fff]'>When you use our website and game service, we collect information that helps us enhance your experience:</p>
      <ul className='list-disc pl-8 text-[#fff]'>
        <li><span className="font-bold">Contact Information:</span> We collect your username, email address, and, in some cases, your IP address to identify you and maintain the security of the game.</li>
        <li><span className="font-bold">Message Content:</span> We store the content of messages to process commands and improve game functionality.</li>
        <li><span className="font-bold">Usage Data:</span> We collect information about how you use the game and website to provide statistics and rankings.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4 uppercase">How We Use Your Data</h2>
      <p className='text-[#fff]'>Your information is used for the following purposes:</p>
      <ul className='list-disc pl-8 text-[#fff]'>
        <li><span className="font-bold">Service Improvement:</span> We use data to provide essential features of the game, such as statistics and rankings.</li>
        <li><span className="font-bold">Security:</span> We use your data to prevent misuse of the service and detect fraudulent behavior or cheating.</li>
        <li><span className="font-bold">Support:</span> This helps us provide technical support and resolve any issues that may arise.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4 uppercase">Access to Information</h2>
      <p className='text-[#fff]'>Only the game development team and owner have access to your information. We are committed to keeping it safe and confidential. We will not share or sell your data to third parties.</p>

      <h2 className="text-2xl font-bold mt-8 mb-4 uppercase">Data Deletion</h2>
      <p className='text-[#fff]'>You can request the deletion of your data by joining our support server. Deletion may take up to 48 hours. However, we will retain certain identifiers to prevent abuse by users who have violated our policies or been banned.</p>

      <h2 className="text-2xl font-bold mt-8 mb-4 uppercase">Policy Changes</h2>
      <p className='text-[#fff]'>We may update this policy in the future to reflect changes in our practices. We will notify you of any significant changes and encourage you to review this page regularly. If you have any questions or concerns, please contact us through our support server.</p>

    </div>
  );
};

export default PrivacyPolicy;
