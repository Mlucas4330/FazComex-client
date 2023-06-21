import { uri } from '../main';

export const useSum = async (param: string) => {
    const result = await fetch(`${uri}/sum/${param}`);
    const data = await result.json();
    return data.value as string;
};
