import { CountedDish } from '../shared/counted-dish.model';

export class Order {
  public id: string;
  public userId: string;
  public name: string;
  public telephone: number;
  public address: string;
  public countedDishes: CountedDish[];
  public guestAmount: number;
  public totalPrice: number;
  public status: string;
  public date: Date

  constructor(
    id: string,
    userId: string,
    name: string,
    telephone: number,
    address: string,
    countedDishes: CountedDish[],
    guestAmount: number,
    totalPrice: number,
    status: string,
    date: Date,
  ) {
    this.id = id;
    this.userId = userId;
    this.name = name;
    this.telephone = telephone;
    this.address = address;
    this.countedDishes = countedDishes;
    this.guestAmount = guestAmount;
    this.totalPrice = totalPrice;
    this.status = status
    this.date = date
  }
}
