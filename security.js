// use admin database
// use admin

db.createUser({
  user: "admin",
  pwd: "admin",
  roles: ["userAdminAnyDatabase", "readWriteAnyDatabase"],
});

db.createUser({
  user: "admin",
  pwd: "admin",
  roles: [
    { role: "userAdminAnyDatabase", db: "admin" },
    "readWriteAnyDatabase",
  ],
});

// Connect to mongodb with username & password
// mongo --username mongo --password mongo --host localhost --port 27017
