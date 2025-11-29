import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-display font-bold mb-4 text-brand-teal">FNDLY CARE</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your trusted online veterinary partner. We provide safe, reliable, and professional tele-veterinary services to support your pet’s everyday health and well-being.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 uppercase tracking-wide">Contact Us</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><strong>Email:</strong> support@fndlycare.com</li>
              <li><strong>Phone:</strong> +91-7993984190</li>
              <li className="leading-relaxed">
                <strong>Registered Address:</strong><br/>
                H.No 1-100, Main Market Road,<br/>
                Jannaram, Mancherial District,<br/>
                Telangana, 504205, India
              </li>
            </ul>
          </div>

          <div>
             <h4 className="text-lg font-bold mb-4 uppercase tracking-wide">Legal</h4>
             <ul className="space-y-2 text-gray-300 text-sm">
               <li><a href="#compliance" className="hover:text-brand-teal">Privacy Policy</a></li>
               <li><a href="#compliance" className="hover:text-brand-teal">Terms & Conditions</a></li>
               <li><a href="#compliance" className="hover:text-brand-teal">Refund Policy</a></li>
               <li><a href="#compliance" className="hover:text-brand-teal">Cookie Policy</a></li>
             </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 mt-8 text-center">
          {/* CRITICAL FOR AD COMPLIANCE: EXACT LEGAL NAME */}
          <div className="inline-block border-2 border-white/20 px-8 py-4 mb-6 bg-slate-800 rounded-lg">
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Ad Transparency Disclaimer</p>
            <p className="text-base font-bold uppercase tracking-widest text-white">
              Paid for by Fndly Care
            </p>
          </div>
          
          <p className="mt-4 text-xs text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Fndly Care is a registered entity operating from Jannaram, Telangana.
            Disclaimer: Fndly Care provides informational tele-veterinary guidance only. We do not issue prescriptions, perform diagnoses, or replace physical vet examinations. For urgent medical care, always visit a licensed veterinary clinic.
          </p>
          <p className="mt-4 text-xs text-gray-600">
            &copy; {new Date().getFullYear()} Fndly Care. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;