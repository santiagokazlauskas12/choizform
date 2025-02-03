import { IMedicationQuestion } from "./types/medicationsQuestions";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const fetchMedicationsQuestions = async (): Promise<
  IMedicationQuestion[]
> => {
  if (!apiUrl) {
    throw new Error("API URL is not defined in the environment variables");
  }
  try {
    const res = await fetch(apiUrl);

    if (!res.ok) {
      throw new Error("Error fetching Medications Questions");
    }

    const data: IMedicationQuestion[] = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
