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
    { question: "How do I place an order?", answer: "To place an order, simply add items to your cart and proceed to checkout." },
    { question: "What payment methods do you accept?", answer: "We accept credit cards, PayPal, and bank transfers." },
    { question: "How long does shipping take?", answer: "Shipping typically takes 3-5 business days within the country." },
    { question: "Can I return an item?", answer: "Yes, you can return items within 30 days of purchase." },
    { question: "Do you offer international shipping?", answer: "Yes, we ship to most countries worldwide." },
    { question: "How can I track my order?", answer: "You'll receive a tracking number via email once your order ships." },
    { question: "Are your products guaranteed?", answer: "Yes, all our products come with a 1-year warranty." },
    { question: "Do you have a physical store?", answer: "We are an online-only store at the moment." },
    { question: "How do I contact customer support?", answer: "You can reach us via email or phone listed on our Contact page." },
    { question: "Do you offer gift wrapping?", answer: "Yes, gift wrapping is available for a small additional fee." },
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
