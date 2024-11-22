import { Poem } from "../types/poems";

type ReturnGetPoems = Poem[] | null;

export const getPoems = async (): Promise<ReturnGetPoems> => {
  try {
    const response = await fetch("https://poetrydb.org/poemcount/20");
    if (!response.ok) {
      throw new Error("Error al obtener los datos de la API");
    }
    const data: Poem[] = await response.json();
    return data;
  } catch (error) {
    console.error("Error en getPoems:", error);
    return null;
  }
};


