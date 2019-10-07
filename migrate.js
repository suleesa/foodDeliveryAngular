const request = require('request');

function foodItem(
  id,
  category,
  imgPath,
  name,
  description,
  weight,
  price,
  toppings,
  available
) {
  return {
    id: id,
    category: category,
    imgPath: imgPath,
    name: name,
    description: description,
    weight: weight,
    price: price,
    toppings: toppings,
    available: available
  };
}

dishes = [
  foodItem(
    '',
    'Суп',
    'https://pizzamore.ru/thumb/2/jvD1AmJk_Rnx-K8k3LnCsg/400r400/d/ukha.jpg',
    'Финская уха с лососем и судаком',
    'Лосось, судак, картофель, томаåты и сливки.',
    350,
    380,
    [
      {
        name: 'укроп',
        price: 30
      },
      {
        name: 'петрушка',
        price: 30
      },
      {
        name: 'сметана',
        price: 50
      },
      {
        name: 'сухарики из ржаного хлеба',
        price: 30
      },
      {
        name: 'сухарики из белого хлеба',
        price: 50
      }
    ],
    true
  ),
  foodItem(
    '',
    'Суп',
    'https://pizzamore.ru/thumb/2/vHKTRrVepqCy8GxZcDGTAQ/400r400/d/lagman_0.jpg',
    'Лагман',
    'Густой мясной суп с говядиной и домашней лапшой',
    350,
    300,
    [
      { name: 'укроп', price: 30 },
      { name: 'петрушка', price: 30 },
      { name: 'сметана', price: 50 },
      { name: 'сухарики из ржаного хлеба', price: 30 },
      { name: 'сухарики из белого хлеба', price: 50 }
    ],
    true
  ),
  foodItem(
    '',
    'Суп',
    'https://pizzamore.ru/thumb/2/N6SbRljYpSWkpjrhwZQpvQ/400r400/d/sup_shpinat.jpg',
    'Крем-Суп из шпината с лососем',
    'Идеальное сочетание шпината, сливок и лосося.',
    300,
    320,
    [
      { name: 'укроп', price: 30 },
      { name: 'петрушка', price: 30 },
      { name: 'сметана', price: 50 },
      { name: 'сухарики из ржаного хлеба', price: 30 },
      { name: 'сухарики из белого хлеба', price: 50 }
    ],
    true
  ),
  foodItem(
    4,
    'Суп',
    'https://pizzamore.ru/thumb/2/YmzpLM3FKR5AWo29-rhMIg/400r400/d/sup_gribnoi.jpg',
    'Крем-Суп из грибов',
    'Сливочный Суп нежной консистенции с шампиньонами и белыми грибами.',
    260,
    280,
    [
      { name: 'укроп', price: 30 },
      { name: 'петрушка', price: 30 },
      { name: 'сметана', price: 50 },
      { name: 'сухарики из ржаного хлеба', price: 30 },
      { name: 'сухарики из белого хлеба', price: 50 }
    ],
    true
  ),
  foodItem(
    '',
    'Суп',
    'https://pizzamore.ru/thumb/2/4SupQLqbgrWnQUeKsNAD9w/400r400/d/tykvennyi_sup.jpg',
    'Крем-Суп из тыквы',
    'Тыква, сливки блендерируются. Суп подается с жаренными семечками и оливковым маслом.',
    300,
    270,
    [
      { name: 'укроп', price: 30 },
      { name: 'петрушка', price: 30 },
      { name: 'сметана', price: 50 },
      { name: 'сухарики из ржаного хлеба', price: 30 },
      { name: 'сухарики из белого хлеба', price: 50 }
    ],
    true
  ),
  foodItem(
    '',
    'Пицца',
    'https://pizzamore.ru/thumb/2/L00v27Dw84QWD8oO2bwO_A/400r400/d/barselona.jpg',
    'Барселона',
    'Форель слабой соли, цукини, томаты, сыр моцарелла',
    570,
    590,
    [
      { name: 'ананас', price: 60 },
      { name: 'курица', price: 50 },
      { name: 'соус Барбекю', price: 30 },
      { name: 'соус Рэнч', price: 30 },
      { name: 'чеснок', price: 20 },
      { name: 'шампиньоны', price: 40 },
      { name: 'кабачок', price: 30 },
      { name: 'халапеньо', price: 40 }
    ],
    true
  ),
  foodItem(
    '',
    'Пицца',
    'https://pizzamore.ru/thumb/2/CppX8_Xh_n-UBZSsI3lofQ/400r400/d/vegetariano.jpg',
    'Вегетариано',
    'цукини, томаты, кукуруза, моцарелла, шампиньоны, микс салатов',
    590,
    590,
    [
      { name: 'ананас', price: 60 },
      { name: 'курица', price: 50 },
      { name: 'соус Барбекю', price: 30 },
      { name: 'соус Рэнч', price: 30 },
      { name: 'чеснок', price: 20 },
      { name: 'шампиньоны', price: 40 },
      { name: 'кабачок', price: 30 },
      { name: 'халапеньо', price: 40 }
    ],
    true
  ),
  foodItem(
    '',
    'Пицца',
    'https://pizzamore.ru/thumb/2/dVj0iNT_XiD3YXyOuThmpw/400r400/d/salyami.jpg',
    'Салями',
    'Cалями, моцарелла, томатный соус',
    430,
    540,
    [
      { name: 'ананас', price: 60 },
      { name: 'курица', price: 50 },
      { name: 'соус Барбекю', price: 30 },
      { name: 'соус Рэнч', price: 30 },
      { name: 'чеснок', price: 20 },
      { name: 'шампиньоны', price: 40 },
      { name: 'кабачок', price: 30 },
      { name: 'халапеньо', price: 40 }
    ],
    true
  ),
  foodItem(
    '',
    'Пицца',
    'https://pizzamore.ru/thumb/2/hM0tFr3ep0TKJQghLU2cYw/400r400/d/pepperoni.jpg',
    'Пепперони',
    'Пепперони, болгарский перец, сыр моцарелла',
    490,
    590,
    [
      { name: 'ананас', price: 60 },
      { name: 'курица', price: 50 },
      { name: 'соус Барбекю', price: 30 },
      { name: 'соус Рэнч', price: 30 },
      { name: 'чеснок', price: 20 },
      { name: 'шампиньоны', price: 40 },
      { name: 'кабачок', price: 30 },
      { name: 'халапеньо', price: 40 }
    ],
    true
  ),
  foodItem(
    '',
    'Паста',
    'https://pizzamore.ru/thumb/2/nvcFVEK4S0prfJwyPL19Bw/400r400/d/pasta_s_kolbaskami.jpg',
    'C домашними колбасками',
    'Паста с колбасками, сливочным сыром,сыром пармезан в соусе «суго»',
    350,
    430,
    [
      { name: 'курица', price: 50 },
      { name: 'чеснок', price: 20 },
      { name: 'шампиньоны', price: 40 },
      {
        name: 'моцарелла',
        price: 70
      },
      {
        name: 'пармезан',
        price: 70
      },
      {
        name: 'Дор Блю',
        price: 70
      }
    ],
    true
  ),
  foodItem(
    '',
    'Паста',
    'https://pizzamore.ru/thumb/2/OUZpYHDcwNVf9iimr0j7Zg/400r400/d/pasta_s_belymi_gribami.jpg',
    'Тальятелле с белыми грибами',
    'Ароматная грибная паста в сливочном соусе',
    390,
    450,
    [
      { name: 'курица', price: 50 },
      { name: 'чеснок', price: 20 },
      { name: 'шампиньоны', price: 40 },
      {
        name: 'моцарелла',
        price: 70
      },
      {
        name: 'пармезан',
        price: 70
      },
      {
        name: 'Дор Блю',
        price: 70
      }
    ],
    true
  ),
  foodItem(
    '',
    'Паста',
    'https://pizzamore.ru/thumb/2/_2nIi0RK_q8_dOd9ZjhrVg/400r400/d/ravioli_so_shpinatom.jpg',
    'Равиоли со шпинатом и сливочным сыром',
    'Подаются в сливочном соусе со шпинатом',
    230,
    420,
    [
      { name: 'курица', price: 50 },
      { name: 'чеснок', price: 20 },
      { name: 'шампиньоны', price: 40 },
      {
        name: 'моцарелла',
        price: 70
      },
      {
        name: 'пармезан',
        price: 70
      },
      {
        name: 'Дор Блю',
        price: 70
      }
    ],
    true
  ),
  foodItem(
    '',
    'Паста',
    'https://pizzamore.ru/thumb/2/bK55ByNYF_nxm_Jo0vof3g/400r400/d/lazanya.jpg',
    'Лазанья мясная',
    'Многослойное мясное блюдо, из пасты с соусом Болоньезе, Бешамель, сыром моцарелла, пармезана и соусом Суго.',
    320,
    420,
    [
      { name: 'курица', price: 50 },
      { name: 'чеснок', price: 20 },
      { name: 'шампиньоны', price: 40 },
      {
        name: 'моцарелла',
        price: 70
      },
      {
        name: 'пармезан',
        price: 70
      },
      {
        name: 'Дор Блю',
        price: 70
      }
    ],
    true
  ),
  foodItem(
    '',
    'Паста',
    'https://pizzamore.ru/thumb/2/twvNU7LuWojHlVUpbaAGSQ/400r400/d/pasta_s_moryami.jpg',
    'Паста с морепродуктами',
    'Лосось, судак, осьминог, мидии, кальмар, соус суго',
    430,
    520,
    [
      { name: 'курица', price: 50 },
      { name: 'чеснок', price: 20 },
      { name: 'шампиньоны', price: 40 },
      {
        name: 'моцарелла',
        price: 70
      },
      {
        name: 'пармезан',
        price: 70
      },
      {
        name: 'Дор Блю',
        price: 70
      }
    ],
    true
  ),
  foodItem(
    '',
    'Горячее',
    'https://pizzamore.ru/thumb/2/konIY5sSFcDMVSwZtW1BGg/400r400/d/lyulya_kebab.jpg',
    'Люля Кебаб',
    'Шашлык из баранины',
    345,
    550,
    [
      { name: 'чеснок', price: 20 },
      { name: 'свежие овощи', price: 90 },
      {
        name: 'укроп',
        price: 20
      },
      {
        name: 'петрушка',
        price: 20
      },
      {
        name: 'кинза',
        price: 30
      },
      {
        name: 'соус Барбекю',
        price: 30
      },
      {
        name: 'соус Рэнч',
        price: 30
      }
    ],
    true
  ),
  foodItem(
    '',
    'Горячее',
    'https://pizzamore.ru/thumb/2/HsS3J7e5ZLfS3Qu24Ef8FA/400r400/d/koreika2.jpg',
    'Свиная корейка на кости',
    'Летнее предложение!',
    320,
    690,
    [
      { name: 'чеснок', price: 20 },
      { name: 'свежие овощи', price: 90 },
      {
        name: 'укроп',
        price: 20
      },
      {
        name: 'петрушка',
        price: 20
      },
      {
        name: 'кинза',
        price: 30
      },
      {
        name: 'соус Барбекю',
        price: 30
      },
      {
        name: 'соус Рэнч',
        price: 30
      }
    ],
    true
  ),
  foodItem(
    '',
    'Горячее',
    'https://pizzamore.ru/thumb/2/LcSgQP7lVLGw3BILS4e_JA/400r400/d/sudak_v_kartofelnoy_korochke.jpg',
    'Судак в картофельной корочке',
    'Нежное филе судака в картофельной корочке, подается с соусом тар-тар',
    400,
    550,
    [
      { name: 'чеснок', price: 20 },
      { name: 'свежие овощи', price: 90 },
      {
        name: 'укроп',
        price: 20
      },
      {
        name: 'петрушка',
        price: 20
      },
      {
        name: 'кинза',
        price: 30
      },
      {
        name: 'соус Барбекю',
        price: 30
      },
      {
        name: 'соус Рэнч',
        price: 30
      }
    ],
    true
  ),
  foodItem(
    '',
    'Горячее',
    'https://pizzamore.ru/thumb/2/I_YPSrAXKUL7euWdI77XbA/400r400/d/kurinyye_kotlety.jpg',
    'Куриные котлеты с картофельным пюре',
    'Две куриные котлеты из нежного куриного фарша,подаются с пюре и маринованным огурцом. Рекомендованы для детей',
    400,
    520,
    [
      { name: 'чеснок', price: 20 },
      { name: 'свежие овощи', price: 90 },
      {
        name: 'укроп',
        price: 20
      },
      {
        name: 'петрушка',
        price: 20
      },
      {
        name: 'кинза',
        price: 30
      },
      {
        name: 'соус Барбекю',
        price: 30
      },
      {
        name: 'соус Рэнч',
        price: 30
      }
    ],
    true
  ),
  foodItem(
    '',
    'Горячее',
    'https://pizzamore.ru/thumb/2/mzE3Mg6ypMUnvoi5eqXuvA/400r400/d/kolbaski.jpg',
    'Колбаски по-домашнему с капустой',
    'Сочные домашние колбаски подаются с отварным картофелем и тушёной капустой',
    400,
    450,
    [
      { name: 'чеснок', price: 20 },
      { name: 'свежие овощи', price: 90 },
      {
        name: 'укроп',
        price: 20
      },
      {
        name: 'петрушка',
        price: 20
      },
      {
        name: 'кинза',
        price: 30
      },
      {
        name: 'соус Барбекю',
        price: 30
      },
      {
        name: 'соус Рэнч',
        price: 30
      }
    ],
    true
  ),
  foodItem(
    '',
    'Десерт',
    'https://pizzamore.ru/thumb/2/8F92BtjlgTvQiR59ZgVWZQ/400r400/d/fondan.jpg',
    'Шоколадный фондан',
    '',
    170,
    350,
    [
      { name: 'взбитые сливки', price: 80 },
      { name: 'шарик ванильного мороженого', price: 60 },
      {
        name: 'шарик шоколадного мороженого',
        price: 60
      },
      {
        name: 'нутелла',
        price: 50
      },
      {
        name: 'орехи',
        price: 70
      },
      {
        name: 'мармелад',
        price: 50
      }
    ],
    true
  ),
  foodItem(
    '',
    'Десерт',
    'https://pizzamore.ru/thumb/2/koRGGtFs2Z39oicK3MpvcQ/400r400/d/panna_kota.jpg',
    'Панна-котта с брусничным соусом',
    '',
    240,
    280,
    [
      { name: 'взбитые сливки', price: 80 },
      { name: 'шарик ванильного мороженого', price: 60 },
      {
        name: 'шарик шоколадного мороженого',
        price: 60
      },
      {
        name: 'нутелла',
        price: 50
      },
      {
        name: 'орехи',
        price: 70
      },
      {
        name: 'мармелад',
        price: 50
      }
    ],
    true
  ),

  foodItem(
    '',
    'Десерт',
    'https://pizzamore.ru/thumb/2/CREeLLh27IKGFoinsdcS1A/400r400/d/smetannik.jpg',
    'Сметанник',
    '',
    220,
    250,
    [
      { name: 'взбитые сливки', price: 80 },
      { name: 'шарик ванильного мороженого', price: 60 },
      {
        name: 'шарик шоколадного мороженого',
        price: 60
      },
      {
        name: 'нутелла',
        price: 50
      },
      {
        name: 'орехи',
        price: 70
      },
      {
        name: 'мармелад',
        price: 50
      }
    ],
    true
  ),
  foodItem(
    '',
    'Десерт',
    'https://pizzamore.ru/thumb/2/eoZ2j3LX40W0-BdnMMiz8Q/400r400/d/napoleon.jpg',
    'Наполеон',
    '',
    250,
    250,
    [
      { name: 'взбитые сливки', price: 80 },
      { name: 'шарик ванильного мороженого', price: 60 },
      {
        name: 'шарик шоколадного мороженого',
        price: 60
      },
      {
        name: 'нутелла',
        price: 50
      },
      {
        name: 'орехи',
        price: 70
      },
      {
        name: 'мармелад',
        price: 50
      }
    ],
    true
  )
];

dishes.forEach(dish => {
  request(
    {
      url: 'https://my-first-project-ea1d8.firebaseio.com/soups.json',
      method: 'POST',
      json: dish
    },
    function(error, response, body) {
      console.log(dish.id, body);
    }
  );
});
