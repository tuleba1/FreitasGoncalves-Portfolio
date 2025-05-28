// src/pages/component/Header.tsx
import Link from 'next/link';

export default function Header() {
    const diagonalOverlay = {
        backgroundImage: 'linear-gradient(to right bottom, black 50%, transparent 50%)',
    };

    return (
        <header className="relative">
            {/* Imagem de fundo cortada */}
            <div className="relative h-[500px] overflow-hidden">
                <img
                    src="/engenheiros.jpg"
                    alt="Engenheiros"
                    className="w-full h-full object-cover"
                    style={{ clipPath: 'polygon(0 0, 80% 0, 100% 100%, 0% 100%)' }}
                />
                {/* Overlay diagonal preto na esquerda */}
                <div className="absolute inset-0" style={diagonalOverlay}></div>
            </div>

            {/* Textos sobrepostos em branco com destaque vermelho */}
            <div className="absolute top-1/5 left-10 max-w-xl text-white pt-[60px]">
                <p className="text-sm text-gray-300">Planejar | Design | Construção</p>
                <h1 className="text-5xl font-bold mt-4 leading-tight">
                    Construir, trabalhar<br />com qualidade
                </h1>
                <p className="mt-4">
                    Somos uma empresa de <span className="text-red-500 font-semibold">construção civil</span>, especializada em transformar <span className="text-red-500 font-semibold">projetos</span> em realidade com <span className="text-red-500 font-semibold">eficiência</span>.
                </p>
                <button className="mt-6 bg-red-600 text-white px-6 py-2">
                    Contate-nos
                </button>
            </div>
        </header>
    );
}