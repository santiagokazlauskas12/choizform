"use client";
import React from "react";
import Header from "../components/Header";
import { FormProvider } from "@/app/context/FormContext";
import { useParams } from "next/navigation";

interface FormLayoutProps {
  children: React.ReactNode;
}

const FormLayout = ({ children }: FormLayoutProps) => {
  const params = useParams();
  const { formId } = params;
  return (
    <FormProvider>
      <div className="w-full min-h-screen flex flex-col items-center p-4 bg-white-100">
        <Header step={Number(formId)} />
        {children}
      </div>
    </FormProvider>
  );
};

export default FormLayout;
