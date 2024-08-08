// Flyweight class
class Character {
  constructor(symbol) {
    this.symbol = symbol;
  }

  render(context) {
    console.log(`Rendering character '${this.symbol}' in context ${context}`);
  }
}

// Flyweight factory class
class CharacterFactory {
  static characters = {};

  static getCharacter(symbol) {
    if (!CharacterFactory.characters[symbol]) {
      CharacterFactory.characters[symbol] = new Character(symbol);
    }
    return CharacterFactory.characters[symbol];
  }
}

// Client code
const characters = [
  CharacterFactory.getCharacter("A"),
  CharacterFactory.getCharacter("B"),
  CharacterFactory.getCharacter("A"),
  CharacterFactory.getCharacter("C"),
  CharacterFactory.getCharacter("B"),
  CharacterFactory.getCharacter("A"),
];

characters.forEach((character, index) => {
  character.render(`context ${index}`);
});
