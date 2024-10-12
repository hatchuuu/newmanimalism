
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
          <div className="px-8 pt-5">
          {children}
          </div>
          <Footer/>
      </body>
    </html>
  );
}
