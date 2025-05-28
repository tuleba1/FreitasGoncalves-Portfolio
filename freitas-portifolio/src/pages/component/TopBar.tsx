// src/pages/component/TopBar.tsx
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function TopBar() {
    const [isMobile, setIsMobile] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const { pathname } = useRouter();

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="fixed top-2 left-0 w-full z-50 flex items-center justify-between">
            {/* Container da Logo (Vermelho, Metade da Tela - Alinhado à direita) */}
            <div className="bg-red-600 flex items-center justify-end w-1/3 py-4 md:py-6 pr-6 shadow-xl"> {/* Alinhado à direita com padding */}
                <Link href="/" className="flex items-center space-x-2">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                        {/* Placeholder para a Logo */}
                        <span className="text-red-600 font-bold text-xl">FG</span>
                    </div>
                    <div className="text-white leading-none text-right"> {/* Texto alinhado à direita */}
                        <p className="text-sm">FREITAS GONÇALVES</p>
                        <p className="text-lg font-bold">Construções</p>
                    </div>
                </Link>
            </div>

            {/* Container da Navegação (Branco, 1/3 da Tela à Direita - Arredondamento sutil) */}
            <nav className={`hidden md:flex justify-center items-center bg-white shadow-md py-3 w-1/3 rounded-sm shadow-xl`}> {/* Arredondamento mais sutil */}
                <div className="space-x-6">
                    <Link href="/" className={`text-gray-800 hover:text-red-600 transition duration-200 ${pathname === '/' ? 'font-semibold text-red-600' : ''}`}>Home</Link>
                    <Link href="#sobre" className={`text-gray-800 hover:text-red-600 transition duration-200 ${pathname.includes('#sobre') ? 'font-semibold text-red-600' : ''}`}>Sobre</Link>
                    <Link href="#servicos" className={`text-gray-800 hover:text-red-600 transition duration-200 ${pathname.includes('#servicos') ? 'font-semibold text-red-600' : ''}`}>Serviços</Link>
                    {/* Adicione outros links aqui */}
                </div>
            </nav>

            {/* Menu Mobile (Visível em telas menores) */}
            {isMobile && (
                <button onClick={toggleMenu} className="text-gray-600 hover:text-red-600 focus:outline-none absolute top-1/2 right-4 transform -translate-y-1/2">
                    <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                        {menuOpen ? (
                            <path fillRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829z" clipRule="evenodd" />
                        ) : (
                            <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" clipRule="evenodd" />
                        )}
                    </svg>
                </button>
            )}

            {/* Menu Mobile Aberto */}
            {isMobile && menuOpen && (
                <div className="bg-white py-2 px-4 shadow-md absolute top-full left-0 w-full z-10">
                    <Link href="/" onClick={() => setMenuOpen(false)} className={`block py-2 text-gray-800 hover:text-red-600 transition duration-200 ${pathname === '/' ? 'font-semibold text-red-600' : ''}`}>Home</Link>
                    <Link href="#sobre" onClick={() => setMenuOpen(false)} className={`block py-2 text-gray-800 hover:text-red-600 transition duration-200 ${pathname.includes('#sobre') ? 'font-semibold text-red-600' : ''}`}>Sobre</Link>
                    <Link href="#servicos" onClick={() => setMenuOpen(false)} className={`block py-2 text-gray-800 hover:text-red-600 transition duration-200 ${pathname.includes('#servicos') ? 'font-semibold text-red-600' : ''}`}>Serviços</Link>
                </div>
            )}
        </div>
    );
}