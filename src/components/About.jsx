import aboutSvg from '../assets/about.svg';
import megportrait from "../assets/megportrait.svg";
import SectionTitle from './SectionTitle';
const About = () => {
  return (
    <section className='bg-white py-20' id='about'>
      <div className='align-element grid  md:grid-cols-2 items-center gap-16'>
        {/* <img src={aboutSvg} className='w-full h-64' /> */}
        <article>
          <SectionTitle text='About' />
          <p className='text-slate-600 mt-8 leading-loose'>
            Meg Sharma is a senior research engineer at the Cleveland Clinic,
            specializing in machine learning applications in healthcare. She has
            degrees in neuroscience, electrical engineering, translational
            research and computer science. She has worked as a electrical engineer 
            for a biomedical device startup and as the lead data scientist 
            for Health Canada.
             
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;