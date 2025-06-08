import Sobre from './component/Sobre';
import Servicos from './component/Servicos';
import Competencia from './component/Competencia';
import Equipe from './component/Equipe';
import Hero from './component/Hero';

export default function Home() {
  return (
    <>
      <Hero />
      <Sobre />
      <Servicos />
      <Equipe />
    </>
  );
}