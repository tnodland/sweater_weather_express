var express = require("express");
var router = express.Router();
var User = require('../../../models').User;
var fetch = require("node-fetch");
require('dotenv').config();

router.get("/", async (req, res, next) => {
  try {
    let user = await User.findOne({ where: {api_key: req.body.api_key}})
    if(!user) {
        res.status(401).send(JSON.stringify('Invalid/Missing API'));
    } else {
      let location = req.query.location
      let googleFetch = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.google_key}`)
      let googleJson = await googleFetch.json();
      let coordinates = json["results"][0]["geometry"]["location"];
      let lat = coordinates["lat"];
      let lng = coordinates["lng"];
      let darkskyKey = process.env.darksky_key;
      let forecast = await fetch(`https://api.darksky.net/forecast/${key}/${lat},${long}?exclude=minutely`)
      let darkskyJson = await forecastResponse.json();
      res.status(200).send(JSON.stringify(parsedWeather(location, darkskyJson)));
    }
  }
  catch(error) {
    res.status(500).send({ error })
  }
})

function parsedWeather(address, weather) {
  return {
    "location": address,
    "currently": weather["currently"],
    "hourly": weather["hourly"],
    "daily": weather["daily"]
  };
}

module.exports = router;
