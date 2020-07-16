const magicBook = {
  boomSpell: 'Asda masasda',
  soupSpell: 'Dase feads',
};

const kettle = {
  material: 'metal',
  result: null,
  ingridients: {
    ingridient1: 'nails',
    ingridient2: 'bat heads',
  },
  shuffle() {
    console.log('Shuffling...')
  },
  add(key, value) {
    console.log('Adding...', key, value);
    this.ingridients[key] = value;
    this.shuffle();    
  },
};

kettle.spellTheCat = function () {
  console.log(this.material);
  this.shuffle()
};

kettle.spellTheCat();

kettle.add('ing3', 'teeth');

kettle.add('ing4', 'banana');

kettle.add('ing5', 'poo');

magicBook.spellTheCat = kettle.spellTheCat;



const pick = (obj, key) => obj[key];

// function pick(obj, key) {
//   return obj[key];
// };




