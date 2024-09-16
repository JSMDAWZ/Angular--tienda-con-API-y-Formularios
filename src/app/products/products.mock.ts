export const productsList:Product[]= [
    {id:1, name: 'Lavandina', price: 10, description: 'Lavandina de 1 litro'},
    {id:2, name: 'Detergente', price: 5, description: 'Limpia todo y lo deja con buen olor'},
    {id:3, name: 'Limpia Vidrios', price: 7, description: 'Limpia tus cristales y espejos'},
    {id:4, name: 'Quitagrasa', price: 8},
    {id:5, name: 'Perfumina', price: 2, description: 'Huele rico y dura mucho tiempo'},
]

export interface Product {
    id: number | string;
    name: string;
    price: number;
    description?: string
    
}
    