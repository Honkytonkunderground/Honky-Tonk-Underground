import { Mail, Phone } from 'lucide-react';
import { useState } from 'react';

export function Booking() {
  const [emailCopied, setEmailCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);
  
  const handleCopy = (text: string, isEmail: boolean) => {
    navigator.clipboard.writeText(text);
    if (isEmail) {
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } else {
      setPhoneCopied(true);
      setTimeout(() => setPhoneCopied(false), 2000);
    }
  };

  return (
    <section className="py-20 px-4 md:px-8 bg-black/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">To book the best damn dive bar band!</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <button 
            onClick={() => handleCopy("honkytonkunderground21@gmail.com", true)}
            className="bg-[#2a2422] p-8 rounded-lg hover:bg-[#332e2b] transition-colors text-left"
          >
            <Mail className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2 text-center">Email Us</h3>
            <div className="text-lg text-gray-300 text-center hover:text-[#f59d0e] transition-colors">
              honkytonkunderground21@gmail.com
              {emailCopied && <span className="ml-2 text-sm text-green-500">Copied!</span>}
            </div>
          </button>
          <button 
            onClick={() => handleCopy("801-762-7504", false)}
            className="bg-[#2a2422] p-8 rounded-lg hover:bg-[#332e2b] transition-colors text-left"
          >
            <Phone className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2 text-center">Call or Text Dave</h3>
            <div className="text-lg text-gray-300 text-center hover:text-[#f59d0e] transition-colors">
              801-762-7504
              {phoneCopied && <span className="ml-2 text-sm text-green-500">Copied!</span>}
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}