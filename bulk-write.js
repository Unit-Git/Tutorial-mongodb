/*
db.<collection>.insertMany();
db.<collection>.updateMany();
db.<collection>.deleteMany();
db.<collection>.bulkWrite() = Melakukan operasi (insert, update, delete) banyak data sekaligus
*/

db.customers.bulkWrite([
  {
    insertOne: {
      document: {
        _id: "eko",
        full_name: "Eko",
      },
    },
  },
  {
    insertOne: {
      document: {
        _id: "kurniawan",
        full_name: "Kurniawan",
      },
    },
  },
  {
    updateMany: {
      filter: {
        _id: {
          $in: ["eko", "kurniawan", "khannedy"],
        },
      },
      update: {
        $set: {
          full_name: "Eko Kurniawan Khannedy",
        },
      },
    },
  },
]);
