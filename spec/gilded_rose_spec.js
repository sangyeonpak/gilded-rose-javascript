describe("update_quality", () => {
  it("degrades an item twice as fast, when sell_in days is less than zero", () => {
    const testItem = new Common("+5 Dexterity Vest", -1, 4);
    items.push(testItem);
    update_quality();
    expect(testItem.quality).toEqual(2);
    expect(testItem.sell_in).toEqual(-2);
  });

  it("does not reduce the quality of an item that is already zero", () => {
    const testItem = new Common("+5 Dexterity Vest", 4, 0);
    items.push(testItem);
    update_quality();
    expect(testItem.quality).toEqual(0);
  });

  it("increases the quality of items named 'Aged Brie' rather than decreasing it", () => {
    const testItem = new AgedCheese("Aged Brie", 10, 4);
    items.push(testItem);
    update_quality();
    expect(testItem.quality).toEqual(5);
  });

  it("does not increase the quality of an item with quality = 50", () => {
    const testItem = new AgedCheese("Aged Brie", 10, 50);
    items.push(testItem);

    update_quality();

    expect(testItem.quality).toEqual(50);
  });

  it("does not decrease the quality of items named 'Sulfuras, Hand of Ragnaros'", () => {
    const testItem = new Legendary("Sulfuras, Hand of Ragnaros", 0, 80);
    items.push(testItem);

    update_quality();

    expect(testItem.quality).toEqual(80);
    expect(testItem.sell_in).toEqual(0);
  });

  it("increases quality of backstage passes by 1 when there are 11 days or more", () => {
    const testItem = new StagePass(
      "Backstage passes to a TAFKAL80ETC concert",
      11,
      3
    );
    items.push(testItem);

    update_quality();

    expect(testItem.quality).toEqual(4);
  });

  it("increases quality of backstage passes by 2 when there are 10 days or less", () => {
    const testItem = new StagePass(
      "Backstage passes to a TAFKAL80ETC concert",
      9,
      4
    );
    items.push(testItem);

    update_quality();

    expect(testItem.quality).toEqual(6);
  });

  it("increases quality of backstage passes by 3 when there are 5 days or less", () => {
    const testItem = new StagePass(
      "Backstage passes to a TAFKAL80ETC concert",
      5,
      2
    );
    items.push(testItem);

    update_quality();

    expect(testItem.quality).toEqual(5);
  });

  it("sets quality of backstage passes to 0 when concert has ended", () => {
    const testItem = new StagePass(
      "Backstage passes to a TAFKAL80ETC concert",
      -1,
      7
    );
    items.push(testItem);

    update_quality();

    expect(testItem.quality).toEqual(0);
  });

  it("sets quality of backstage passes to 0 when concert has ended", () => {
    const testItem = new StagePass(
      "Backstage passes to a TAFKAL80ETC concert",
      -1,
      7
    );
    items.push(testItem);

    update_quality();

    expect(testItem.quality).toEqual(0);
  });

  it("decreases by 2 if sell_in is positive", () => {
    const testItem = new Conjured('Conjured HP Cake', 4, 10);
    items.push(testItem);
    update_quality();
    expect(testItem.quality).toEqual(8);
  })

  it("decreases by 4 if sell_in is negative", () => {
    const testItem = new Conjured('Conjured HP Cake', -1, 10);
    items.push(testItem);
    update_quality();
    expect(testItem.quality).toEqual(6);
  })
});