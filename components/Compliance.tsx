import React from 'react';
import { ShieldCheck, FileText, Lock, Building, MousePointer } from 'lucide-react';

const Compliance: React.FC = () => {
  return (
    <section id="compliance" className="py-20 bg-gray-50 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">
            Compliance & Privacy Policy
          </h2>
          <p className="text-gray-600">
            Fndly Care strictly follows Meta Advertising Policies, general online platform standards, and veterinary informational guidelines.
          </p>
        </div>

        <div className="grid gap-8">
          
          {/* Ad Transparency */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 border-l-4 border-l-brand-teal">
            <div className="flex items-center mb-6">
              <ShieldCheck className="w-8 h-8 text-brand-teal mr-4" />
              <h3 className="text-xl font-bold text-slate-800">Paid Advertisement Transparency</h3>
            </div>
            <div className="bg-slate-800 text-white p-4 rounded-lg mb-4 text-center">
              <p className="font-bold uppercase tracking-wider">Paid for by Fndly Care</p>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              All promotional materials and advertisements run by our organization include the disclaimer "Paid for by Fndly Care" to ensure full transparency regarding the source of funding and publication.
            </p>
            <div className="p-4 bg-slate-50 rounded-lg text-sm text-slate-700">
               <strong className="block mb-1">Organization Details:</strong>
               Fndly Care is the funding entity for this website and associated advertisements. <br/>
               <strong>Physical Address:</strong> H.No 1-100, Main Market Road, Jannaram, Mancherial District, Telangana, 504205, India.
               <br/><strong>Contact:</strong> support@fndlycare.com | +91-9876543210
            </div>
          </div>

          {/* Election Info */}
           <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
             <div className="flex items-center mb-6">
              <Building className="w-8 h-8 text-brand-dark mr-4" />
              <h3 className="text-xl font-bold text-slate-800">Political & Election Disclosures</h3>
            </div>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="mr-2 text-brand-teal font-bold">•</span>
                <strong>Candidate:</strong> Jakku Bhoomesh
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-brand-teal font-bold">•</span>
                <strong>Office Sought:</strong> Sarpanch, Jannaram
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-brand-teal font-bold">•</span>
                <strong>Filing Location:</strong> Jannaram Election Office
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-brand-teal font-bold">•</span>
                <strong>Declaration:</strong> This website serves as both a service platform for Fndly Care and an informational portal for Jakku Bhoomesh's community initiatives.
              </li>
            </ul>
          </div>

          {/* Data Protection & Cookies - MANDATORY FOR META */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
             <div className="flex items-center mb-6">
              <Lock className="w-8 h-8 text-brand-teal mr-4" />
              <h3 className="text-xl font-bold text-slate-800">Privacy, Cookies & Data Collection</h3>
            </div>
            <p className="text-gray-600 mb-4">
              We protect all user information under standard privacy and data-security practices.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <MousePointer className="w-5 h-5 text-gray-400 mr-3 mt-1" />
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Meta Pixel & Advertising Cookies</h4>
                  <p className="text-sm text-gray-600">
                    This website uses cookies and the <strong>Meta Pixel</strong> to analyze traffic, improve our services, and measure the effectiveness of our advertisements. By using this site, you consent to the use of these tracking technologies for advertising purposes. We use this data to ensure our ads reach the most relevant audience.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Lock className="w-5 h-5 text-gray-400 mr-3 mt-1" />
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Data Collection & Usage</h4>
                  <p className="text-sm text-gray-600">
                    We collect minimal personal information (Name, Email, Phone) only when you voluntarily submit a form for consultation. We do not share this data with third parties without your explicit permission. You may request deletion of your data at any time by contacting support.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Medical Disclaimer */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
             <div className="flex items-center mb-6">
              <FileText className="w-8 h-8 text-brand-orange mr-4" />
              <h3 className="text-xl font-bold text-slate-800">Service Disclaimer</h3>
            </div>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="mr-2 text-brand-teal">•</span>
                We provide <strong>informational tele-veterinary guidance</strong> only.
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-brand-teal">•</span>
                We do <strong>not</strong> issue prescriptions, perform diagnoses, or replace physical vet examinations.
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-brand-teal">•</span>
                For urgent medical care, we always advise visiting a licensed veterinary clinic immediately.
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Compliance;