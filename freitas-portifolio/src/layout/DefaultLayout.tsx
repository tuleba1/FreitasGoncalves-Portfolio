import TopBar from "../../src/pages/component/TopBar"; 
import Header from "../pages/component/Hero";
import Footer from "../../src/pages/component/Footer";

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col min-h-screen">
            <TopBar />
            <main className="flex-grow">{children}</main>
            <Footer />
        </div>
    );
}