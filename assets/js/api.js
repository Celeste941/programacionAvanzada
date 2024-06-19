const llamarJson = 'animales.json';

export const obtenerAnimales = async () => {
    try {
      const response = await fetch(llamarJson);
      const data = await response.json();

      if (!response.ok) {
        throw new Error('Hay un error en la llamada de la api ');
      }
      
      return data.animales;
    } catch (error) {
      console.error("Hay un error en la llamada de la api ", error);
    }
  };
  