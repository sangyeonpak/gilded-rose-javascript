class Item {
  constructor(name, sell_in, quality){
    this.name = name;
    this.sell_in = sell_in;
    this.quality = quality;
  }
  updateQuality(){
    this.sell_in--;
    if (this.quality >= 2 && this.sell_in < 0)
      this.quality -= 2;
    if (this.quality >= 1)
      this.quality--;
  }
}

class Regular extends Item {
  constructor(name, sell_in, quality){
    super(name, sell_in, quality);
  }
  updateQuality () {
    super.updateQuality();
  }
}

class AgedCheese extends Item {
  constructor(name, sell_in, quality){
    super(name, sell_in, quality);
  }
  updateQuality () {
    this.sell_in--;
    if (this.quality < 50)
      this.quality++;
  }
}

class Legendary extends Item {
  constructor(name, sell_in, quality){
    super(name, sell_in, quality);
  }
}

class StagePass extends Item {
  constructor(name, sell_in, quality){
    super(name, sell_in, quality);
  }
  updateQuality () {
    this.sell_in--;
    if (this.quality < 50) {
      if (this.sell_in <= 10)
      this.quality += 2;
      if (this.sell_in <= 5)
      this.quality += 3;
    }
    if (this.sell_in === 0)
      this.quality = 0;
  }
}

class Conjured extends Item {
  constructor(name, sell_in, quality){
    super(name, sell_in, quality);
  }
  updateQuality () {
    this.sell_in--;
    if (this.quality >= 4 && this.sell_in < 0)
      this.quality -= 4;
    if (this.quality >= 2)
      this.quality -= 2;
    if (this.quality === 1)
      this.quality--;
  }
}

const items = [];

const vest_dex = new Regular('+5 Dexterity Vest', 10, 20);
const cheese_brie = new AgedCheese('Aged Brie', 2, 0);
const elixir_mongoose = new Regular('Elixir of the Mongoose', 5, 7)
const sulfuras = new Legendary('Sulfuras, Hand of Ragnaros', 0, 80)
const backstage_TAFKA = new StagePass('Backstage passes to a TAFKAL80ETC concert', 15, 20)
const conjured_manaCake = new Conjured('Conjured Mana Cake', 3, 6)

items.push(vest_dex, cheese_brie, elixir_mongoose, backstage_TAFKA, conjured_manaCake);

function passOneDay() {
  for (let item of items){
    console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(item)));
  }
}

passOneDay();