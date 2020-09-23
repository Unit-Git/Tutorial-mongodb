// * Comparison Operator

// $eq = membandingkan value dengan value lain
// $gt = membandingkan value lebih besar dari value lain
// $gte = membandingkan value lebih besar atau sama dengan value lain
// $lt = Membandingkan value lebih kecil dari value lain
// $lte = membandingkan value lebih kecil atau sama dgn value lain
// $in = membandingkan value dgn value yg ada di array
// $nin = membandingkan value tidak ad dalam value yg ada di array
// $ne = membandingkan value tidak sama dgn value lain

/*
* syntax
db.<collection>.find({
  field: {
    $opertor: "value"
  }
})
*/

// select * from customers where _id = 'khannedy'
db.customers.find({
  _id: {
    $eq: "khannedy",
  },
});

// select * from products where price > 1000
db.products.find({
  price: {
    $gt: 1000,
  },
});

// insert product documents
db.products.insertMany([
  {
    _id: 3,
    name: "Pop Mie Rasa Bakso",
    price: new NumberLong(2500),
    category: "food",
  },
  {
    _id: 4,
    name: "Samsung Galaxy S9+",
    price: new NumberLong(10000000),
    category: "handphone",
  },
  {
    _id: 5,
    name: "Acer Precator XXI",
    price: new NumberLong(25000000),
    category: "laptop",
  },
]);

// select * from products where category in ('handphone', 'laptop') and price > 5000000
db.products.find({
  category: {
    $in: ["handphone", "laptop"],
  },
  price: {
    $gt: 5000000,
  },
});
