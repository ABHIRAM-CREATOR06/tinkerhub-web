import type { Metadata } from "next";
import { Press_Start_2P, Anton, Playfair_Display, Special_Elite, Caveat, Poppins, Instrument_Serif } from "next/font/google";
import "./globals.css";

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel",
});

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});

const playfairDisplay = Playfair_Display({
  weight: ["700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-playfair",
});

const specialElite = Special_Elite({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-special",
});

const caveat = Caveat({
  weight: ["600", "700"],
  subsets: ["latin"],
  variable: "--font-caveat",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-instrument",
});

export const metadata: Metadata = {
  title: "TinkerHub SNGCE — Student Maker Community",
  description: "Official campus chapter website for TinkerHub SNGCE. Empowering students with hands-on maker culture, study jams, open source, and technology learning in Kerala.",
  keywords: ["TinkerHub", "SNGCE", "Maker Culture", "Study Jam", "Kerala", "Open Source", "Student Community"],
  openGraph: {
    title: "TinkerHub SNGCE — Student Maker Community",
    description: "Everyone has access to the knowledge required to set the course for a better future.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${pressStart2P.variable} ${anton.variable} ${playfairDisplay.variable} ${specialElite.variable} ${caveat.variable} ${poppins.variable} ${instrumentSerif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
