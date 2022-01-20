const initialState = {
  user: [],
  cart: [],
  mylist: [],
  products: [
    {
      id: "01",
      name: "Lomo Limpio",
      price: 38000,
      measues: "kilogramo",
      amount: 500,
      presentation: "Filete",
      img: "https://as2.ftcdn.net/v2/jpg/00/84/21/73/1000_F_84217338_B2f5Yv72diqRbAmS2O51ImgITqPnQ5ZR.jpg",
      totalAdd: 0,
    },
    {
      id: "02",
      name: "Lomo Corriente",
      price: 33000,
      uniti: "kilogramo",
      amount: 500,
      presentation: "Filete",
      img: "https://dummyimage.com/600x400/cccccc/fff",
      totalAdd: 0,
    },
    {
      id: "03",
      name: "Chatas En Posta",
      price: 24000,
      uniti: "kilogramo",
      amount: 500,
      presentation: "Filete",
      img: "https://dummyimage.com/600x400/cccccc/fff",
      totalAdd: 0,
    },
    {
      id: "04",
      name: "Churrasco",
      price: 26000,
      uniti: "kilogramo",
      amount: 500,
      presentation: "Filete",
      img: "https://dummyimage.com/600x400/cccccc/fff",
      totalAdd: 0,
    },
    {
      id: "05",
      name: "Punta De Anca",
      price: 26000,
      uniti: "kilogramo",
      amount: 500,
      presentation: "Filete",
      img: "https://dummyimage.com/600x400/cccccc/fff",
      totalAdd: 0,
    },
    {
      id: "06",
      name: "Cadera En Posta",
      price: 20000,
      uniti: "kilogramo",
      amount: 500,
      presentation: "Filete",
      img: "https://dummyimage.com/600x400/cccccc/fff",
      totalAdd: 0,
    },
    {
      id: "07",
      name: "Cadera Tajada",
      price: 20000,
      uniti: "kilogramo",
      amount: 500,
      presentation: "Filete",
      img: "https://dummyimage.com/600x400/cccccc/fff",
      totalAdd: 0,
    },
    {
      id: "08",
      name: "Centro De Pierna",
      price: 20000,
      uniti: "kilogramo",
      amount: 500,
      presentatio: "Filete",
      img: "https://dummyimage.com/600x400/cccccc/fff",
      totalAdd: 0,
    },
    {
      id: "09",
      name: "Bota",
      price: 19500,
      uniti: "kilogramo",
      amount: 500,
      presentation: "Filete",
      img: "https://dummyimage.com/600x400/cccccc/fff",
      totalAdd: 0,
    },
    {
      id: "10",
      name: "Bota Con Muchacho",
      price: 20000,
      measues: "kilogramo",
      amount: 500,
      presentation: "Filete",
      img: "https://dummyimage.com/600x400/cccccc/fff",
      totalAdd: 0,
    },

    {
      id: "56",
      name: "Pollo Entero",
      price: 7000,
      measues: "kilogramo",
      amount: 500,
      presentation: "Entero",
      img: "https://dummyimage.com/600x400/cccccc/fff",
      totalAdd: 0,
    },
    {
      id: "57",
      name: "Pechuga",
      price: 11500,
      measues: "kilogramo",
      amount: 500,
      presentation: "Entera",
      img: "https://dummyimage.com/600x400/cccccc/fff",
      totalAdd: 0,
    },
    {
      id: "58",
      name: "Filete De Pechuga",
      price: 16000,
      measues: "kilogramo",
      amount: 500,
      presentation: "Filete",
      img: "https://dummyimage.com/600x400/cccccc/fff",
      totalAdd: 0,
    },
    {
      id: "59",
      name: "Pierna Pernil",
      price: 8000,
      measues: "kilogramo",
      amount: 500,
      presentation: "Entero",
      img: "https://dummyimage.com/600x400/cccccc/fff",
      totalAdd: 0,
    },
    {
      id: "60",
      name: "Pierna Pernil Deshuesado",
      price: 9000,
      measues: "kilogramo",
      amount: 500,
      presentation: "Entero (Sin Hueso)",
      img: "https://dummyimage.com/600x400/cccccc/fff",
      totalAdd: 0,
    },
    {
      id: "61",
      name: "Colombina De Pierna",
      price: 9000,
      measues: "kilogramo",
      amount: 500,
      presentation: "Entero",
      img: "https://dummyimage.com/600x400/cccccc/fff",
      totalAdd: 0,
    },
    {
      id: "62",
      name: "Muslos Enteros",
      price: 9000,
      measues: "kilogramo",
      amount: 500,
      presentation: "Entero",
      img: "https://dummyimage.com/600x400/cccccc/fff",
      totalAdd: 0,
    },

    {
      id: "36",
      name: "Pernil De Cerdo",
      price: 15000,
      measues: "kilogramo",
      amount: 500,
      presentation: "Filete",
      img: "https://dummyimage.com/600x400/cccccc/fff",
      totalAdd: 0,
    },
    {
      id: "37",
      name: "Lomo De Cerdo",
      price: 18000,
      measues: "kilogramo",
      amount: 500,
      presentation: "Filete",
      img: "https://dummyimage.com/600x400/cccccc/fff",
      totalAdd: 0,
    },
    {
      id: "38",
      name: "Lomo Almendra",
      price: 20000,
      measues: "kilogramo",
      amount: 500,
      presentation: "Filete",
      img: "https://dummyimage.com/600x400/cccccc/fff",
      totalAdd: 0,
    },
    {
      id: "39",
      name: "Solomito",
      price: 22000,
      measues: "kilogramo",
      amount: 500,
      presentation: "Filete",
      img: "https://dummyimage.com/600x400/cccccc/fff",
      totalAdd: 0,
    },
    {
      id: "40",
      name: "Chuleta",
      price: 19000,
      measues: "kilogramo",
      amount: 500,
      presentation: "Filete",
      img: "https://dummyimage.com/600x400/cccccc/fff",
      totalAdd: 0,
    },
    {
      id: "41",
      name: "Brazo En Posta",
      price: 14000,
      measues: "kilogramo",
      amount: 500,
      presentation: "Filete",
      img: "https://dummyimage.com/600x400/cccccc/fff",
      totalAdd: 0,
    },
    {
      id: "42",
      name: "Brazo Tajado",
      price: 14000,
      measues: "kilogramo",
      amount: 500,
      presentation: "Filete",
      img: "https://dummyimage.com/600x400/cccccc/fff",
      totalAdd: 0,
    },
  ],
};
export default initialState;
