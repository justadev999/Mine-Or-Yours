// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "./IMineOrYours.sol";
import "./Ownable.sol";

contract MineOrYours is Ownable {
    uint8 public numOfPlayers;
    uint128 public totalBet;
    bool public isWinner;
    mapping(address => bool) private players;
    mapping(uint256 => address) private lutPlayers;
    address payable player1;
    address payable player2;

    enum Fires {
        RED,
        GREEN,
        BLUE
    }

    address playerID = address(bytes20(sha256(abi.encode(msg.sender))));

    uint8 public currentChoice;

    // function setChoice(uint8 _choice) public {
    //     playerChoice = Fires[_choice];
    //     currentChoice = playerChoice;
    // }

    // function setCurrentChoice(Fires _playerChoice, uint8 _index)
    //     public
    //     requireTwoPlayer
    // {}

    // function chooseRed() public {
    //     uint256 choice = Fires.RED;
    // }

    function setWinner(address payable _winner) public {}

    event Winner(address indexed _from, bool isWinner, uint256 totalBet);

    function addBet() public payable {
        // require(totalBet >= 1, "You need to bet something");
        address player = msg.sender;
        // totalBet = msg.value;
        if (!players[player]) {
            uint256 index = numOfPlayers++;
            players[player] = true;
            lutPlayers[index] = player;
        }
    }

    function setWinner() private {}

    modifier LimitWin(uint256 withdrawAmount) {
        require(withdrawAmount < (90 * totalBet) / 100, "Nope, too much bro");
        _;
    }

    function withdrawWin(uint256 withdrawAmount)
        external
        LimitWin(withdrawAmount)
    {
        payable(msg.sender).transfer(withdrawAmount);
    }

    function getAllPlayers() external view returns (address[] memory) {
        address[] memory _players = new address[](numOfPlayers);

        for (uint256 i = 0; i < numOfPlayers; i++) {
            _players[i] = lutPlayers[i];
        }
        return _players;
    }

    function getPlayerAtIndex(uint8 index) external view returns (address) {
        return lutPlayers[index];
    }

    receive() external payable {}
}
