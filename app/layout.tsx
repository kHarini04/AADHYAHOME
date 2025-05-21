 import './globals.css';
 
export const metadata = {
  title: 'Aadhaya - Explore the World',
  description: 'Tailor-made travel experiences for unforgettable journeys.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#F5F5F5] text-gray-800">
        {children}
      </body>
    </html>
  );
}
