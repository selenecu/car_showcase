import Image from 'next/image';
import  Hero from '../components/Hero';
import { SearchBar } from '@/components';
import CustomFilter from '@/components/CustomFilter';
export default function Home() {
  return (
    <main 
    className="overflow-hidden">
      <Hero/>

      <div className="mt-12 padding-x max-width" id='discover'>
      <div className="home__text-container">
        <h1 className="text-4xl font-extrabold"> CATALAGO </h1>
        <p> Explora nuestros modelos</p>
      </div>
      <div className='home__filters'>
        <SearchBar/>
        <div className='home__filter-container'>
          <CustomFilter title="Modelo"/>
          </div>
      </div>
      </div>
      
    </main>
  );
}
