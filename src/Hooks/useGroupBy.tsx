import { IMercadoria } from '../Interfaces/MercadoriaInterface';
import { uri } from '../main';

export const useGroupBy = async () => {
    const result = await fetch(`${uri}/groupby`);
    const data = await result.json();
    return data.value as IMercadoria;
};
