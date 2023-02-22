export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  rating: string;
  source: string;
}

export const products = [
  {
    id: 1,
    name: 'Смартфон Apple iPhone 13 128Gb черный',
    price: 799,
    source:
      'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000#!/item',
    image:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h01/h10/46392662491166/apple-iphone-13-128gb-cernyj-102298404-1-Container.jpg',
    description:
      'технология NFC: Да цвет: черный тип экрана: OLED, Super Retina XDR диагональ: 6.1 дюйм размер оперативной памяти: 4 ГБ процессор: 6-ядерный Apple A15 Bionic объем встроенной памяти: 128 ГБемкость аккумулятора: 3095 мАч',
    rating: '5.0',
  },
  {
    id: 2,
    name: 'Смартфон Apple iPhone 12 Pro 128Gb серый',
    price: 699,
    description:
      'технология NFC: Да цвет: серый тип экрана: сенсорный, мультитач OLED Super Retina XDR диагональ: 6.1 дюйм размер оперативной памяти: 6 ГБ процессор: 6-ядерный Apple A14 Bionic объем встроенной памяти: 128 ГБ емкость аккумулятора: 2775 мАч',
    rating: '4.9',
    image:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h09/h57/33280339476510/apple-iphone-12-pro-128gb-seryj-100657107-1-Container.jpg',
    source:
      'https://kaspi.kz/shop/p/apple-iphone-12-pro-128gb-seryi-100657107/?c=750000000#!/item',
  },
  {
    id: 3,
    name: 'Смартфон Samsung Galaxy A13 4 ГБ/128 ГБ черный',
    price: 200,
    description:
      'tехнология NFC: Да цвет: черный тип экрана: PLS TFT LCD сенсорный, мультитач диагональ: 6.6 дюйм размер оперативной памяти: 4 ГБ процессор: 8-ядерный Exynos 850 объем встроенной памяти: 128 ГБ емкость аккумулятора: 5000 мАч',
    rating: '4.9',
    image:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf2/hbe/49613711933470/samsung-galaxy-a13-4-gb-128-gb-chernyi-104253279-1.jpg',
    source:
      'https://kaspi.kz/shop/p/samsung-galaxy-a13-4-gb-128-gb-chernyi-104253279/?c=750000000#!/item',
  },
  {
    id: 4,
    name: 'Смартфон Apple iPhone 12 Pro 128Gb серый',
    price: 699,
    description:
      'технология NFC: Да цвет: серый тип экрана: сенсорный, мультитач OLED Super Retina XDR диагональ: 6.1 дюйм размер оперативной памяти: 6 ГБ процессор: 6-ядерный Apple A14 Bionic объем встроенной памяти: 128 ГБ емкость аккумулятора: 2775 мАч',
    rating: '4.9',
    image:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h09/h57/33280339476510/apple-iphone-12-pro-128gb-seryj-100657107-1-Container.jpg',
    source:
      'https://kaspi.kz/shop/p/apple-iphone-12-pro-128gb-seryi-100657107/?c=750000000#!/item',
  },
  {
    id: 5,
    name: 'Смартфон Samsung Galaxy A53 5G 8 ГБ/256 ГБ оранжевый',
    price: 299,
    description:
      'технология NFC: Да цвет: оранжевый тип экрана: Super AMOLED, сенсорный, мультитач диагональ: 6.5 дюйм размер оперативной памяти: 8 ГБ процессор: 8-ядерный Exynos 1280 объем встроенной памяти: 256 ГБ емкость аккумулятора: 5000 мАч',
    rating: '5.0',
    image:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h26/h3f/49613208748062/smartfon-samsung-galaxy-a53-5g-256gb-sm-a536ezohskz-orange-104253145-1.jpg',
    source:
      'https://kaspi.kz/shop/p/samsung-galaxy-a53-5g-8-gb-256-gb-oranzhevyi-104253145/?c=750000000#!/item',
  },

  {
    id: 6,
    name: 'Смартфон Samsung Galaxy S23+ 5G 8 ГБ/512 ГБ черный + подарок ',
    price: 999,
    description:
      'технология NFC: Да цвет: серый тип экрана: сенсорный, мультитач OLED Super Retina XDR диагональ: 6.1 дюйм размер оперативной памяти: 6 ГБ процессор: 6-ядерный Apple A14 Bionic объем встроенной памяти: 128 ГБ емкость аккумулятора: 2775 мАч',
    rating: '5.0',
    image:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h03/h02/68538729267230/samsung-galaxy-s23-5g-8-gb-512-gb-chernyi-108714366-1.jpg',
    source:
      'https://kaspi.kz/shop/p/samsung-galaxy-s23-5g-8-gb-512-gb-chernyi-podarok-108714366/?c=750000000#!/item',
  },
  {
    id: 7,
    name: 'Смартфон Apple iPhone 12 Pro 128Gb серый',
    price: 699,
    description:
      'технология NFC: Да цвет: черный тип экрана: Dynamic AMOLED 2X, HDR10+ диагональ: 6.6 дюйм размер оперативной памяти: 8 ГБ процессор: 8-ядерный Snapdragon 8 Gen 2 объем встроенной памяти: 512 ГБ емкость аккумулятора: 4700 мАч',
    rating: '4.9',
    image:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h09/h57/33280339476510/apple-iphone-12-pro-128gb-seryj-100657107-1-Container.jpg',
    source:
      'https://kaspi.kz/shop/p/apple-iphone-12-pro-128gb-seryi-100657107/?c=750000000#!/item',
  },
  {
    id: 8,
    name: 'Смартфон Samsung Galaxy S23 Ultra 5G 12 ГБ/1024 ГБ зеленый + подарок',
    price: 899,
    description:
      'технология NFC: Да цвет: серый тип экрана: сенсорный, мультитач OLED Super Retina XDR диагональ: 6.1 дюйм размер оперативной памяти: 6 ГБ процессор: 6-ядерный Apple A14 Bionic объем встроенной памяти: 128 ГБ емкость аккумулятора: 2775 мАч',
    rating: '4.9',
    image:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h09/h57/33280339476510/apple-iphone-12-pro-128gb-seryj-100657107-1-Container.jpg',
    source:
      'https://kaspi.kz/shop/p/samsung-galaxy-s23-ultra-5g-12-gb-1024-gb-zelenyi-podarok-108714435/?c=750000000#!/item',
  },
  {
    id: 9,
    name: 'Смартфон Apple iPhone 12 Pro 128Gb серый',
    price: 699,
    description:
      'технология NFC: Да цвет: зеленый тип экрана: Dynamic AMOLED 2X, HDR10+, Corning Gorilla Glass Victus+ диагональ: 6.8 дюйм размер оперативной памяти: 12 ГБ процессор: 8-ядерный Snapdragon 8 Gen 2 объем встроенной памяти: 1024 ГБ емкость аккумулятора: 5000 мАч',
    rating: '4.9',
    image:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbb/h76/68538929545246/samsung-galaxy-s23-ultra-5g-12-gb-512-gb-zelenyi-108714435-1.jpg',
    source:
      'https://kaspi.kz/shop/p/apple-iphone-12-pro-128gb-seryi-100657107/?c=750000000#!/item',
  },
  {
    id: 10,
    name: 'Смартфон Samsung Galaxy S22 Ultra 12 ГБ/512 ГБ черный',
    price: 599,
    description:
      'технология NFC: Да цвет: черный тип экрана: Dynamic AMOLED 2X, HDR10+, Corning Gorilla Glass Victus+ диагональ: 6.8 дюйм размер оперативной памяти: 12 ГБ процессор: 8-ядерный Exynos 2200 объем встроенной памяти: 512 ГБ емкость аккумулятора: 5000 мАч',
    rating: '4.9',
    image:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h73/haf/48695056269342/samsung-galaxy-s22-ultra-12-256gb-cernyj-podarok-103668336-1.jpg',
    source:
      'https://kaspi.kz/shop/p/samsung-galaxy-s22-ultra-12-gb-512-gb-chernyi-103668336/?c=750000000#!/item',
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
