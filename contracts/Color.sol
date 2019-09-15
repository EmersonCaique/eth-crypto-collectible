pragma solidity 0.5.0;


import "@openzeppelin/contracts/token/ERC721/ERC721Full.sol";

contract Color is ERC721Full {
    constructor() ERC721Full("Color", "COLOR") public {

    }
}