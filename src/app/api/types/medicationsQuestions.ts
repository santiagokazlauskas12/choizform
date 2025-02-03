export interface IMedicationQuestion {
  id: string;
  question: string;
  answer: string;
}

export interface MedicationQuestionsResponse {
  response: IMedicationQuestion[];
}
