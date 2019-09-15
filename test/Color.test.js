const Color = artifacts.require('./Color.sol')

require('chai')
    .use(require('chai-as-promised'))
    .should()


contract('Color', (accounts) => {
    let contract;

    before(async () => {
        contract = await Color.deployed()
    })

    describe('Deploymet', async () => {
        it('Deploys successfully', async () => {
            const address = contract.address
            assert.notEqual(address, '')
            assert.notEqual(address, 0x0)
            assert.notEqual(address, null)
            assert.notEqual(address, undefined)
        })

        it('Has a name', async () => {
            const name = await contract.name()
            assert.equal(name, 'Color');
        })

        it('Has a symbol', async () => {
            const symbol = await contract.symbol()
            assert.equal(symbol, 'COLOR');
        })
    })

    describe('Minting', async () => {
        it('Create a new token', async () => {
            const result = await contract.mint('#FFFFF');
            const totalSupply = await contract.totalSupply();

            assert.equal(totalSupply, 1);
            const event = result.logs[0].args
            assert.equal(event.tokenId.toNumber(), 1)
            assert.equal(event.from, '0x0000000000000000000000000000000000000000', 'From is correct');
            assert.equal(event.to, accounts[0], 'To is correct');

            await contract.mint('#FFFFF').should.be.rejected;
        })
    })
})