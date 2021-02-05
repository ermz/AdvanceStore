const AdvanceStore = artifacts.require("AdvanceStore");

contract("AdvanceStore", () => {
	//mocha under the hood
	let advanceStore = null;
	before(async () => {
		advanceStore = await AdvanceStore.deployed();
	})

	it("Should add an element to the ids array", async () => {
		await advanceStore.add(3);
		const result = await advanceStore.ids(0);
		assert(result == 3);
	});

	it("Should get an element of the ids array ", async () => {
		await advanceStore.add(4);
		const result = await advanceStore.get(1);
		assert(result == 4);
	});

	it("Should return ids array", async () => {
		const result = await advanceStore.getAll();
		assert(result.length == 2);
		//.map turns the result raw data into a number, ex. [3, 4]
		const ids = result.map(id => id.toNumber());
		assert.deepEqual(ids, [3, 4]);
	});

	it("Should return the correct ids array length", async () => {
		await advanceStore.add(42);
		await advanceStore.add(43);
		const result = await advanceStore.length();
		assert(result == 4);
	});
});