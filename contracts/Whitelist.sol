// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Whitelist {
    uint256 public numMaxWhitelist;
    uint256 numCurrentWhiteList;
    mapping(address => bool) whiteList;
    address[] public whitelistedAddresses;

    constructor(uint256 _numMaxWhitelist) {
        numMaxWhitelist = _numMaxWhitelist;
    }

    function handleWhiteList() external {
        require(
            numCurrentWhiteList < numMaxWhitelist,
            "Quantity Address Max Whitelist"
        );
        require(!whiteList[msg.sender], "You exist Whitelist");
        whitelistedAddresses.push(msg.sender);
        whiteList[msg.sender] = true;
        numCurrentWhiteList++;
    }

    function checkWhiteList() external view returns (bool) {
        return whiteList[msg.sender];
    }

    function getNumberWhiteList() external view returns (uint256) {
        return numCurrentWhiteList;
    }

    function listWhiteList() external view returns (address[] memory) {
        return whitelistedAddresses;
    }
}
