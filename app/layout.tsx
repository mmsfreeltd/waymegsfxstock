import { ThemeProvider } from '@/context/ThemeContext';
import type { Metadata } from 'next';
// import { Geist, Geist_Mono } from "next/font/google";
import './globals.css';
import { Toaster } from 'sonner';
import Script from 'next/script';
import { LIVE_CHAT, SITE_NAME } from '@/global/constants';

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: `${SITE_NAME} `,
  description: `Licensed and Regulated Forex and Cryptocurrency Broker, Powerful platforms for trading both on real and demo accounts`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
      // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
        <Script
          id="custom-inline-script"
          dangerouslySetInnerHTML={{ __html: LIVE_CHAT }}
        />
      </body>
    </html>
  );
}
