/** \
db.<collection>.insertOne(doc) //* Menambah Dok ke collection
db.<collection>.insertMany([...doc]) //* Menambah semua dok di array ke colletion
db.<colletion>.insert(doc/ array)
**/

// # insert doc costumers
db.customers.insertOne({
  name: "Eko Kurniawan Khannedy",
});

//# Insert document products
db.products.insertMany([
  {
    _id: 1,
    name: "Indomie Ayam Bawang",
    price: new NumberLong(2000),
  },
  {
    _id: 2,
    name: "Mie Sedap",
    price: new NumberLong(2000),
  },
]);

//# Insert document orders
db.orders.insertOne({
  _id: new ObjectId(),
  total: new NumberLong(8000),
  items: [
    {
      product_id: 1,
      price: new NumberLong(2000),
      quantity: new NumberInt(2),
    },
    {
      product_id: 2,
      price: new NumberLong(2000),
      quantity: new NumberInt(2),
    },
  ],
});
