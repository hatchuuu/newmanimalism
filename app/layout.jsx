
import NavigationBar from "@/components/navigation-bar";
import "./globals.css";

export const metadata = {
  title: "Manimalism",
  description: "Search for your favorite anime",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`font-neu antialiased px-8 py-5`}>
        <NavigationBar />
        {children}
      </body>
    </html>
  );
}
