/*
$ = Mengupate data array pertama sesuai kondisi query
$[] = Mengupdate semua data array sesuai kondisi query
$[<indentifier>] = Mengupdate semua data array yang sesuai kondisi arrayFilters
<index> = mengupdate data array sesuai dengan nomor index

*/

// update products set ratings = [90, 80, 70]
db.products.updateMany(
  {},
  {
    $set: {
      ratings: [90, 80, 70],
    },
  }
);

// update first element of array, query must include array fields
db.products.updateMany(
  {
    ratings: 90,
  },
  {
    $set: {
      "ratings.$": 100,
    },
  }
);

// update all element of array
db.products.updateMany(
  {},
  {
    $set: {
      "ratings.$[]": 100,
    },
  }
);

// update products set ratings = [90, 80, 70]
db.products.updateMany(
  {},
  {
    $set: {
      ratings: [90, 80, 70],
    },
  }
);

// update element of array based on arrayFilters
db.products.updateMany(
  {},
  {
    $set: {
      "ratings.$[element]": 100,
    },
  },
  {
    arrayFilters: [
      {
        element: {
          $gte: 80,
        },
      },
    ],
  }
);

// update element of array with given index
db.products.updateMany(
  {},
  {
    $set: {
      "ratings.0": 50,
      "ratings.1": 60,
    },
  }
);

/*
  $addToset = Menambahkan value ke array, dihiraukan jika sudah ada
  $pop = Menghapus element pertama (-1) atau terakhir (1) array
  $pull = Menghapus semua element diarray yang sesuai kondisi
  $push = Menambahkan element ke array
  $pullAll = Menghapus semau element di array
*/

// add "popular" to array if not exists
db.products.updateOne(
  {
    _id: 1,
  },
  {
    $addToSet: {
      tags: "popular",
    },
  }
);

// remove first element of array
db.products.updateMany(
  {},
  {
    $pop: {
      ratings: -1,
    },
  }
);

// update products set rating = [90, 80, 70]
db.products.updateMany(
  {},
  {
    $set: {
      ratings: [90, 80, 70],
    },
  }
);

// remove all element where ratings >= 80
db.products.updateMany(
  {},
  {
    $pull: {
      ratings: {
        $gte: 80,
      },
    },
  }
);

// add 100 to ratings
db.products.updateMany(
  {},
  {
    $push: {
      ratings: 100,
    },
  }
);

// remove element 100
db.products.updateMany(
  {},
  {
    $pullAll: {
      ratings: [100],
    },
  }
);

// add 100, 200, 300 to ratings
db.products.updateMany(
  {},
  {
    $push: {
      ratings: {
        $each: [100, 200, 300],
      },
    },
  }
);

/*
$each = Digunakan di $addToSet dan $push, untuk menambahkan multiple element
$position = Digunakan $push utk mengubah posisi menambahkan data
$slice = Digunakan di $push utk menentukan jumlah maksimal data array
$sort = Digunakan untuk mengurutkan array setelah operasi $push
*/

// add trending, popular to tags
db.products.updateMany(
  {},
  {
    $addToSet: {
      tags: {
        $each: ["trending", "popular"],
      },
    },
  }
);

// add hot in posititon 1
db.products.updateMany(
  {},
  {
    $push: {
      tags: {
        $each: ["hot"],
        $position: 1,
      },
    },
  }
);

// add all element, but limit with slice
db.products.updateMany(
  {},
  {
    $push: {
      ratings: {
        $each: [100, 200, 300, 400, 500],
        $slice: -5,
      },
    },
  }
);

// add all element, and sort desc
db.products.updateMany(
  {},
  {
    $push: {
      ratings: {
        $each: [100, 200, 300, 400, 500],
        $sort: -1,
      },
    },
  }
);
