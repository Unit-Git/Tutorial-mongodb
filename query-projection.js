/*
$ = Limit array  hanya mengembalikan data pertama yang match dengan array operator
$elemMatch = Limit array hanya mengemblikan data pertam yang match dengan kondisi query
$meta = Mengemabalikan informasi metadata yang dapat dari setiap mathing document
$slice = Mengontrol jumlah data yang ditampilkan pada array

*/

// select _id, name, category from products
db.products.find(
  {
    /*
    query here!
    */
  },
  {
    name: 1,
    category: 1,
  }
);

// select _id, name, category, price from products
db.products.find(
  {},
  {
    tags: 0,
  }
);

// select _id, name, category, price, tags[first] from products where tags in ("samsung", "logitech")
db.products.find(
  {
    tags: {
      $elemMatch: {
        $in: ["samsung", "logitech"],
      },
    },
  },
  {
    name: 1,
    category: 1,
    price: 1,
    "tags.$": 1,
  }
);

// select _id, name, category, price, tags(in ("samsung", "logitech")) from products
db.products.find(
  {},
  {
    name: 1,
    category: 1,
    price: 1,
    tags: {
      $elemMatch: {
        $in: ["samsung", "logitech"],
      },
    },
  }
);

// select *, score from products where $search like "monitor"
db.products.find(
  {
    $text: {
      $search: "mie",
    },
  },
  {
    score: {
      $meta: "textScore",
    },
  }
);

// select _id, name, price, category, tags[0,2] from products
db.products.find(
  {},
  {
    tags: {
      $slice: 2,
    },
  }
);

// select _id, name, price, category, tags[last 2] from products
db.products.find(
  {},
  {
    tags: {
      $slice: -2,
    },
  }
);

// select _id, name, price, category, tags[from, limit] from products
db.products.find(
  {},
  {
    tags: {
      $slice: [1, 1],
    },
  }
);
