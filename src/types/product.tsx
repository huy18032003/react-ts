export interface IProduct{
    id: number,
    name: string,
    price: number,
    image: string,
    description:string,
    categoryId: number
}
export interface IProps {
    products: IProduct[],
}