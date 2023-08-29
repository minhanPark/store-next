import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import CartProvider from "./components/CartContext";
import Header from "./components/Header";

import { getCart, clearCart } from "@/api/cart";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cart = await getCart();

  const clearCartAction = async () => {
    "use server";
    return await clearCart();
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider cart={cart}>
          <Header clearCartAction={clearCartAction} />
          <main className="mx-auto max-w-3xl">{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}
