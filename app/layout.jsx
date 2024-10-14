import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import  PageTransition  from "@/components/PageTransition";
import  StairTransition  from "@/components/StairTransition"; 

import Header from "@/components/Header";
// Adding font weights from 100 to 800 and enabling the variable font
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],  // Subsets of the font, in this case, Latin
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],  // Font weights from 100 to 800
  variable: "--font-jetbrains-mono",  // Defining the CSS variable name for the font
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={jetbrainsMono.variable}
      >
        <Header />
        <StairTransition />
        <PageTransition>
          {children}
        </PageTransition>
        
      </body>
    </html>
  );
}
