// src/app/layout.tsx
import "../styles/globals.css"; // ajuste o caminho se necessário

import TopBar from "../component/TopBar";
import Footer from "../component/Footer";

export const metadata = {
    title: "Freitas Gonçalves",
    description: "Portifolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pt-BR">
            <body>
                <div className="flex flex-col min-h-screen">
                    <TopBar />
                    <main className="flex-grow">{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
