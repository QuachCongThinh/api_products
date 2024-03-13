const express = require("express");
const app = express();
const port = 3001;

app.all("*", function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  req.next();
  //...
});

app.get("/", (req, res) => {
  res.json("");
});

const mockProductsData = [
  {
    title: "Slides",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    product: [
      {
        imageUrl:
          "http://androthemes.com/themes/react/slices/assets/img/prods-sm/15.png",
        name: "Ceaser Salad",
        subtitle:
          "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc",
        price: "10.99",
      },
      {
        imageUrl:
          "http://androthemes.com/themes/react/slices/assets/img/prods-sm/14.png",
        name: "Chicken Wrap",
        subtitle:
          "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc",
        price: "5.99",
      },
      {
        imageUrl:
          "http://androthemes.com/themes/react/slices/assets/img/prods-sm/11.png",
        name: "Sea Food Noodles",
        subtitle:
          "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc",
        price: "12.99",
      },
    ],
  },
  {
    title: "Pizzas",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    product: [
      {
        imageUrl:
          "http://androthemes.com/themes/react/slices/assets/img/prods-sm/5.png",
        name: "Pepperoni Pizza",
        subtitle:
          "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc",
        price: "12.99",
      },
      {
        imageUrl:
          "http://androthemes.com/themes/react/slices/assets/img/prods-sm/2.png",
        name: "Vegetarian",
        subtitle:
          "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc",
        price: "9.99",
      },
      {
        imageUrl:
          "http://androthemes.com/themes/react/slices/assets/img/prods-sm/3.png",
        name: "Four Cheese",
        subtitle:
          "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc",
        price: "13.99",
      },
      {
        imageUrl:
          "http://androthemes.com/themes/react/slices/assets/img/prods-sm/3.png",
        name: "Barbeque Chicken",
        subtitle:
          "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc",
        price: "12.99",
      },
    ],
  },
  {
    title: "Salads",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    product: [
      {
        imageUrl:
          "http://androthemes.com/themes/react/slices/assets/img/prods-sm/15.png",
        name: "Ceaser Salad",
        subtitle:
          "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc",
        price: "10.99",
      },
    ],
  },
  {
    title: "Pasta",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    product: [
      {
        imageUrl:
          "http://androthemes.com/themes/react/slices/assets/img/prods-sm/11.png",
        name: "Sea Food Pasta",
        subtitle:
          "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc",
        price: "14.99",
      },
    ],
  },
  {
    title: "Desserts",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    product: [
      {
        imageUrl:
          "http://androthemes.com/themes/react/slices/assets/img/prods-sm/13.png",
        name: "Rum With Soda",
        subtitle:
          "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc",
        price: "3.99",
      },
      {
        imageUrl:
          "http://androthemes.com/themes/react/slices/assets/img/prods-sm/12.png",
        name: "Chocolate Cookies",
        subtitle:
          "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc",
        price: "4.99",
      },
      {
        imageUrl:
          "http://androthemes.com/themes/react/slices/assets/img/prods-sm/9.png",
        name: "Orange Juice",
        subtitle:
          "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc",
        price: "4.99",
      },
    ],
  },
  {
    title: "Beverages",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    product: [
      {
        imageUrl:
          "http://androthemes.com/themes/react/slices/assets/img/prods-sm/13.png",
        name: "Rum With Soda",
        subtitle:
          "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc",
        price: "3.99",
      },
      {
        imageUrl:
          "http://androthemes.com/themes/react/slices/assets/img/prods-sm/10.png",
        name: "Russian Beer",
        subtitle:
          "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc",
        price: "14.99",
      },
      {
        imageUrl:
          "http://androthemes.com/themes/react/slices/assets/img/prods-sm/9.png",
        name: "Orange Juice",
        subtitle:
          "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc",
        price: "4.99",
      },
    ],
  },
  {
    title: "Offers",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    product: [
      {
        imageUrl:
          "http://androthemes.com/themes/react/slices/assets/img/prods-sm/2.png",
        name: "Vegetarian",
        subtitle:
          "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc",
        price: "3.99",
      },
      {
        imageUrl:
          "http://androthemes.com/themes/react/slices/assets/img/prods-sm/10.png",
        name: "Russian Beer",
        subtitle:
          "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc",
        price: "14.99",
      },
    ],
  },
];
app.get("/products", (req, res) => {
  res.json({
    data: mockProductsData,
  });
});

app.listen(port, (req, res) => {
  console.log(`Server is listening on port ${port}`);
});
