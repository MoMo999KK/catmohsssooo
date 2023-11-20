export const metadata = {
  title: 'Ali Shoe',
  description: 'but your shoes from Ali SHoe',
  keywords:"shoes,alishoes"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
