import React from 'react';
import Button from './Button';
import { Award } from 'lucide-react';
import hhImg from '../assets/OIP.jpg';
const Hero: React.FC = () => {
  return (
    <div className="relative bg-brand-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 flex flex-col-reverse md:flex-row items-center">
        
        <div className="w-full md:w-1/2 mt-12 md:mt-0 z-10">
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="inline-flex items-center py-1 px-3 rounded-full bg-teal-100 text-brand-teal text-xs font-bold uppercase tracking-widest">
              Online Veterinary Platform
            </span>
            <span className="inline-flex items-center py-1 px-3 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-widest">
              <Award className="w-3 h-3 mr-1" />
              Led by Jakku Bhoomesh
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 leading-tight mb-6">
            Expert Vet Care <br/>
            <span className="text-brand-teal">From Home.</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 font-light leading-relaxed max-w-lg">
            Speak to qualified veterinary professionals via secure video call. An initiative dedicated to community welfare and animal health.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button variant="accent" onClick={() => window.location.hash = '#contact'}>Book Consultation</Button>
            <Button variant="outline" onClick={() => window.location.hash = '#leadership'}>Meet Our Leader</Button>
          </div>
        </div>

        <div className="w-full md:w-1/2 relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl transform md:rotate-2 hover:rotate-0 transition-all duration-500">
             <img 
              src={hhImg}
              alt="Happy dog with vet" 
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
          {/* Decorative Blob */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-teal/20 rounded-full blur-3xl -z-10"></div>
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-brand-orange/20 rounded-full blur-3xl -z-10"></div>
        </div>

      </div>
    </div>
  );
};

export default Hero;