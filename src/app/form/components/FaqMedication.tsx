import React, { useState, useEffect } from "react";
import Image from "next/image";
import { fetchMedicationsQuestions } from "@/app/api/medicationsQuestions";
import { MedicationQuestionsResponse } from "@/app/api/types/medicationsQuestions";
import Loader from "./Loader";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [faqs, setFaqs] = useState<MedicationQuestionsResponse | []>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const toggleAnswer = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  const getQA = async () => {
    try {
      const response = await fetchMedicationsQuestions();
      setFaqs(response);
      setError(false);
    } catch {
      setError(true);
    }
    setLoading(false);
  };
  useEffect(() => {
    getQA();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="shadow-lg rounded-[24px] max-w-xl min-h-[222px] mx-auto pt-8 pr-5 pb-8 pl-5">
      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-gray-200">
          <div
            className="flex justify-between items-center p-4 cursor-pointer"
            onClick={() => toggleAnswer(index)}
          >
            <h3 className="text-[16px] max-w-[80%] text-stepTitle font-larsseitMedium ">
              {faq.question}
            </h3>
            <div className="w-5 h-5">
              {openIndex === index ? (
                <Image
                  src={"/icons/chevronUp.svg"}
                  height={20}
                  width={20}
                  alt="chevronUp"
                />
              ) : (
                <Image
                  src={"/icons/chevronDown.svg"}
                  height={20}
                  width={20}
                  alt="chevronDown"
                />
              )}
            </div>
          </div>
          <div
            className={`transition-max-height duration-500 ease-out overflow-hidden ${
              openIndex === index ? "max-h-96" : "max-h-0"
            }`}
          >
            {openIndex === index && (
              <div className="p-4 text-[12px] font-larsseitRegular text-imageSubtitle">
                {faq.answer}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
