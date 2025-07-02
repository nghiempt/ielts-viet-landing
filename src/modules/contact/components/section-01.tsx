import React from 'react';

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  details: string[];
}

const ContactCard = ({ icon, title, details }: ContactCardProps) => (
  <div className="bg-white border border-gray-200 py-20 px-10 rounded-lg shadow-sm flex flex-col items-center text-center">
    <div className="bg-gray-100 p-4 rounded-full mb-4">
      {icon}
    </div>
    <h2 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h2>
    {details.map((detail, index) => (
      <p key={index} className="text-gray-600 mb-2 last:mb-0 text-md">
        {detail}
      </p>
    ))}
  </div>
);

const ContactSection01 = () => {
  return (
    <div className="w-full px-5 lg:px-0">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ContactCard
          icon={
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          }
          title="Địa chỉ"
          details={['Cơ sở 1: 106 Nguyễn Minh Quang, P. Tân An, TP. Cần Thơ', 'Cơ sở 2: 172C Nguyễn Tri Phương, P. Tân An, TP. Cần Thơ']} />
        <ContactCard
          icon={
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          }
          title="Email"
          details={['thayhauieltsct@gmail.com', '']} />
        <ContactCard
          icon={
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          }
          title="Điện thoại"
          details={['0939.217.718']} />
      </div>
    </div>
  );
};

export default ContactSection01;