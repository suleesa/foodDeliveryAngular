import { FoodItem } from './food-item.model'


export class FoodListService{

private	soups:FoodItem[] = [

  {id:1,
    imgPath:'assets/img/finnishFishSoup.png',
    name: 'Финская уха с лососем и судаком',
    description:'Лосось, судак, картофель, томаты и сливки.',
    weight:350,
    price:380,
    toppings:
      [{ name:'укроп',
       price:30,
         },
     { name:'петрушка',
       price: 30,
         },
     { name:'сметана',
       price: 50,
         },
     { name:"сухарики из ржаного хлеба",
       price: 30,
         },
     { name:"сухарики из белого хлеба",
       price: 50,
     }
     ],
   },
   {id:2,
    imgPath:'assets/img/lagman.png',
    name: 'Лагман',
    description:'Густой мясной суп с говядиной и домашней лапшой',
    weight:350,
    price:300,
    toppings:
        [{ name:'укроп',
       price:30,
         },
     { name:'петрушка',
       price: 30,
         },
     { name:'сметана',
       price: 50,
         },
     { name:"сухарики из ржаного хлеба",
       price: 30,
         },
     { name:"сухарики из белого хлеба",
       price: 50,
         }
     ],
   },
   {id:3,
    imgPath:'assets/img/spinachCreamSoup.png',
    name: 'Крем-суп из шпината с лососем',
    description:'Идеальное сочетание шпината, сливок и лосося.',
    weight:300,
    price:320,
    toppings:
        [{ name:'укроп',
       price:30,
         },
     { name:'петрушка',
       price: 30,
         },
     { name:'сметана',
       price: 50,
         },
     { name:"сухарики из ржаного хлеба",
       price: 30,
         },
     { name:"сухарики из белого хлеба",
       price: 50,
         }
     ],
   },
   {id:4,
    imgPath:'assets/img/mushroomСreamSoup.png',
    name: 'Крем-суп из грибов',
    description:'Сливочный суп нежной консистенции с шампиньонами и белыми грибами.',
    weight:260,
    price:280,
    toppings:
        [{ name:'укроп',
       price:30,
         },
     { name:'петрушка',
       price: 30,
         },
     { name:'сметана',
       price: 50,
         },
     { name:"сухарики из ржаного хлеба",
       price: 30,
         },
     { name:"сухарики из белого хлеба",
       price: 50,
         }
     ],
   },
   {id:5,
    imgPath:'assets/img/pumpkinСreamSoup.png',
    name: 'Крем-суп из тыквы',
    description:'Тыква, сливки блендерируются. Суп подается с жаренными семечками и оливковым маслом.',
    weight:300,
    price:270,
    toppings:
        [{ name:'укроп',
       price:30,
         },
     { name:'петрушка',
       price: 30,
         },
     { name:'сметана',
       price: 50,
         },
     { name:"сухарики из ржаного хлеба",
       price: 30,
         },
     { name:"сухарики из белого хлеба",
       price: 50,
         }
     ],
   },
   {id:6,
    imgPath:'assets/img/hodgepodge.png',
    name: 'Солянка',
    description:'Классическая мясная солянка с говядиной и домашними колбасками',
    weight:320,
    price:390,
    toppings:
       [{ name:'укроп',
       price:30,
         },
     { name:'петрушка',
       price: 30,
         },
     { name:'сметана',
       price: 50,
         },
     { name:"сухарики из ржаного хлеба",
       price: 30,
         },
     { name:"сухарики из белого хлеба",
       price: 50,
         }
     ],
   }
  ]

// private soupToppings:{}[]=
// [{ name:'укроп',
//    price:30,
//      },
//  { name:'петрушка',
//    price: 30,
//      },
//  { name:'сметана',
//    price: 50,
//      },
//  { name:"сухарики из ржаного хлеба",
//    price: 30,
//      },
//  { name:"сухарики из белого хлеба",
//    price: 50,
//      }
//  ];

// getToppings(){
//   return this.soupToppings
// }

getSoups(){
  return this.soups;
}

addNewDish(foodItem:FoodItem, category){
 this[category].push(foodItem)
}

deleteDish(foodItem:FoodItem){
  let index = this.soups.indexOf(foodItem);
  this.soups.splice(index,1)
  console.log(foodItem);
  console.log(this.soups)
}

}