// $set = mengubah nilai field di doc
// $unset = menghapus field di doc
// $rename = menguabah nama field di doc
// $inc = menaikan dilai number field sesuai dengan jumlah tertentu (tsmbshksn -/minud untuk dec)
/*
ex:

db.collection.updateMany({
  // query
}, {
  $inc: {
    field: 1, => Increment
    field2: -1 => Decrement
  }

})

*/

// $currentData = mengubah field menjadi waktu saat ini

// alter table customers change name full_name
db.customers.updateMany(
  {},
  {
    $rename: {
      name: "full_name",
    },
  }
);

// update products set stock = stock + 10
db.products.updateMany(
  {},
  {
    $inc: {
      stock: 10,
    },
  }
);

// update products set lastModifiedDate = current_date()
db.products.updateMany(
  {},
  {
    $currentDate: {
      lastModifiedDate: {
        $type: "date",
      },
    },
  }
);
