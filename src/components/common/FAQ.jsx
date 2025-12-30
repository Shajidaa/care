import React, { useState } from "react";

const FAQ = () => {
  const [openItems, setOpenItems] = useState({});

  const faqData = [
    {
      id: 1,
      question: "How quickly can you start care?",
      answer: "We can typically arrange care within 24-48 hours for routine needs, and same-day for urgent situations."
    },
    {
      id: 2,
      question: "Do you accept insurance?",
      answer: "Yes, we work with most major insurance providers. Contact us to verify your coverage."
    },
    {
      id: 3,
      question: "Are your caregivers licensed?",
      answer: "All our caregivers are licensed, bonded, and undergo thorough background checks and training."
    },
    {
      id: 4,
      question: "What areas do you serve?",
      answer: "We provide services throughout the metropolitan area. Contact us to confirm availability in your location."
    },
    {
      id: 5,
      question: "What types of care do you provide?",
      answer: "We offer personal care, companionship, medication management, meal preparation, light housekeeping, and specialized care for conditions like dementia."
    },
    {
      id: 6,
      question: "How do you ensure quality of care?",
      answer: "We conduct regular quality assessments, maintain open communication with families, and have a 24/7 support line for any concerns."
    }
  ];

  const toggleItem = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div>
      {/* FAQ Section */}
      <div className="mt-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[var(--color-secondary)] dark:text-[var(--color-primary)] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Quick answers to common questions about our care services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqData.map((item) => (
            <div 
              key={item.id}
              className="bg-white dark:bg-gray-800 shadow-lg border border-[var(--color-primary)]/20 dark:border-[var(--color-primary)]/30 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-[var(--color-primary)]/40"
            >
              <div 
                className="p-0 cursor-pointer"
                onClick={() => toggleItem(item.id)}
              >
                <div className="flex items-center justify-between p-6 hover:bg-[var(--color-primary)]/5 dark:hover:bg-[var(--color-primary)]/10 transition-colors duration-200">
                  <h3 className="font-semibold text-lg text-[var(--color-secondary)] dark:text-[var(--color-primary)] pr-4">
                    {item.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <svg
                      className={`w-6 h-6 text-[var(--color-secondary)]/70 dark:text-[var(--color-primary)]/70 transition-transform duration-300 ${
                        openItems[item.id] ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openItems[item.id] 
                      ? 'max-h-96 opacity-100' 
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6">
                    <div className="border-t border-[var(--color-primary)]/20 dark:border-[var(--color-primary)]/30 pt-4">
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
