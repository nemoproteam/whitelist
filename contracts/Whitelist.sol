// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Whitelist {
    /*
     - number max whitelist
     - save address to white list
    */

    uint256 public numMaxWhitelist;
    mapping(address => bool) whiteList;

    uint256 numCurrentWhiteList;

    constructor(uint256 _numMaxWhitelist) {
        numMaxWhitelist = _numMaxWhitelist;
    }

    function handleWhiteList() external {
        require(
            numCurrentWhiteList < numMaxWhitelist,
            "Quantity Address Max Whitelist"
        );
        require(!whiteList[msg.sender], "You exist Whitelist");
        whiteList[msg.sender] = true;
        numCurrentWhiteList++;
    }
}
