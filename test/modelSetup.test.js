const Models = require('../lib/index')
const db = require('./setup')


describe('Initializing models', () => {
	Object.keys(Models).map(async (model) => {
		test(`Loading: ${model}`, async () => {
			try {
				const rows = await db[model].findAll({ limit: 1 })
				const result = rows.every(row => row instanceof db[model])
				expect(result).toBeTruthy()
			} catch (error) {
				throw new Error(error)
			}
		})
	})	

})
