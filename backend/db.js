const mongoose = require("mongoose");
require('dotenv').config();

const DATABASE_URL = process.env.DATABASE_URL;


 

// const mongodb = async () => {
//   try {
//     console.log("Attempting to connect to MongoDB");
//     await mongoose.connect(mongoURI);
//     console.log("Connected to MongoDB");

//     const fetchedData = await mongoose.connection.db.collection("food_items");
//     console.log("Collection fetched");

//     const data = await fetchedData.find({}).toArray();

//     // console.log("Data fetched");

//     // global.food_items = data;
//     // console.log(global.food_items);
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//   }
// };

// module.exports = mongodb;


// -----youtube code 



// const mongodb = async () => {
//   await mongoose.connect(
//     mongoURI,
//     { useNewUrlParser: true, useUnifiedTopology: true },
//     async (err, result) => {
//       if (err) console.log("..", err);
//       else {
//         console.log("connected");
//         const fetched_data = await mongoose.connection.db.collection(
//           "food_items"
//         );
//         fetched_data.find({}).toArray(async function (err, data) {
//           const foodCategory = await mongoose.connection.db.collection(
//             "foodCategory"
//           );
//           foodCategory.find({}).toArray(function (err, catData) {
//             if (err) console.log(err);
//             else {
//               global.food_items = data;
//               global.foodCategory = catData;
              
//             }
//           });
          
//         });
//       }
//     }
//   );
// };

// const mongodb = async () => {
//   try {
//     await mongoose.connect(mongoURI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("Connected to MongoDB");

//     const fetched_data = await mongoose.connection.db.collection("food_items");
//     const data = await fetched_data.find({}).toArray();

//     const foodCategory = await mongoose.connection.db.collection("foodCategory");
//     const catData = await foodCategory.find({}).toArray();

//     global.food_items = data;
//     global.foodCategory = catData;

//     console.log("Data fetched and stored globally");
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//   }
// };

// module.exports = mongodb;

const mongodb = async () => {
  try {
    await mongoose.connect(DATABASE_URL, {
     
    });

    console.log("Connected to MongoDB");

    const fetched_data = await mongoose.connection.db.collection("food_items");
    const data = await fetched_data.find({}).toArray();

    const foodCategory = await mongoose.connection.db.collection("foodCategory");
    const catData = await foodCategory.find({}).toArray();

    global.food_items = data;
    global.foodCategory = catData;

    console.log("Data fetched and stored globally");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = mongodb;