export default function Sobre() {
    return (
        <section id="sobre" className="py-12 bg-white">
            <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
                <div className="relative">
                    <img src="/path/to/engenheiro.jpg" alt="Engenheiro" className="rounded-lg shadow-lg" />
                    <div className="absolute bottom-4 right-4 bg-red-700 text-white py-1 px-3 rounded">
                        10 anos de experiência
                    </div>
                </div>
                <div>
                    <h2 className="text-red-700 font-bold mb-2">Sobre Nós</h2>
                    <h3 className="text-2xl font-bold mb-4">Sempre ter o melhor serviço mais adequado para o cliente</h3>
                    <p className="text-gray-700 mb-4">
                        Texto breve sobre a empresa e a garantia de satisfação do cliente...
                    </p>
                    <button className="bg-red-700 hover:bg-red-800 text-white py-2 px-4 rounded">Contate-nos</button>
                </div>
            </div>
        </section>
    );
}
