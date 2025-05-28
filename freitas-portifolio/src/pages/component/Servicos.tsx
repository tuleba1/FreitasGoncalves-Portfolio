export default function Servicos() {
    const services = [
        { title: 'Experiência e Expertise', desc: 'Texto de apoio sobre experiência e expertise.', icon: '🛠️' },
        { title: 'Flexibilidade no Atendimento', desc: 'Texto sobre flexibilidade.', icon: '🤝' },
        { title: 'Pintura estratégica', desc: 'Texto sobre pintura estratégica.', icon: '🎨' },
    ];

    return (
        <section id="servicos" className="py-12 bg-gray-100">
            <div className="container mx-auto grid md:grid-cols-3 gap-8">
                {services.map((s, i) => (
                    <div key={i} className="bg-white p-6 rounded shadow hover:shadow-lg transition">
                        <div className="text-3xl mb-4">{s.icon}</div>
                        <h4 className="font-bold text-lg mb-2">{s.title}</h4>
                        <p className="text-gray-600">{s.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
