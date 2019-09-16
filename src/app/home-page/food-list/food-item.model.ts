import { Toppings } from './toppings.interface'

export class FoodItem{
	constructor(
	public id:number,
	public imgPath:string,
  	public name: string, 
    public weight:number,
   	public price:number,
   	public toppings:Toppings[],
   	public description?:string,
   	){}
}