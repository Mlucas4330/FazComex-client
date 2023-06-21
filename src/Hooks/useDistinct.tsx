import { IMercadoria } from '../Interfaces/MercadoriaInterface';
import { uri } from '../main';

export const useDistinct = async () => {
    const result = await fetch(`${uri}/distinct`);
    const data = await result.json();
    return data.value as IMercadoria;
};
