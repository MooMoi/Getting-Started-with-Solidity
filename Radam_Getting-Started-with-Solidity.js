pragma solidity 0.8.18;

contract MyToken {
    // Public variables to store token details
    string public name = "MyToken";
    string public symbol = "MTK";
    uint public totalSupply = 0;

    // Mapping to track balances
    mapping(address => uint) public balances;

    // Mint function to create tokens
    function mint(address to, uint value) public {
        totalSupply += value;
        balances[to] += value;
    }

    // Burn function to destroy tokens
    function burn(address from, uint value) public {
        require(balances[from] >= value, "Insufficient balance to burn");
        totalSupply -= value;
        balances[from] -= value;
    }
}
