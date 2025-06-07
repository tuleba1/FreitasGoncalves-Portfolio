import Sobre from '../../src/pages/component/Sobre';
import Servicos from '../../src/pages/component/Servicos';
import Competencia from '../../src/pages/component/Competencia';
import Equipe from '../../src/pages/component/Equipe';
import Header from './component/Header';

export default function Home() {
  return (
    <>
      <Header />
      <Sobre />
      <Servicos />
      <Equipe />
    </>
  );
}