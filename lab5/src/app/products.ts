export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  rating: string;
  categoryId: number; 
  source: string;
  image: string;
  likes: number;
  removed: boolean;
}

export const products = [
  {
    id: 1,
    name: "iPhone 13 Pro Max",
    price: 1099,
    description: "Apple's high-end flagship smartphone with 6.7-inch Super Retina XDR display and 5G connectivity.",
    rating: "4.9",
    categoryId: 1,
    source: "https://kaspi.kz/shop/p/apple-iphone-13-pro-max-128gb-zelenyi-104079084/?c=750000000#!/item",
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1f/hff/49319414333470/apple-iphone-13-pro-max-128gb-zelenyj-104079084-1.jpg",
    likes: 560,
    removed: false,

  },
  {
    id: 2,
    name: "iPad Pro 12.9-inch (5th generation)",
    price: 1099,
    description: "A powerful tablet with M1 chip, Liquid Retina XDR display, and 5G connectivity.",
    rating: "4.8",
    categoryId: 1,
    source: "https://kaspi.kz/shop/p/apple-magic-keyboard-dlja-ipad-pro-12-9-5th-generation-en-chernyi-104234230/?c=750000000#!/item",
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h92/h1b/49577929474078/apple-magic-keyboard-dla-ipad-pro-12-9-5th-generation-eng-cernyj-104234230-1.jpg",
    likes: 873,
    removed: false,

  },
  {
    id: 3,
    name: "AirPods Max",
    price: 549,
    description: "Apple's premium wireless over-ear headphones with high-fidelity audio and active noise cancellation.",
    rating: "4.6",
    categoryId: 1,
    source: "https://kaspi.kz/shop/p/apple-airpods-max-chernyi-100950846/?c=750000000#!/item",
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he4/hcf/33518224441374/apple-airpods-max-cernyj-100950846-1-Container.jpg",
    likes: 751,
    removed: false,
  },
  {
    id: 4,
    name: "Apple Watch Series 7",
    price: 399,
    description: "The latest smartwatch from Apple with larger Retina display, faster charging, and advanced health features.",
    rating: "4.7",
    categoryId: 1,
    source: "https://kaspi.kz/shop/p/apple-watch-series-7-45-mm-chernyi-102582811/?c=750000000#!/item",
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hae/hcf/46553394249758/apple-watch-series-7-41-mm-cernyj-102582811-1.jpg",
    likes: 222,
    removed: false,

  },
  {
    id: 5,
    name: "MacBook Air M1",
    price: 999,
    description: "A thin and light laptop with Apple's M1 chip, Retina display, and up to 18 hours of battery life.",
    rating: "4.8",
    categoryId: 1,
    source: "https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=750000000#!/item",
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd3/he8/33125684772894/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-1-Container.jpg",
    likes: 2311,
    removed: false,

  },
  {
    id: 6,
    name: "Samsung Galaxy S21 Ultra",
    price: 1199,
    description: "Samsung's flagship smartphone with 6.8-inch Dynamic AMOLED 2X display and 5G connectivity.",
    rating: "4.8",
    categoryId: 2,
    source: "https://kaspi.kz/shop/p/samsung-galaxy-s21-ultra-12-gb-256-gb-chernyi-100937415/?c=750000000#!/item",
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hfb/h8f/33455167995934/samsung-galaxy-s21-ultra-12-256gb-cernyj-100937415-1-Container.jpg",
    likes: 0,
    removed: false,

  },
  {
    id: 7,
    name: "Samsung Galaxy Tab S7+",
    price: 849,
    description: "A high-end Android tablet with 12.4-inch Super AMOLED display, S Pen support, and 5G connectivity.",
    rating: "4.7",
    categoryId: 2,
    source: "https://kaspi.kz/shop/p/samsung-galaxy-tab-a7-lite-8-7-sm-t225-8-7-djuimov-3-gb-32-gb-seryi-101785657/?c=750000000#!/item",
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h05/hb9/34033089937438/samsung-galaxy-tab-a7-lite-8-7-sm-t225-seryj-101785657-1-Container.jpg",
    likes: 11,
    removed: false,

  },
  {
    id: 8,
    name: "Samsung Galaxy Buds Pro",
    price: 199,
    description: "Samsung's wireless earbuds with active noise cancellation and 360 Audio.",
    rating: "4.5",
    categoryId: 2,
    source: "https://kaspi.kz/shop/p/samsung-galaxy-buds-pro-sm-r190nzkacis-chernyi-100956349/?c=750000000#!/item",
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h89/hac/50133779841054/samsung-galaxy-buds-pro-sm-r190nzkacis-cernyj-100956349-1-Container.jpg",
    likes: 51,
    removed: false,

  },
  {
    id: 9,
    name: "Samsung Galaxy Watch 4",
    price: 249,
    description: "The latest smartwatch from Samsung with Wear OS, BioActive Sensor, and up to 40 hours of battery life.",
    rating: "4.6",
    categoryId: 2,
    source: "https://kaspi.kz/shop/p/samsung-galaxy-watch-4-classic-sm-r890nzkacis-46-mm-chernyi-chernyi-102170938/?c=750000000#!/item",
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6c/h85/62047597592606/samsung-galaxy-watch-4-classic-sm-r890-cernyj-102170938-1-Container.jpg",
    likes: 324,
    removed: false,

  },
  {
    id: 10,
    name: "Samsung Galaxy Book Pro 360",
    price: 1199,
    description: "A versatile 2-in-1 laptop with AMOLED touchscreen display, Intel Evo platform, and 5G connectivity.",
    rating: "4.5",
    categoryId: 2,
    source: "https://kaspi.kz/shop/p/samsung-galaxy-book-go-np340xla-ka1us-serebristyi-102049386/?c=750000000#!/item",
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h4c/hf2/46601193095198/samsung-galaxy-book-go-np340xla-ka1us-serebristyj-102049386-1-Container.jpg",
    likes: 10,
    removed: false,

  },
  {
    id: 11,
    name: "OPPO Find X3 Pro",
    price: 1199,
    description: "OPPO's flagship smartphone with 6.7-inch AMOLED display, Snapdragon 888 chipset, and 5G connectivity.",
    rating: "4.7",
    categoryId: 4,
    source: "https://kaspi.kz/shop/p/oppo-reno-7-8-gb-128-gb-chernyi-104705829/?c=750000000#!/item",
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc3/h7a/50459864989726/orro-reno-7-8-128gb-cernyj-104705829-1.jpg",
    likes: 1064,
    removed: false,

  },
  {
    id: 12,
    name: "OPPO Watch 2",
    price: 249,
    description: "The latest smartwatch from OPPO with AMOLED display, Wear OS, and up to 16 days of battery life.",
    rating: "4.4",
    categoryId: 4,
    source: "https://kaspi.kz/shop/p/xiaomi-redmi-watch-2-lite-gl-chernyi-103246651/?c=750000000#!/item",
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he4/hdc/47874442559518/smart-casy-xiaomi-redmi-watch-2-lite-gl-black-103246651-1.jpg",
    likes: 911,
    removed: false,

  },
  {
    id: 13,
    name: "OPPO Enco X",
    price: 149,
    description: "OPPO's true wireless earbuds with active noise cancellation and wireless charging.",
    rating: "4.5",
    categoryId: 4,
    source: "https://kaspi.kz/shop/p/oppo-enco-air-2-belyi-104917208/?c=750000000#!/item",
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3d/hf0/50866949783582/oppo-enco-air2-belyj-104917208-1.jpg",
    likes: 211,
    removed: false,

  },
  {
    id: 14,
    name: "OPPO Reno6 Pro+",
    price: 749,
    description: "A powerful smartphone from OPPO with 6.55-inch AMOLED display, Snapdragon 870 chipset, and 5G connectivity.",
    rating: "4.6",
    categoryId: 4,
    source: "https://kaspi.kz/shop/p/oppo-reno-6-8-gb-128-gb-goluboi-102362268/?c=750000000#!/item",
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hdd/h96/50934291464222/oppo-reno-6-8-128gb-aura-goluboj-102362268-1-Container.jpg",
    likes: 99,
    removed: false,

  },
    {
    id: 15,
    name: "OPPO Rena7",
    price: 179,
    description: "A long forgoten technology, oppo reno7 smartphone. Was forgoten but now retriwed with best characteristisc.",
    rating: "4.5",
    categoryId: 4,
    source: "https://kaspi.kz/shop/p/oppo-reno-7-8-gb-128-gb-chernyi-104705829/?c=750000000#!/item",
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc3/h7a/50459864989726/orro-reno-7-8-128gb-cernyj-104705829-1.jpg",
    likes: 609,
    removed: false,

  },
  {
    id: 16,
    name: "Xiaomi Mi 11 Ultra",
    price: 1199,
    description: "Xiaomi's flagship smartphone with 6.81-inch AMOLED display, Snapdragon 888 chipset, and 5G connectivity.",
    rating: "4.8",
    categoryId: 3,
    source: "https://kaspi.kz/shop/p/xiaomi-mi-11-ultra-12-gb-256-gb-chernyi-101468877/?c=750000000#!/item",
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h4d/h6d/50877282746398/xiaomi-mi-11-ultra-12-256gb-cernyj-101468877-1-Container.jpg",
    likes: 234,
    removed: false,

  },
  {
    id: 17,
    name: "Xiaomi Mi Notebook Pro 15",
    price: 1199,
    description: "A high-performance laptop from Xiaomi with 15.6-inch display, 11th Gen Intel Core processor, and NVIDIA GeForce MX450 graphics.",
    rating: "4.7",
    categoryId: 3,
    source: "https://kaspi.kz/shop/p/xiaomi-redmi-note-10-pro-8-gb-128-gb-seryi-101371869/?c=750000000#!/item",
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5e/h5a/50628796842014/xiaomi-redmi-note-10-pro-8-gb-128-gb-seryi-101371869-1.jpg",
    likes: 63,
    removed: false,

  },
  {
    id: 18,
    name: "Xiaomi Mi Electric Scooter Pro 2",
    price: 649,
    description: "A reliable and efficient electric scooter from Xiaomi with up to 28 miles range and maximum speed of 15.5 mph.",
    rating: "4.6",
    categoryId: 3,
    source: "https://kaspi.kz/shop/p/xiaomi-mijia-smart-electric-scooter-pro-m365-chernyi-12100563/?c=750000000#!/item",
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h07/hb7/31868212445214/xiaomi-mijia-smart-electric-scooter-pro-m365-cernyj-12100563-1-Container.jpg",
    likes: 174,
    removed: false,

  },
  {
    id: 19,
    name: "Xiaomi Mi Notebook Pro X",
    price: 1299,
    description: "A high-performance laptop from Xiaomi with 15.6-inch OLED display, Intel Core i7 processor, and NVIDIA GeForce RTX 3050 Ti graphics.",
    rating: "4.5",
    categoryId: 3,
    source: "https://kaspi.kz/shop/p/xiaomi-redmibook-15-xma2101-bn-jyu4525ru-seryi-107677281/?c=750000000#!/item",
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb6/hc7/66021955239966/xiaomi-redmibook-15-xma2101-bn-jyu4525ru-seryi-107677281-1.jpg",
    likes: 714,
    removed: false,

  },
  {
    id: 20,
    name: "Xiaomi Mi Notebook Air",
    price: 599,
    description: "A sleek and lightweight laptop from Xiaomi with 13.3-inch Full HD display, Intel Core i5 processor, and NVIDIA GeForce MX250 graphics.",
    rating: "4.3",
    categoryId: 3,
    source: "https://kaspi.kz/shop/p/xiaomi-redmibook-15-xma2101-bn-jyu4532ru-seryi-108744650/?c=750000000#!/item",
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hdd/hc1/68611061415966/noutbuk-redmibook-15-15-6-i5-512gb-108744650-1.jpg",
    likes: 234,
    removed: false,
  }
];



