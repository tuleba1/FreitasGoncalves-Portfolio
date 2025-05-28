export default function Equipe() {
    const team = [
        { name: 'Nome do Colaborador', role: 'Cargo do Colaborador' },
        { name: 'Nome do Colaborador', role: 'Cargo do Colaborador' },
        { name: 'Nome do Colaborador', role: 'Cargo do Colaborador' },
    ];

    return (
        <section className="py-12 bg-gray-100">
            <div className="container mx-auto">
                <h2 className="text-red-700 font-bold mb-2">Equipe</h2>
                <h3 className="text-2xl font-bold mb-8">Time experiente e capacitado</h3>
                <div className="grid md:grid-cols-3 gap-8">
                    {team.map((t, i) => (
                        <div key={i} className="bg-white p-6 rounded shadow hover:shadow-lg transition text-center">
                            <img src="/path/to/person.jpg" alt={t.name} className="w-full h-48 object-cover rounded mb-4" />
                            <h4 className="font-bold">{t.name}</h4>
                            <p className="text-gray-600">{t.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
