// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

interface IOracle {
    function isAuthorized(address signer) external view returns (bool);
}

interface IERC20 {
    function transferFrom(address from, address to, uint256 amount) external returns (bool);
    function transfer(address to, uint256 amount) external returns (bool);
    function balanceOf(address owner) external view returns (uint256);
    function approve(address spender, uint256 amount) external returns (bool);
}

contract MockToken is IERC20 {
    string public name = "MockStablecoin";
    string public symbol = "MOCK";
    uint8 public decimals = 18;
    uint256 public totalSupply = 1_000_000 ether;

    mapping(address => uint256) public balanceOf;
    mapping(address => mapping(address => uint256)) public allowance;

    constructor() {
        balanceOf[msg.sender] = totalSupply;
    }

    function transfer(address to, uint256 amount) external override returns (bool) {
        require(balanceOf[msg.sender] >= amount, "no funds");
        balanceOf[msg.sender] -= amount;
        balanceOf[to] += amount;
        return true;
    }

    function approve(address spender, uint256 amount) external override returns (bool) {
        allowance[msg.sender][spender] = amount;
        return true;
    }

    function transferFrom(address from, address to, uint256 amount) external override returns (bool) {
        require(balanceOf[from] >= amount, "no funds");
        require(allowance[from][msg.sender] >= amount, "no allowance");
        balanceOf[from] -= amount;
        allowance[from][msg.sender] -= amount;
        balanceOf[to] += amount;
        return true;
    }
}

contract MockOracle is IOracle {
    mapping(address => bool) public authorized;
    function setAuthorized(address signer, bool isAuth) external { authorized[signer] = isAuth; }
    function isAuthorized(address signer) external view override returns (bool) { return authorized[signer]; }
}

contract MilestoneEscrow {
    struct Milestone {
        bytes32 name;
        uint256 pctRelease;
        uint256 deadline;
        uint256 penaltyBps;
        bool met;
        uint256 metAt;
    }

    address public buyer;
    address public seller;
    IERC20 public stablecoin;
    IOracle public oracle;
    uint256 public amount;
    Milestone[] public milestones;
    uint256 public released;

    constructor(address _seller, address _stablecoin, address _oracle) {
        buyer = msg.sender;
        seller = _seller;
        stablecoin = IERC20(_stablecoin);
        oracle = IOracle(_oracle);

        milestones.push(Milestone({
            name: "Delivered",
            pctRelease: 5000,                 // 50%
            deadline: block.timestamp + 1 days,
            penaltyBps: 500,                  // 5%
            met: false,
            metAt: 0
        }));

        amount = 1000 ether;                  // 1000 MOCK
    }

    function fund() external {
        require(msg.sender == buyer, "only buyer");
        require(stablecoin.transferFrom(buyer, address(this), amount), "transfer fail");
    }

    function markMilestone(uint256 idx) external {
        require(oracle.isAuthorized(msg.sender), "not oracle");
        Milestone storage m = milestones[idx];
        require(!m.met, "already met");
        m.met = true; m.metAt = block.timestamp;

        uint256 pct = m.pctRelease;
        if (m.metAt > m.deadline && m.penaltyBps > 0) {
            uint256 penalty = (pct * m.penaltyBps) / 10000;
            pct = pct > penalty ? pct - penalty : 0;
        }

        uint256 toRelease = (amount * pct) / 10000;
        released += toRelease;
        require(stablecoin.transfer(seller, toRelease), "payout fail");
    }

    function contractBalance() external view returns (uint256) {
        return stablecoin.balanceOf(address(this));
    }
}
