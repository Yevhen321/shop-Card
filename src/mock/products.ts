type Discount = {
  active: boolean;
  percent: number;
  from: number;
};

export type ProductProps = {
  id: number;
  name: string;
  price: number;
  image: string;
  discount: Discount;
  qty: number;
};

const Product: ProductProps[] = [
  {
    id: 1,
    name: "banana",
    price: 10,
    qty: 0,
    discount: {
      active: false,
      percent: 5,
      from: 3,
    },
    image:
      "https://media.istockphoto.com/id/1291262112/photo/banana.jpg?b=1&s=170667a&w=0&k=20&c=pPSsFoR1CX7oHJrr-bZPSoFIBO8PPf4SQDg3IbF-wcg=",
  },
  {
    id: 2,
    name: "apple",
    price: 8,
    qty: 0,
    discount: {
      active: false,
      percent: 5,
      from: 3,
    },
    image:
      "https://media.istockphoto.com/id/1365099869/photo/six-apples.jpg?b=1&s=170667a&w=0&k=20&c=ZJI2fLOE6a0aCU-4BBg9qDYht3wH29GD3V_ThqpLfl8=",
  },
  {
    id: 3,
    qty: 0,
    name: "papaya",
    price: 10,
    discount: {
      active: true,
      percent: 10,
      from: 3,
    },
    image:
      "https://media.istockphoto.com/id/104638864/photo/halved-and-whole-papaya-fruits-on-white-background.jpg?b=1&s=170667a&w=0&k=20&c=7A6FqN2yDjMcYCb_833klMSojujesgL-p-yaATcCN44=",
  },
];

export default Product;
