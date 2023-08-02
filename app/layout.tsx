import { authOptions } from "@/lib/auth";
import "./globals.css";
import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { Inter } from "next/font/google";
import { setSession } from "@/store/session";
import { store } from "@/store";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "N2PMT",
  description: "NextJs, Next-Auth, Prisma, MongoDB, TailwindCSS",
};

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  // ****** Get server side session ******
  const session = await getServerSession(authOptions);

  // ****** Set session - Redux ******
  store.dispatch(setSession(session));

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
