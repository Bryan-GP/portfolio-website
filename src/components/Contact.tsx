interface ContactSectionProps {
  linkedIn: string;
}

export const ContactSection = ({ linkedIn }: ContactSectionProps) => {
  return (
    <section id="contact" className="max-w-2xl mx-auto text-center">
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-8
        border border-slate-200 dark:border-slate-700
        bg-gradient-to-b from-slate-50 to-white 
        dark:from-slate-800 dark:to-slate-900">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-4">
          Get in Touch
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mb-6">
          Interested in working together? Let's connect and discuss your next project!
        </p>
        <div className="flex justify-center gap-4">
          
          <a 
            href={linkedIn} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="button-secondary"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}; 