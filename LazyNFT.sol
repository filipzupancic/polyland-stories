// SPDX-License-Identifier: MIT
pragma solidity 0.7.4;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v3.4.0/contracts/token/ERC721/ERC721.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v3.4.0/contracts/utils/Counters.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v3.4.0/contracts/utils/ReentrancyGuard.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v3.4.0/contracts/access/Ownable.sol";

contract NFT is ERC721, Ownable, ReentrancyGuard {
    using SafeMath for uint256;
    using Address for address payable;
    using Counters for Counters.Counter;
    Counters.Counter public _tokenIds;

    address payable public vault;

    //mapping(address => uint256) public amountBought;

    //uint256 public constant maxTokenCount = 10000;
    //uint256 private releaseDate = 1633795200; //  9.10.2021 18:00 Sarajevo 
    //uint256 private maxPresale = 500;
    
    uint256 public constant devTeamCount = 500;
    uint256 public constant maxTokenCount = 10000 + devTeamCount; // total amounut including devteam and presale
    uint256 public releaseDate = 1631894400;
    uint256 public presaleReleaseDate = 1631808000;
    uint256 private constant maxPresale = 500 + devTeamCount; // how much is available in presale including devteam
    

    event WorkCreated(address recipient, uint256 tokenId, bool customItem, string customString);

    constructor() ERC721("Stories of Polyland", "SOP") Ownable() {
        vault = msg.sender;
    }

    modifier paymentRequired(uint256 quantity) {
        require(msg.value >= getCurrentPrice(quantity), "Error: Payment required, or value below price");
        //vault.sendValue(msg.value);
        vault.transfer(msg.value);
        _;
    }

    modifier isMintable(uint256 quantity) {
        require(block.timestamp >= presaleReleaseDate, "Error: Presale has not started yet");
        if (block.timestamp <= releaseDate){
            require(_tokenIds.current() + quantity -1  < maxPresale, "Error: Maximum number of tokens have been minted in Presale");

        } else {
            require(_tokenIds.current() + quantity -1  < maxTokenCount, "Error: Maximum number of tokens have been minted in Mainsale");

        }
        _;
    }
    
    modifier customerLimit(uint256 quantity){
        require(quantity <= 20, "Error: You want to buy more than 20 tokens");
        //require((amountBought[msg.sender] + quantity) <= 20, "Error: You want to buy more than 20 tokens");
        _;
    }
    
    
    function getTotalMinted() public view returns (uint256) {
        return _tokenIds._value;
    }

    function mint(uint256 quantity) public payable isMintable(quantity)  paymentRequired(quantity) customerLimit(quantity) returns (uint256) {

        for (uint i=0; i<quantity; i++) {
          _mintToken(msg.sender);
        }
        //amountBought[msg.sender] += quantity;
        return 1;
    }

    function getCurrentPrice(uint256 quantity) public view returns (uint256) {
        return _getCurrentPrice(quantity);
    }
    
    function currentSupply() public view returns (uint256) {
        return maxTokenCount - _tokenIds._value;
    }
    
    function _getCurrentPrice(uint256 amount) internal view returns (uint256) {
        /*
        if (_tokenIds._value  >= 9500 + devTeamCount) {
            return 0.009 ether* amount; // 9500 - 10000 0.09 ETH
        } else if (_tokenIds._value  >= 7500 + devTeamCount) {
            return 0.008 ether* amount; // 7501 - 9500 0.08 ETH
        } else if (_tokenIds._value >= 3500 + devTeamCount) {
            return 0.007 ether* amount; // 3501 - 7500 0.07 ETH
        } else if (_tokenIds._value  >= 1500 + devTeamCount) {
            return 0.006 ether* amount; // 1501 - 3500 0.06 ETH
        } else if (_tokenIds._value >= 500 + devTeamCount) {
            return 0.005 ether* amount; // 501 - 1500 0.05 ETH
        } else if (_tokenIds._value >= 10 + devTeamCount) {
            return 0.004 ether* amount; // 101 - 500 0.04 ETH
        } else {
            return 0.0005 ether* amount; // 0 - 100 0.005 ETH
        }
        
        */
        if (_tokenIds._value  >= 9500 + devTeamCount) {
            return 110 ether* amount; // 9500 - 10000 0.09 ETH
        } else if (_tokenIds._value  >= 7500 + devTeamCount) {
            return 100 ether* amount; // 7501 - 9500 0.08 ETH
        } else if (_tokenIds._value >= 3500 + devTeamCount) {
            return 90 ether* amount; // 3501 - 7500 0.07 ETH
        } else if (_tokenIds._value  >= 1500 + devTeamCount) {
            return 80 ether* amount; // 1501 - 3500 0.06 ETH
        } else if (_tokenIds._value >= 500 + devTeamCount) {
            return 70 ether* amount; // 501 - 1500 0.05 ETH
        } else if (_tokenIds._value >= 100 + devTeamCount) {
            return 60 ether* amount; // 101 - 500 0.04 ETH
        } else {
            return 10 ether* amount; // 0 - 100 0.005 ETH
        }
        
        
    }
    
    function transferMintTo(address reddemer, uint256 quantity) public onlyOwner{
        for (uint i=0; i<quantity; i++) {
          _mintToken(reddemer);
        }
    } 
    
    function setPresaleDate(uint256 date) public onlyOwner {
        presaleReleaseDate = date;
    }
    function setReleaseDate(uint256 date) public onlyOwner {
        releaseDate = date;
    }
    
    
    
    function _mintToken(
        address recipient
    ) private returns (uint256) {
        // Get current Item ID
        uint256 tokenId = _tokenIds.current();
        string memory toIdStr = uint2str(tokenId);
        // todo change to real uri
        string memory _tokenURI = string(abi.encodePacked("https://stories-of-polyland.com/json_folder/", toIdStr,  ".json"));


        // Mint user current tokenId
        _mint(recipient, tokenId);

        // Increment id
        _tokenIds.increment();

        _setTokenURI(tokenId, _tokenURI);
        emit WorkCreated(msg.sender, tokenId, true, _tokenURI);

        // Return tokenId
        return tokenId;
    }

    function uint2str(uint _i) internal pure returns (string memory _uintAsString) {
        if (_i == 0) {
            return "0";
        }
        uint j = _i;
        uint len;
        while (j != 0) {
            len++;
            j /= 10;
        }
        bytes memory bstr = new bytes(len);
        uint k = len - 1;
        while (_i != 0) {
            bstr[k--] = byte(uint8(48 + _i % 10));
            _i /= 10;
        }
        return string(bstr);
    }
} 
