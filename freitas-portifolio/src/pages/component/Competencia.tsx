export default function Competencia() {
    const kpis = [
        { label: 'Obras concluídas', value: '50+' },
        { label: 'Anos de Experiência', value: '20' },
        { label: 'Clientes satisfeitos', value: '10+' },
    ];

    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <h2 className="text-red-700 font-bold mb-2">Alta competência</h2>
                    <h3 className="text-2xl font-bold mb-4">Serviços em andamento de alta competência</h3>
                    <p className="text-gray-700 mb-6">Texto de apoio sobre competência.</p>
                    <div className="grid grid-cols-3 gap-4">
                        {kpis.map((k, i) => (
                            <div key={i} className="text-center">
                                <div className="text-2xl font-bold">{k.value}</div>
                                <div className="text-gray-600">{k.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <img src="/path/to/construction.jpg" alt="Construção" className="rounded-lg shadow-lg" />
            </div>
        </section>
    );
}
