import { Mail, Phone } from 'lucide-react';
import { useState } from 'react';
import { Music } from './Music';

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
    <section className="py-10 px-4 sm:px-6 md:px-8 bg-black/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12">
          To book the best damn dive bar band...
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          <button 
            onClick={() => handleCopy("801-762-7504", false)}
            className="bg-[#2a2422] p-6 sm:p-8 rounded-lg hover:bg-[#332e2b] transition-colors text-left"
          >
            <Phone className="fancy-color w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto mb-4" />
            <h3 className="text-xl sm:text-2xl font-bold mb-2 text-center">Call or Text Dave</h3>
            {phoneCopied && <div className="mb-2 text-sm text-green-500 text-center">Copied!</div>}
            <div className="text-base sm:text-lg text-gray-300 text-center hover:text-[#f59d0e] transition-colors">
              801-762-7504
            </div>
          </button>
          <button 
            onClick={() => handleCopy("honkytonkunderground21@gmail.com", true)}
            className="bg-[#2a2422] p-6 sm:p-8 rounded-lg hover:bg-[#332e2b] transition-colors text-left"
          >
            <Mail className="fancy-color w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto mb-4" />
            <h3 className="text-xl sm:text-2xl font-bold mb-2 text-center">Email Dave</h3>
            {emailCopied && <div className="mb-2 text-sm text-green-500 text-center">Copied!</div>}
            <div className="text-base sm:text-lg text-gray-300 text-center hover:text-[#f59d0e] transition-colors overflow-hidden whitespace-nowrap text-ellipsis">
              honkytonkunderground21@gmail.com
            </div>
          </button>
        </div>
        <div className="py-10">
          <Music title="Sample Our Music" />
        </div>
      </div>
    </section>
  );
}
