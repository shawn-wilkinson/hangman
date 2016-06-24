/* eslint-disable new-cap */

import express from 'express';
const router = module.exports = express.Router();
import Game from '../models/game';

router.post('/', (req, res) => {
  // const g = new Game(req.body);
  // g.save(() => {
  //   res.send(g);
  // });
  var a = { wordArray: 'taco', guessArray: [1,2,3], attempts: 10};
  res.send(a);

});
