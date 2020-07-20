const router = require("express").Router();
const beerRoutes = require("./beers");

// Book routes
router.use("/beers", beerRoutes);

module.exports = router;
