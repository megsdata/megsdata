import CasesCard from '../components/CasesCard';
import { cases } from '../assets/data';
import SectionTitle from '../components/SectionTitle';
const Cases = () => {
  return (
    <section className='py-20 align-element' id='cases'>
      <SectionTitle text='Case Work' />
      <div className='py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8'>
        {cases.map((casew) => {
          return <CasesCard key={casew.id} {...casew} />;
        })}
      </div>
    </section>
  );
};
export default Cases

