var express = require('express');
var router = express.Router();

var cors = require('cors');

const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
  name: String,
  price: Number,
  video: String,
  platform: Array,
  description: String,
  imageUrl: String
});

const Model = mongoose.model('GameModels', gameSchema);

/* GET users listing. */
router.get('/', function (req, res, next) {
  Model.find().then(models => {
    res.send(models);
  }).catch(err => {
    // Erreur avec mongo
  });
});

router.get('/:id', function (req, res, next) {
  Model.findById(req.params.id).then(models => {
    res.send(models);
  }).catch(err => {
    // Erreur avec mongo
  });
});

router.patch('/:id', (req, res, next) => {
  console.log(req.body);
  const id = req.params.id;
  Model.findByIdAndUpdate(id, { name: req.body.name, description: req.body.description, price: req.body.price }, { new: true }).then(modelSaved => {
    res.send(modelSaved);
  })
});

router.delete('/:id', (req, res, next) => {
  console.log(req.body);
  const id = req.params.id
  Model.findByIdAndDelete(id).then(modelDeleted => {
    res.send('deleted')
  })
});


//Récupère tous les models

// const model1 = new Model({name: 'Minecraft', price: 23.95, video: "https://www.youtube.com/embed/MmB9b5njVbA" ,platform: ['Windows','Mac','Linux'],description: "Minecraft is a sandbox video game developed by Mojang. The game was created by Markus \"Notch\" Persson in the Java programming language. Following several early test versions, it was released as a paid public alpha for personal computers in 2009 before releasing in November 2011, with Jens Bergensten taking over development. Minecraft has since been ported to several other platforms and is the best-selling video game of all time, with 200 million copies sold and 126 million monthly active users as of 2020." ,imageUrl: 'https://i.imgur.com/b12eoGp.jpg'})
//  model1.save().then(modelSaved => {
//  }).catch(err => {
// });

// const model2 = new Model({name: 'Half-Life : ALYX', price: 49.99, video: "https://www.youtube.com/embed/O2W0N3uKXmo" ,platform: ['Windows','Mac'],description: "Half-Life: Alyx is a 2020 virtual reality (VR) first-person shooter developed and published by Valve. Set between the events of Half-Life (1998) and Half-Life 2 (2004), players control Alyx Vance on a mission to seize a superweapon belonging to the alien Combine. Players use VR to interact with the environment and fight enemies, using \"gravity gloves\" to manipulate objects, similarly to the gravity gun from Half-Life 2. Traditional Half-Life elements return, such as physics puzzles, combat, exploration and survival horror elements." ,imageUrl: 'https://i.imgur.com/zvyLTj2.png'})
//  model2.save().then(modelSaved => {
//  }).catch(err => {
// });

// const model3 = new Model({name: 'Osu!', price: 0, video: "https://www.youtube.com/embed/JeYCJIRi7iQ" ,platform: ['Windows','Linux'],description: "osu! is a rhythm game primarily developed, published and created by Dean \"Peppy\" Herbert. Originally released for Microsoft Windows on September 16, 2007, the game has also been ported to macOS, Linux, Android and iOS. Its gameplay is inspired by titles such as Osu! Tatakae! Ouendan, Taiko no Tatsujin, Beatmania IIDX,[3] Elite Beat Agents, O2Jam, StepMania, and DJMax." , imageUrl: 'https://i.imgur.com/hY6Imll.png'})
//  model3.save().then(modelSaved => {
//  }).catch(err => {
// });

// const model4 = new Model({name: 'Tom Clancy\'s : Rainbow Six Siege', price: 19.99, video: "https://www.youtube.com/embed/N6d0wyShsyA",platform: ['Windows'],description: "Tom Clancy's Rainbow Six Siege is an online tactical shooter video game developed by Ubisoft Montreal and published by Ubisoft. It was released worldwide for Microsoft Windows, PlayStation 4, and Xbox One on December 1, 2015; the game was also released for PlayStation 5 and Xbox Series X/S exactly five years later on December 1, 2020. The game puts heavy emphasis on environmental destruction and cooperation between players. Each player assumes control of an attacker or a defender in different gameplay modes such as rescuing a hostage, defusing a bomb, and taking control of an objective within a room. The title has no campaign but features a series of short, offline missions called, \"situations\" that can be played solo. These missions have a loose narrative, focusing on recruits going through training to prepare them for future encounters with the \"White Masks\", a terrorist group that threatens the safety of the world." , imageUrl: 'https://i.imgur.com/IF3RnbZ.jpg'})
//  model4.save().then(modelSaved => {
//  }).catch(err => {
// });

// const model5 = new Model({name: 'Krunker.io', price: 0, video:"https://www.youtube.com/embed/zKt0EDa7G9o" ,platform: ['Windows','Mac','Linux'],description: "Shoot your way through 12 rotation maps to earn rewards. Master the highly skill-based movement system unique to Krunker. If dropping Nukes and Quick-scoping people in pubs isn't your thing, Krunker also offers thousands of custom games to choose from. Infected, Parkour, Free for All, Capture the Flag and much much more. With Krunker's robust modding and mapping tools - there are no limits to what you can create and experience.Krunker also features a Thriving Economy with thousands of Skins and Items to Unlock, Sell and Trade.Dedicated Servers on every Continent & an easy to use server browser. You can host your own custom server with 2 clicks!" , imageUrl: 'https://i.imgur.com/yuZUfv3.jpg'})
//  model5.save().then(modelSaved => {
//  }).catch(err => {
// });

// const model6 = new Model({name: 'Valorant', price: 0, video:"https://www.youtube.com/embed/IhhjcB2ZjIM" ,platform: ['Windows'],description: "Valorant (stylized as VALORANT) is a free-to-play hero shooter developed and published by Riot Games, for Microsoft Windows. First teased under the codename Project A in October 2019, the game began a closed beta period with limited access on April 7, 2020, followed by official release on June 2, 2020. Development of the game started in 2014." , imageUrl: 'https://i.imgur.com/H5OSXdf.jpg'})
//  model6.save().then(modelSaved => {
//  }).catch(err => {
// });

// const model7 = new Model({name: 'Pong', price: 0, video: "https://www.youtube.com/embed/j-Bk38xGgWA" ,platform: ['Linux'],description: "Pong is a table tennis–themed arcade video game, featuring simple two-dimensional graphics, manufactured by Atari and originally released in 1972. It was one of the earliest arcade video games; it was created by Allan Alcorn as a training exercise assigned to him by Atari co-founder Nolan Bushnell, but Bushnell and Atari co-founder Ted Dabney were surprised by the quality of Alcorn's work and decided to manufacture the game. Bushnell based the game's concept on an electronic ping-pong game included in the Magnavox Odyssey, the first home video game console. In response, Magnavox later sued Atari for patent infringement." , imageUrl: 'https://i.imgur.com/yNeHVV5.jpg'})
//  model7.save().then(modelSaved => {
//  }).catch(err => {
// });

// Model.find().then(models => {
//   console.log(models);
// }).catch(err => {
//   // Erreur avec mongo
// });


module.exports = router;
