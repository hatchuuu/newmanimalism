
import NavigationBar from "@/components/navigation-bar";
import "./globals.css";
import Footer from "@/components/footer";

export const metadata = {
  title: "Manimalism",
  description: "Search for your favorite anime",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`font-neu antialiased `}>
        <NavigationBar />
        <div className="sm:px-16 sm:pt-24 px-3 pt-16">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
