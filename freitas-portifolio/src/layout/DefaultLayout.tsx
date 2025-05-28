// src/layouts/DefaultLayout.tsx
import TopBar from "../../src/pages/component/TopBar"; // Use @/ para referenciar a raiz do src
import Header from "../../src/pages/component/Header";
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