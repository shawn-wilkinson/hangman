import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const gameSchema = new Schema({
  playerName: String,
  createdAt: { type: Date, default: Date.now },
  timeLeft: { type: Number, default: 100 },
  word: String,
  guesses: { type: Array, default: [] },
  didWin: { type: Boolean, default: false },
});

module.exports = mongoose.model('Game', gameSchema);
