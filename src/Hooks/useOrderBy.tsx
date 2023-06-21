import { IMercadoria } from '../Interfaces/MercadoriaInterface';
import { uri } from '../main';

export const useOrderBy = async () => {
    const result = await fetch(`${uri}/orderby/enquadramento`);
    const data = await result.json();
    return data.value as IMercadoria;
};
