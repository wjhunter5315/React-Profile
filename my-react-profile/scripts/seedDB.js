const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
   process.env.MONGODB_URI ||
   "mongodb://localhost/ironhandbrewing"
);

   // name: { type: String, required: true },
   // style: { type: String, required: true },
   // abv: { type: Number },
   // ibu: { type: Number },
   // description: { type: String }

const beerSeed = [
   {
      name: "Ben's Oatmeal Stout",
      style: "Oatmeal Stout",
      abv: 5.1,
      date: new Date(Date.now())
   },
   {
      name: "Lost Ring Porter",
      style: "English Porter",
      abv: 5.3,
      description: "Sweet and on the malty side, as this variety of dark ale should be, but not too sweet and with just a tad more hops in the finish than you usually get with a porter.",
      date: new Date(Date.now())
   },
   {
      name: "Rebecca's First Amber",
      style: "Amber Ale",
      abv: 4.3,
      ibu: 32,
      description: "Full-bodied dark Amber",
      date: new Date(Date.now())
   },
   {
      name: "Wee Heavy",
      style: "Scotch Ale / Wee Heavy",
      abv: 9.1,
      date: new Date(Date.now())
   },
   {
      name: "Superlight",
      style: "Scottish Ale",
      abv: 2.4,
      ibu: 22,
      date: new Date(Date.now())
   },
   {
      name: "Colonialist's Dream Hazy IPA",
      style: "American IPA",
      abv: 6.8,
      ibu: 21,
      date: new Date(Date.now())
   },
   {
      name: "IHB American Wheat",
      style: "Wheat",
      abv: 5.1,
      date: new Date(Date.now())
   },
   {
      name: "ESB",
      style: "Extra Special Bitter / Strong Bitter",
      abv: 6.25,
      date: new Date(Date.now())
   },
   {
      name: "Gingerbread Imperial Stout",
      style: "Russian Imperial Stout",
      abv: 9.9,
      ibu: 59,
      date: new Date(Date.now())
   },
   {
      name: "Pumpkin Poltergeist",
      stlye: "Barleywine",
      abv: 8.8,
      description: "This twist on a seasonal favorite is a barleywine you are sure to love. Brewed with real pumpkin, spices and ghost peppers for an extra kick.",
      date: new Date(Date.now())
   },
   {
      name: "Blonde",
      stlye: "Blonde Ale",
      abv: 5.2,
      description: "This blonde ale is the perfect gateway into the dangerous world of craft beer. Light and refreshing with a full bodied taste.",
      date: new Date(Date.now())
   },
   {
      name: "Pumpkin Barleywine",
      style: "Barleywine",
      abv: 8.8,
      description: "American Barleywine brewed with fresh pumpkin and spices.",
      date: new Date(Date.now())
   },
   {
      name: "Ginger Blonde",
      style: "Blonde Ale",
      abv: 4.8,
      description: "A Blonde that slaps you in the face with ginger",
      date: new Date(Date.now())
   },
   {
      name: "Mardi Gras Rouge",
      style: "Irish Red Ale",
      abv: 5.2,
      ibu: 24,
      description: "Medium bodied and slightly sweet ale with a biscuit note at the finish. Balanced with clean and subtle citrusey hops.",
      date: new Date(Date.now())
   },
   {
      name: "One Hop Pale Ale",
      stlye: "Pale Ale",
      abv: 6.9,
      ibu: 75,
      description: "American Pale Ale created with Canadian Redvine Hops grown locally here in Mobile.",
      date: new Date(Date.now())
   },
   {
      name: "Kovid Kolsch",
      style: "Kolsch",
      abv: 5.3,
      description: "Ben's beer brewed during quarantine; perfect for the summer!",
      date: new Date(Date.now())
   },
   {
      name: "Imperialist Nightmare",
      style: "Engligh IPA",
      abv: 7.9,
      ibu: 70,
      description: "Classic style English IPA. Made with single hop and single malt. The hop being East Kent in the true English fashion. This beer is truely a time machine.",
      date: new Date(Date.now())
   },
   {
      name: "Satsuma Wheat",
      style: "American Wheat",
      abv: 5.1,
      ibu: 20,
      description: "This brew was created using a variation of our American Wheat. The amount of honey malt was reduced, giving a lighter color to the beer. And most important, we received a load of locally grown satsuma oranges which were juiced and added to the end of the boil. The result is a light and creamy wheat beer with a distinct yet subtle orange flavor.",
      date: new Date(Date.now())
   },
   {
      name: "Wheaty McBeerface",
      style: "Wheat",
      abv: 4.1,
      date: new Date(Date.now())
   },
   {
      name: "Marzen",
      style: "Marzen",
      abv: 6.5,
      date: new Date(Date.now())
   },
   {
      name: "Pumpkin Blonde",
      style: "Blonde Ale",
      abv: 4.7,
      ibu: 17,
      description: "American blonde ale base brewed with fresh pumpkin meat and subtle spices.",
      date: new Date(Date.now())
   },
   {
      name: "Czech Pilsner",
      style: "Pilsner",
      abv: 4.2,
      date: new Date(Date.now())
   },
   {
      name: "IHB Blonde Ale",
      style: "Blonde Ale",
      abv: 4.7,
      date: new Date(Date.now())
   },
   {
      name: "Hunter Pale Ale",
      style: "American Pale Ale",
      abv: 7,
      ibu: 38,
      description: "Wonderfully drinkable APA",
      date: new Date(Date.now())
   },
   {
      name: "Nightmare IPA",
      style: "American IPA",
      abv: 7,
      date: new Date(Date.now())
   },
   {
      name: "Iron Hand Cider",
      style: "Cider",
      abv: 4.5,
      date: new Date(Date.now())
   },
   {
      name: "Sixty Schilling",
      style: "Scottish Ale",
      abv: 4.5,
      date: new Date(Date.now())
   },
   {
      name: "Friends in Low Places",
      style: "New England IPA",
      abv: 7.4,
      description: "Hazy, citrusy, light and a great beach beer",
      date: new Date(Date.now())
   }
];

db.Beer
   .remove({})
   .then(()=> db.Beer.collection.insertMany(beerSeed))
   .then(data => {
      console.log(data.result.n + " records inserted!");
      process.exit(0);
   })
   .catch(err => {
      console.error(err);
      process.exit(1);
   });