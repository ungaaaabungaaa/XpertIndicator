'use client'

import React from 'react'
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { useTheme } from "next-themes";

const FAQPage = () => {
  const { theme, setTheme } = useTheme(); // Access current theme and theme setter

  // Define itemClasses based on the current theme
  const itemClasses =
   {
     base: "text-white",
      title: "text-white",
      content: "text-white",
      trigger: "text-white",
   }
   


   const faqItems = [
    { question: "What is the 40x Challenge?", answer: "The 40x Challenge is a copy trading plan where you aim for 1% profit every month, with no fees or commissions." },
    { question: "How do I join the 40x Challenge?", answer: "Simply deposit funds into your account, and start copy trading with our expert traders." },
    { question: "Are there any fees involved?", answer: "No, there are no fees or commissions. You only pay for your initial deposit." },
    { question: "Can I track my performance?", answer: "Yes, you can monitor your profits and trades in real time through your account dashboard." },
    { question: "Do I need any prior trading experience?", answer: "No prior experience is needed. Just deposit funds and let our system handle the trading." },
    { question: "How can I withdraw my profits?", answer: "You can withdraw your profits anytime by requesting a transfer to your account." },
    { question: "What kind of support do you offer?", answer: "We offer email support and access to dedicated Telegram and WhatsApp groups for assistance." },
    { question: "Is my money safe?", answer: "Yes, your funds remain in your account, and you have full control over them at all times." },
    { question: "How often will I receive trading updates?", answer: "You will receive real-time updates for 5 trades daily, along with price alerts for selected cryptocurrencies." },
    { question: "Can I cancel my participation?", answer: "Yes, you can stop copy trading and withdraw your funds at any time." }
  ];

  return (
    <div className="flex items-center ">
      <div className="container mx-auto px-4">
        <div className="flex justify-between mb-6">
          <h1 className="text-4xl font-bold text-white">
            Frequently Asked Questions
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1">
            <p className="text-lg text-white">
              Find answers to our most commonly asked questions below.
            </p>
          </div>
          <div className="col-span-1">
            <Accordion itemClasses={itemClasses}>
              {faqItems.slice(0, 5).map((item, index) => (
                <AccordionItem
                  key={index}
                  aria-label={item.question}
                  title={item.question}
                >
                  {item.answer}
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="col-span-1">
            <Accordion itemClasses={itemClasses}>
              {faqItems.slice(5, 10).map((item, index) => (
                <AccordionItem
                  key={index + 5}
                  aria-label={item.question}
                  title={item.question}
                >
                  {item.answer}
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
