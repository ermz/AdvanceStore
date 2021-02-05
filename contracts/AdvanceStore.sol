pragma solidity ^0.7.5;

contract AdvanceStore {
	uint[] public ids;

	function add(uint id) public {
		ids.push(id);
	}

	function get(uint idx) view public returns (uint) {
		return ids[idx];
	}

	//for complex type you must specify memory storage location, ex uint[]
	function getAll() view public returns (uint[] memory) {
		return ids;
	}

	function length() view public returns (uint) {
		return ids.length;
	}
}