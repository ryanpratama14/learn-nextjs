import "../styles/globals.css";
import { Toaster } from "react-hot-toast";
import { Montserrat } from "next/font/google";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ryan's Next App",
  description: "Generated by create next app",
};

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props): React.JSX.Element {
  return (
    <html lang="en" className={montserrat.className}>
      <body>
        <Toaster
          toastOptions={{
            className: "font-medium",
          }}
        />
        {children}
      </body>
    </html>
  );
}
