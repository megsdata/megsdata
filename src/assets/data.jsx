import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact } from 'react-icons/fa';

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#cases', text: 'Projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'Computational Genomics',
    icon: <FaReact className='h-16 w-16 text-indigo-500' />,
    text: 'Next generation sequencing processing, including single cell RNAseq, bulk RNAseq, spatial transcriptomics',
  },
  {
    id: nanoid(),
    title: 'Machine Learning',
    icon: <FaReact className='h-16 w-16 text-indigo-500' />,
    text: 'Tensorflow and PyTorch pipelines',
  },
  {
    id: nanoid(),
    title: 'Data Trending and Visualization',
    icon: <FaReact className='h-16 w-16 text-indigo-500' />,
    text: 'PowerBI, Tableau, Cognos',
  },
];

export const cases = [
  {
    id: nanoid(),
    img: 'https://upload.wikimedia.org/wikipedia/commons/7/79/Ventricular_Septal_Defect.jpg',
    url: 'https://en.wikipedia.org/wiki/Echocardiography',
    github: 'https://github.com/',
    title: 'Feature Extraction from Echocardiography Videos',
    text: 'Use of Vision Transformers as an alternative to 2D-CNNs; in collaboration with Cleveland Clinic.',
  },
  {
    id: nanoid(),
    img: 'https://www.thedailyexp.com/wp-content/uploads/2020/08/126383_VerA_1SHT-2.jpg',
    url: 'https://en.wikipedia.org/wiki/Death_on_the_Nile',
    github: 'https://github.com/',
    title: 'second project',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },

];
