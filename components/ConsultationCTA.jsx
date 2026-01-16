import React, { useState } from 'react';

const ConsultationCTA = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
        // Simulate API call
        setTimeout(() => {
            setSubmitted(true);
        }, 800);
    }
  };

  return (
    <section className="bg-slate-900 py-24 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
         <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
           <path d="M0 100 L100 0 L100 100 Z" fill="white" />
         </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          Ready to Switch to Clean Energy?
        </h2>
        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
          Get a detailed, custom proposal for your home. Our solar experts are ready to answer all your questions.
        </p>

        {submitted ? (
             <div className="bg-emerald-500/20 border border-emerald-500/50 text-emerald-300 p-6 rounded-xl animate-fade-in">
                <h3 className="text-2xl font-bold mb-2">Request Received!</h3>
                <p>We'll be in touch with you shortly at <span className="font-semibold text-white">{email}</span>.</p>
             </div>
        ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center items-stretch max-w-lg mx-auto">
            <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 appearance-none rounded-lg py-4 px-6 text-slate-900 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-lg shadow-xl"
            />
            <button
                type="submit"
                className="cta-green-btn bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-4 px-8 rounded-lg shadow-lg transform transition hover:-translate-y-1 hover:shadow-emerald-500/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-emerald-500 text-lg whitespace-nowrap"
            >
                Get Free Quote
            </button>
            </form>
        )}
        
        <p className="mt-6 text-sm text-slate-400">
          No commitment required. 100% free consultation.
        </p>
      </div>
    </section>
  );
};

export default ConsultationCTA;
