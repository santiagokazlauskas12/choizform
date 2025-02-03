export interface IStepData {
  label: string;
  id: string;
  isChecked: boolean;
  text: string;
}

export interface IQuestions {
  [key: string]: IStepData;
}

export interface IMedicamento {
  title: string;
  subTitle: string;
  img: string;
}

export interface IStepFiveData {
  minoxidilCapsulas: IMedicamento;
  dutasterideCapsulas: IMedicamento;
  dutasterideGel: IMedicamento;
}
