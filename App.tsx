import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Compliance from './components/Compliance';
import Footer from './components/Footer';
import Button from './components/Button';
import hhImage from './assets/Rahul.png';
import { Video, Shield, Phone, Heart, Megaphone, Users, Star, CheckCircle } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      <Header />
      <main className="flex-grow">
        <Hero />
        
        {/* Leadership / About Section - CRITICAL FOR CAMPAIGN VALIDATION */}
        <section id="leadership" className="py-24 bg-white scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
               <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">Leadership & Vision</h2>
               <div className="w-16 h-1 bg-brand-teal mx-auto rounded"></div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
              <div className="w-full md:w-5/12 relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-teal-400 to-orange-400 rounded-2xl opacity-75 blur group-hover:opacity-100 transition duration-1000"></div>
                <img 
                  src={hhImage}
                  alt="Jakku Bhoomesh" 
                  className="relative rounded-2xl shadow-xl w-full object-cover h-[500px] z-10"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg z-20 border-l-4 border-brand-orange">
                  <p className="font-bold text-slate-900 text-lg">Jakku Bhoomesh</p>
                  <p className="text-sm text-brand-teal font-medium uppercase tracking-wide">Managing Director & Candidate</p>
                </div>
              </div>
              
              <div className="w-full md:w-7/12">
                <div className="inline-flex items-center px-4 py-2 bg-orange-50 text-orange-700 rounded-full text-sm font-bold uppercase tracking-widest mb-6 border border-orange-100 shadow-sm">
                  <Megaphone className="w-4 h-4 mr-2" />
                  Official Candidate for Sarpanch • Jannaram
                </div>
                
                <h3 className="text-4xl font-display font-bold text-slate-900 mb-6 leading-tight">
                  The Main Pillar of the <br/>
                  <span className="text-brand-teal">Fndly Care Initiative</span>
                </h3>
                
                <div className="prose prose-lg text-gray-600 mb-8 leading-relaxed">
                  <p className="mb-4">
                    <strong>Jakku Bhoomesh</strong> is the driving force and Managing Director behind Fndly Care. His vision goes beyond just business; it is about creating accessible systems that help the community.
                  </p>
                  <p className="mb-4">
                    With a deep commitment to public service, Jakku Bhoomesh has been nominated for the <strong>Sarpanch elections in Jannaram</strong>. He aims to bring the same level of dedication, transparency, and care to village administration that he has established at Fndly Care.
                  </p>
                  <p>
                     He is the <strong>main pillar</strong> of the Fndly Care initiative, ensuring that our services reach those in need while upholding the highest standards of integrity. Whether it is ensuring the health of your pets or working towards the development of Jannaram, Jakku Bhoomesh stands for progress and friendly service.
                  </p>
                </div>

                {/* ELECTION TRANSPARENCY BLOCK FOR META */}
                <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl mb-8">
                  <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-3">Election Transparency Declaration</h4>
                  <div className="flex flex-col space-y-2">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-brand-teal mr-3" />
                      <span className="text-slate-800 font-medium">Candidate: <span className="font-bold">Jakku Bhoomesh</span></span>
                    </div>
                    <div className="flex items-center">
                       <CheckCircle className="w-5 h-5 text-brand-teal mr-3" />
                       <span className="text-slate-800 font-medium">Contesting For: <span className="font-bold">Sarpanch, Jannaram</span></span>
                    </div>
                    <div className="flex items-center">
                       <CheckCircle className="w-5 h-5 text-brand-teal mr-3" />
                       <span className="text-slate-800 font-medium">Ad Sponsor: <span className="font-bold">Fndly Care (Paid for by Fndly Care)</span></span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                   <div className="flex items-center p-4 bg-slate-50 rounded-lg border border-slate-100">
                     <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-brand-teal mr-4">
                       <Users size={20} />
                     </div>
                     <div>
                       <p className="text-sm font-bold text-slate-900">Community First</p>
                       <p className="text-xs text-gray-500">Dedicated to Jannaram's growth</p>
                     </div>
                   </div>
                   <div className="flex items-center p-4 bg-slate-50 rounded-lg border border-slate-100">
                     <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-brand-orange mr-4">
                       <Star size={20} />
                     </div>
                     <div>
                       <p className="text-sm font-bold text-slate-900">Visionary Leader</p>
                       <p className="text-xs text-gray-500">Founder of Fndly Care</p>
                     </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-slate-50 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">Our Services</h2>
              <p className="text-gray-600">Comprehensive care for your furry friends.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300 border border-gray-100">
                <Video className="w-12 h-12 text-brand-teal mb-6" />
                <h3 className="text-xl font-bold mb-3 text-slate-800">Virtual Consultations</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Connect with experienced veterinary professionals through secure video calls for diet, behavior, and home care.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300 border border-gray-100">
                <Shield className="w-12 h-12 text-brand-teal mb-6" />
                <h3 className="text-xl font-bold mb-3 text-slate-800">Preventive Care</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Vaccination guidance, deworming schedules, lifestyle tips, and grooming advice to keep your pet healthy.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300 border border-gray-100">
                <Phone className="w-12 h-12 text-brand-teal mb-6" />
                <h3 className="text-xl font-bold mb-3 text-slate-800">Emergency Guidance</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Understand immediate steps you can take at home during urgent situations before reaching a hospital.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300 border border-gray-100">
                <Heart className="w-12 h-12 text-brand-teal mb-6" />
                <h3 className="text-xl font-bold mb-3 text-slate-800">Pet Parenting</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Simple, reliable advice tailored for new and experienced pet parents on emotions and nutrition.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-brand-teal text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <h2 className="text-3xl font-display font-bold text-center mb-12">How It Works</h2>
             <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
               <div className="relative">
                 <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
                 <h4 className="font-bold text-lg">Book Consultation</h4>
               </div>
               <div className="relative">
                 <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
                 <h4 className="font-bold text-lg">Connect with Vet</h4>
               </div>
               <div className="relative">
                 <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
                 <h4 className="font-bold text-lg">Get Guidance</h4>
               </div>
               <div className="relative">
                 <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">4</div>
                 <h4 className="font-bold text-lg">Follow Up</h4>
               </div>
             </div>
          </div>
        </section>

        {/* Compliance Section - NOW INLINE FOR TRANSPARENCY */}
        <Compliance />

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-white scroll-mt-20">
           <div className="max-w-3xl mx-auto px-4 text-center">
             <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-dark mb-6">
               Ready to care for your pet?
             </h2>
             <p className="text-xl text-gray-600 mb-10">
               Experience the care and dedication of Fndly Care, led by Jakku Bhoomesh.
             </p>
             <div className="bg-brand-light p-8 rounded-2xl border border-teal-100 inline-block text-left w-full max-w-lg">
               <h3 className="text-xl font-bold text-brand-dark mb-4 text-center">Contact Us</h3>
               <div className="space-y-3 text-sm">
                 <div className="flex items-start text-gray-700">
                   <span className="font-bold w-24 flex-shrink-0">Email:</span>
                   <span>support@fndlycare.com</span>
                 </div>
                 <div className="flex items-start text-gray-700">
                   <span className="font-bold w-24 flex-shrink-0">Phone:</span>
                   <span>+91-9876543210</span>
                 </div>
                 <div className="flex items-start text-gray-700">
                   <span className="font-bold w-24 flex-shrink-0">Address:</span>
                   <span>H.No 1-100, Main Market Road, Jannaram, Mancherial District, Telangana, 504205, India</span>
                 </div>
               </div>
               <div className="mt-8 text-center">
                  <Button variant="accent" fullWidth>Contact Support</Button>
               </div>
             </div>
           </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;