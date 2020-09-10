"use strict";

const HookMap = require('../HookMap')
const SyncHook = require('../SyncHook')

describe('HookMap', () => {
	it('should create HookMap', async(done) => {
		const h0 = new HookMap();
		done();
	})

	it('should create HookMap with keys', async() => {
		const h0 = new HookMap(() => new SyncHook(["options"]));
		const mock0 = jest.fn();

		h0.for('key0').tap('test0', mock0)
		h0.for('key0').call()

		expect(mock0).toHaveBeenCalled()
	})


	it('should create HookMap with keys and tap with options', async() => {
		const h0 = new HookMap(() => new SyncHook(["options"]));
		const mock0 = jest.fn();
		const mockOptions = {};

		h0.for('key0').tap({ name:'test0', }, mock0)
		h0.for('key0').call(mockOptions)

		expect(mock0).toHaveBeenCalledWith(mockOptions)
	})
})
