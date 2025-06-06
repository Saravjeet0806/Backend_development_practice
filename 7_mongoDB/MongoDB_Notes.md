
# 📘 MongoDB Notes

## 🧾 Introduction
- **MongoDB** is a **NoSQL, document-oriented** database.
- Stores data in **BSON (Binary JSON)** format.
- Developed for **high availability, scalability, and performance**.

---

## 🗂️ Core Terminologies

| Term | Description |
|------|-------------|
| **Database** | A physical container for collections (like a folder in a file system). |
| **Collection** | A group of MongoDB documents (similar to a table in RDBMS). |
| **Document** | A record in MongoDB, stored in BSON format (like a row in RDBMS). |
| **Field** | A key-value pair in a document (like a column). |
| **BSON** | Binary representation of JSON, supports more data types like `Date`, `int`, `long`. |

---

## ⚙️ MongoDB Features

- **Schema-less**: No fixed document structure.
- **Scalable**: Built-in horizontal scaling via **Sharding**.
- **High Performance**: Fast read/write using indexes and memory-mapped storage.
- **Replication**: Ensures data redundancy with **Replica Sets**.

---

## 📚 CRUD Operations

### ➕ Create
```js
db.collection.insertOne({ name: "John", age: 25 });
db.collection.insertMany([{ name: "Alice" }, { name: "Bob" }]);
```

### 📖 Read
```js
db.collection.find();               // All documents
db.collection.find({ age: 25 });    // Filtered
db.collection.findOne();           // Single document
```

### 📝 Update
```js
db.collection.updateOne({ name: "John" }, { $set: { age: 26 } });
db.collection.updateMany({}, { $set: { active: true } });
```

### ❌ Delete
```js
db.collection.deleteOne({ name: "John" });
db.collection.deleteMany({ age: { $lt: 18 } });
```

---

## 🔍 Important Concepts

### 1. **ObjectId**
- A unique identifier automatically generated for each document.
```js
{ "_id": ObjectId("507f1f77bcf86cd799439011") }
```

### 2. **Indexes**
- Improve performance of read queries.
```js
db.collection.createIndex({ name: 1 });
```

### 3. **Aggregation Framework**
- Processes data records and returns computed results.
```js
db.sales.aggregate([
  { $match: { status: "A" } },
  { $group: { _id: "$item", total: { $sum: "$amount" } } }
]);
```

### 4. **Replica Set**
- Group of `mongod` instances that maintain the same data set.
- Provides redundancy and high availability.

### 5. **Sharding**
- Horizontal partitioning of data across multiple machines for scalability.

---

## 🧪 Data Types

| Type | Example |
|------|---------|
| String | `"Hello"` |
| Number | `42` |
| Boolean | `true` |
| Array | `[1, 2, 3]` |
| Object | `{ key: "value" }` |
| Date | `new Date()` |
| ObjectId | `ObjectId("...")` |
| Null | `null` |

---

## 💻 Common Commands

| Operation | Command |
|----------|--------|
| Show DBs | `show dbs` |
| Use DB | `use myDB` |
| Show Collections | `show collections` |
| Drop DB | `db.dropDatabase()` |
| Drop Collection | `db.collection.drop()` |

---

## 🛠️ Tools & Ecosystem

- **MongoDB Atlas**: Cloud-hosted MongoDB solution.
- **Compass**: GUI for visualizing and managing data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB in Node.js.
