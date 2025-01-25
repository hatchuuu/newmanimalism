
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
      <body className={`font-neu antialiased min-h-screen flex flex-col bg-slate-900`}>
        <NavigationBar />
        <div className="sm:px-16 sm:pt-24 px-3 pt-[4.5rem] flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
