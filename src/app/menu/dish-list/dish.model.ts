import { Toppings } from './toppings.interface';

export class Dish {
  public id: string;
  public imgPath: string;
  public name: string;
  public weight: number;
  public price: number;
  public toppings: Toppings[];
  public category:string;
  public description?: string;
  public available:boolean;

  constructor(
    id: string,
    category:string,
    imgPath: string,
    name: string,
    description: string,
    weight: number,
    price: number,
    toppings: Toppings[],
    available:boolean
  ) {
    this.id = id;
    this.category = category;
    this.imgPath = imgPath;
    this.name = name;
    this.description = description;
    this.weight = weight;
    this.price = price;
    this.toppings = toppings;
    this.available = available;
  }
}
