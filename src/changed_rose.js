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
    else if (this.quality >= 1)
      this.quality--;
  }
}

class Common extends Item {
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
  updateQuality(){
  }
}

class StagePass extends Item {
  constructor(name, sell_in, quality){
    super(name, sell_in, quality);
  }
  updateQuality () {
    this.sell_in--;
    if (this.quality < 50) {
      if (this.sell_in <= 0)
        this.quality = 0;
      else if (this.sell_in <= 5 && this.sell_in > 0)
        this.quality += 3;
      else if (this.sell_in <= 10 && this.sell_in > 5)
        this.quality += 2;
      else
        this.quality++;
    }
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
    else if (this.quality === 1)
      this.quality--;
    else if (this.quality >= 2)
      this.quality -= 2;
  }
}

const items = [];

const vest_dex = new Common('+5 Dexterity Vest', 10, 20);
const elixir_mongoose = new Common('Elixir of the Mongoose', -1, 7)
const silver_armor = new Common('Silver Cuirass', 3, 0)
const cheese_brie = new AgedCheese('Aged Brie', 2, 0);
const sulfuras = new Legendary('Sulfuras, Hand of Ragnaros', 0, 80)
const backstage_TAFKA = new StagePass('Backstage passes to a TAFKAL80ETC concert', 15, 20)
const backstage_TAFKA2 = new StagePass('7 days left to a TAFKAL80ETC concert', 7, 20)
const backstage_TAFKA3 = new StagePass('3 days left to a TAFKAL80ETC concert', 3, 20)
const backstage_TAFKA4 = new StagePass('Expired pass to a TAFKAL80ETC concert', 1, 20)
const conjured_hpCake = new Conjured('Conjured HP Cake', 4, 10)
const conjured_manaCake = new Conjured('Conjured Mana Cake', 0, 10)

items.push(vest_dex, elixir_mongoose, silver_armor, cheese_brie, sulfuras, backstage_TAFKA, backstage_TAFKA2, backstage_TAFKA3, backstage_TAFKA4, conjured_manaCake, conjured_hpCake);

function passOneDay() {
  for (let item of items){
    console.log("======================================================================")
    console.log(item);
    // console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(item)));
    item.updateQuality();
    console.log(item);
  }
}

passOneDay();