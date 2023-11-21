import { Metadata } from "next";
 import Link from "next/link";

export const metadata: Metadata = {
  title: 'کفش علی ',
  description:
    "باکیفیت  ترین کفشا اینجا ",
    
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  
  return (
    <html lang="en">



      <body className="w-screen h-screen">
  
      <header className="flex gap-4 justify-between w-screen "> 
      <Link href={"/"}>Home</Link>

        <Link href={"/about"}>about</Link>
       <Link href={"/admin"}>admin</Link>
         </header>
         <div className="pt-12">
        
        
        {children}
        </div>
        </body>
    </html>
  );
}
