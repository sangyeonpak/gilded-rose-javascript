describe("update_quality", function() {
  it("degrades an item twice as fast, when sell_in days is less than zero", function () {
    items.push(new Item("Poisoned Dagger", -5, 20));
    update_quality();
    const updatedItem = items[6];
    expect(updatedItem.quality).toEqual(18);
  })
  it("does not reduce the quality of an item that is already zero", function () {
    items.push(new Item("Bramble Vest", 8, 0));
    update_quality();
    const updatedItem = items[7];
    expect(updatedItem.quality).toEqual(0);
  })
  it("Aged Brie increases in quality the older it gets", function () {
    update_quality();
    console.log(items[1]);
    const agedBrie = items[1];
    expect(agedBrie.quality).toEqual(1);
  })
});