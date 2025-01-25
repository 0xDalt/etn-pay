const { expect } = require("chai");
const { ethers } = require("hardhat");


describe("PaymentProcessor", function() {
    let paymentProcessor;
    let owner;
    let seller;
    let buyer;

    beforeEach(async function() {
        [owner, seller, buyer] = await ethers.getSigners();
        const PaymentProcessor = await ethers.getContractFactory("PaymentProcessorV1");
        paymentProcessor = await PaymentProcessor.deploy();
    });

    it("Should create a payment with correct details", async function() {
        const paymentAmount = ethers.parseEther("1.0");
        await paymentProcessor.connect(buyer).initiatePayment(
            seller.address,
            { value: paymentAmount }
        );
        const payment = await paymentProcessor.payments(0);
        expect(payment.buyer).to.equal(buyer.address);
        expect(payment.seller).to.equal(seller.address);
        expect(payment.amount).to.equal(paymentAmount);
        expect(payment.status).to.equal(0);
    });

    it("Should increment payment count after each payment", async function() {
        expect(await paymentProcessor.paymentCount()).to.equal(0);
        await paymentProcessor.connect(buyer).initiatePayment(
            seller.address,
            { value: ethers.parseEther("1.0") }
        );
        expect(await paymentProcessor.paymentCount()).to.equal(1);
    });
});