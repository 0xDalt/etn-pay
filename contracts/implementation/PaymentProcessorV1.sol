// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

// This contract handles the basic payment processing functionality
// It allows users to create payments associated with sellers and
// keeps track of all payment details in a structured way
contract PaymentProcessorV1 {
    // Payment struct defines how each payment's data is organized
    // Think of it like a detailed receipt for each transaction
    struct Payment {
        address buyer;      // Who sent the payment (like the customer's ID)
        address seller;     // Who will receive the payment (like the store's ID)
        uint256 amount;     // How much ETN was sent
        uint8 status;       // Current state of the payment (0 = pending)
        uint256 timestamp;  // When the payment was created (blockchain time)
    }
    
    // This mapping is like a giant ledger book
    // Each payment gets a unique ID (like a page number) that points to its details
    mapping(uint256 => Payment) public payments;
    
    // Keeps track of how many payments have been made
    // Also used to generate new payment IDs
    uint256 public paymentCount;

    // When someone wants to make a payment, they call this function
    // It's like opening a new page in our ledger and recording the transaction
    function initiatePayment(address seller) external payable returns (uint256) {
        // Get a new payment ID by using (and then incrementing) our counter
        uint256 paymentId = paymentCount++;
        
        // Create and store the payment details
        payments[paymentId] = Payment(
            msg.sender,     // The person calling this function is the buyer
            seller,         // The seller's address provided as an argument
            msg.value,      // The amount of ETN sent with this transaction
            0,             // Start with pending status
            block.timestamp // Current block time when this happens
        );

        // Return the payment ID so the buyer can reference it later
        return paymentId;
    }
}