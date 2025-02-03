import { IQuestions, IStepFiveData } from "./types/interfases";

export const stepOneFormData: IQuestions = {
  checkbox1: {
    label: "Dolor repentino y/o enrojecimiento",
    id: "checkbox1",
    isChecked: false,
    text: "",
  },
  checkbox2: {
    label: "Caspa",
    id: "checkbox2",
    isChecked: false,
    text: "",
  },
  checkbox3: {
    label: "Quemadura de sol",
    id: "checkbox3",
    isChecked: false,
    text: "",
  },
  checkbox4: {
    label: "Otro",
    id: "checkbox4",
    isChecked: false,
    text: "",
  },
  checkbox5: {
    label: "No, ninguno de los anteriores",
    id: "checkbox5",
    isChecked: false,
    text: "",
  },
};

export const stepTwoFormData: IQuestions = {
  checkbox1: {
    label: "No",
    id: "checkbox1",
    isChecked: false,
    text: "",
  },
  checkbox2: {
    label: "Si",
    id: "checkbox2",
    isChecked: false,
    text: "",
  },
  checkbox3: {
    label: "No estoy seguro",
    id: "checkbox3",
    isChecked: false,
    text: "",
  },
};

export const stepThreeFormData: IQuestions = {
  checkbox1: {
    label: "Cáncer de mama",
    id: "checkbox1",
    isChecked: false,
    text: "",
  },
  checkbox2: {
    label: "Cáncer de próstata",
    id: "checkbox2",
    isChecked: false,
    text: "",
  },
  checkbox3: {
    label: "Presión arterial baja incontrolada",
    id: "checkbox3",
    isChecked: false,
    text: "",
  },
  checkbox4: {
    label: "Otras enfermedades autoinmunes o reumáticas",
    id: "checkbox4",
    isChecked: false,
    text: "",
  },
  checkbox5: {
    label: "Problemas de tiroides",
    id: "checkbox5",
    isChecked: false,
    text: "",
  },
  checkbox6: {
    label: "Enfermedades del corazón",
    id: "checkbox6",
    isChecked: false,
    text: "",
  },
  checkbox7: {
    label: "Enfermedades de riñón o hígado",
    id: "checkbox7",
    isChecked: false,
    text: "",
  },
  checkbox8: {
    label: "No, ninguna de las anteriores",
    id: "checkbox8",
    isChecked: false,
    text: "",
  },
};

export const stepFourFormData: IQuestions = {
  checkbox1: {
    label: "Depresión",
    id: "checkbox1",
    isChecked: false,
    text: "",
  },
  checkbox2: {
    label: "Desorden de bipolaridad",
    id: "checkbox2",
    isChecked: false,
    text: "",
  },
  checkbox3: {
    label: "Ansiedad",
    id: "checkbox3",
    isChecked: false,
    text: "",
  },
  checkbox4: {
    label: "Ataques de pánico",
    id: "checkbox4",
    isChecked: false,
    text: "",
  },
  checkbox5: {
    label: "Desorden de estrés postraumático",
    id: "checkbox5",
    isChecked: false,
    text: "",
  },
  checkbox6: {
    label: "Esquizofrenia",
    id: "checkbox6",
    isChecked: false,
    text: "",
  },
  checkbox7: {
    label: "No, ninguno de los anteriores",
    id: "checkbox7",
    isChecked: false,
    text: "",
  },
};

export const stepFiveFormData: IStepFiveData = {
  minoxidilCapsulas: {
    title: "Minoxidil® Cápsulas",
    subTitle:
      "Dutasterida 0.1% + Minoxidil 5 % + Tretinoína 1% + Hidrocortisona 1%",
    img: "/images/minoxidilCapsulas.png",
  },
  dutasterideCapsulas: {
    title: "DUTAXIDIL® Cápsulas",
    subTitle: "Dutasterida 0.5 mg + Minoxidil 2.5 mg + Biotina 2.5 mg",
    img: "/images/dutaxtedilCapsulas.png",
  },
  dutasterideGel: {
    title: "DUTAXIDIL® Gel",
    subTitle:
      "Dutasterida 0.1% + Minoxidil 5 % + Tretinoína 1% + Hidrocortisona 1%",
    img: "/images/dutaxtedilCapsulas.png",
  },
};
