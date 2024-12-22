import Header from "../../shared/components/atoms/icons/Header";
import {SVGBackground, SVGBackgroundM} from "../../shared/components/molecules/SVGBackground";
import { POSITIONS, POSITIONS_M} from "../../shared/constants/position";

import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html className="overflow-hidden">
      <body className="relative w-full h-screen items-center flex flex-col overflow-hidden">
         {POSITIONS.map((position, index) => (
          <SVGBackground key={index} position={position} />
        ))}
          {POSITIONS_M.map((position, index) => (
          <SVGBackgroundM key={index} position={position} />
        ))}
        <Header className="z-10 h-[4rem] w-[50%] mobile:w-[50%] laptop:w-[40%] desktop:w-[20%] mt-20 mb-1" />
        {children}
      </body>
    </html>
  );
}
