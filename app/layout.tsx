import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/assets/globals.css";
import { APP_DESCRIPTION, APP_NAME, SERVER_URL } from "@/lib/constants";
import { ThemeProvider } from "@/components/shared/theme-provider";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: `%S | ${APP_NAME}`,
    default: `${APP_NAME}`,
  },
  description: APP_DESCRIPTION,
  metadataBase: new URL(SERVER_URL),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
