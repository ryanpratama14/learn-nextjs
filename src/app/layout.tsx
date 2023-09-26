import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";
import { Metadata } from "next";
import Providers from "@/global/providers";

export const metadata: Metadata = {
  title: "Ryan's Next App",
  description: "Generated by create next app",
};
type Props = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Toaster
            toastOptions={{
              className: "font-medium",
            }}
          />
          {children}
        </Providers>
      </body>
    </html>
  );
}
