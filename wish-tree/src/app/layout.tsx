"use client";

import Header from "../../shared/components/atoms/icons/Header";
import { SVGBackground, SVGBackgroundM } from "../../shared/components/molecules/SVGBackground";
import { POSITIONS, POSITIONS_M } from "../../shared/constants/position";
import "./globals.css";
import useSoundPlayer from "../../shared/hooks/useSoundPlayer";
import { Provider } from 'react-redux';
import Store from "../../shared/redux/Store";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import SoundOn from "../../shared/components/atoms/icons/SoundOn";
import SoundOff from "../../shared/components/atoms/icons/SoundOff";
import CustomButton from "../../shared/components/atoms/CustomButton";

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isPlaying, togglePlay } = useSoundPlayer("/sounds/bgm.mp3");

  const refresh = () => {
    window.location.reload()
}
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={Store}>
        <html className="overflow-hidden">
          <body className="relative w-full h-screen items-center flex flex-col overflow-hidden">
            {POSITIONS.map((position, index) => (
              <SVGBackground key={index} position={position} />
            ))}
            {POSITIONS_M.map((position, index) => (
              <SVGBackgroundM key={index} position={position} />
            ))}
            <div className="absolute end-0 m-2 cursor-pointer" onClick={togglePlay}>
              {isPlaying ? (
                <SoundOn className="w-8 h-8" />
              ) : (
                <SoundOff className="w-8 h-8" />
              )}
             </div>
             <CustomButton className="absolute start-0 m-4" handleClick={refresh}>새로고침</CustomButton>
            <Header className="z-10 h-[4rem] w-[50%] mobile:w-[50%] laptop:w-[40%] desktop:w-[20%] mt-20 mb-1" />
            {children}
          </body>
        </html>
      </Provider>
    </QueryClientProvider>
  );
}
