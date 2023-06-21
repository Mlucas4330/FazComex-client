import { IMercadoria } from "./MercadoriaInterface";

export interface Ioptions {
    order_by: Promise<IMercadoria>;
    sum_local_embarque: Promise<string>;
    sum_condicao_venda: Promise<string>;
    group_by: Promise<IMercadoria>;
    distinct: Promise<IMercadoria>;

    [key: string]: any;
}
