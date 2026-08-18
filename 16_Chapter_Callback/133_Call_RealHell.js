// A realistic user checkout workflow with nested callbacks

function processOrder(userId, cartItems, userCallback) {
  // Step 1: Validate the user's account status
  console.log("Step 1: Validating user account...");
  db.findUser(userId, function (err, user) {
    if (err) {
      console.error("Step 1 FAILED: User fetch error -", err.message);
      return userCallback(new Error("Failed to fetch user: " + err.message));
    }

    if (!user.isActive) {
      console.error("Step 1 FAILED: User account is inactive");
      return userCallback(new Error("User account is inactive."));
    }

    console.log("Step 1 SUCCESS: User validated -", user.id);

    // Step 2: Verify inventory for all items in the cart
    console.log("Step 2: Checking inventory stock...");
    inventory.checkStock(cartItems, function (err, inStock) {
      if (err) {
        console.error("Step 2 FAILED: Inventory check error -", err.message);
        return userCallback(new Error("Inventory check failed: " + err.message));
      }

      if (!inStock) {
        console.error("Step 2 FAILED: Items out of stock");
        return userCallback(new Error("One or more items are out of stock."));
      }

      console.log("Step 2 SUCCESS: All items in stock");

      // Step 3: Calculate pricing, discounts, and taxes
      console.log("Step 3: Calculating total price...");
      pricing.calculateTotal(cartItems, user.discountCode, function (err, totalAmount) {
        if (err) {
          console.error("Step 3 FAILED: Pricing calculation error -", err.message);
          return userCallback(new Error("Pricing calculation failed: " + err.message));
        }

        console.log("Step 3 SUCCESS: Total amount calculated -", totalAmount);

        // Step 4: Charge the user's payment method
        console.log("Step 4: Processing payment...");
        paymentGateway.charge(user.paymentMethodId, totalAmount, function (err, transactionId) {
          if (err) {
            console.error("Step 4 FAILED: Payment processing error -", err.message);
            return userCallback(new Error("Payment processing failed: " + err.message));
          }

          console.log("Step 4 SUCCESS: Payment processed - Transaction ID:", transactionId);

          // Step 5: Reserve inventory items for shipping
          console.log("Step 5: Reserving inventory items...");
          inventory.reserveItems(cartItems, transactionId, function (err, reservationId) {
            if (err) {
              console.error("Step 5 FAILED: Inventory reservation error -", err.message);
              // Critical: Attempt refund if reservation fails
              console.log("Attempting automatic refund...");
              paymentGateway.refund(transactionId, function (refundErr) {
                if (refundErr) {
                  console.error("CRITICAL: Automatic refund failed!", refundErr);
                }
                return userCallback(new Error("Inventory reservation failed: " + err.message));
              });
              return;
            }

            console.log("Step 5 SUCCESS: Inventory reserved - Reservation ID:", reservationId);

            // Step 6: Create the order record in the database
            console.log("Step 6: Creating order record...");
            db.createOrder({ userId, cartItems, totalAmount, transactionId, reservationId }, function (err, order) {
              if (err) {
                console.error("Step 6 FAILED: Order creation error -", err.message);
                return userCallback(new Error("Failed to save order record: " + err.message));
              }

              console.log("Step 6 SUCCESS: Order created - Order ID:", order.id);

              // Step 7: Send confirmation email to customer
              console.log("Step 7: Sending confirmation email...");
              emailService.sendConfirmation(user.email, order.id, function (err) {
                if (err) {
                  // Log error, but still complete the order since payment & reservation succeeded
                  console.warn("Step 7 WARNING: Confirmation email failed -", err);
                } else {
                  console.log("Step 7 SUCCESS: Confirmation email sent");
                }

                // Step 8: Notify warehouse to dispatch shipment
                console.log("Step 8: Creating shipment label...");
                shippingService.createShipmentLabel(order, function (err, trackingNumber) {
                  if (err) {
                    console.warn("Step 8 WARNING: Shipment label creation failed -", err);
                  } else {
                    console.log("Step 8 SUCCESS: Shipment label created - Tracking:", trackingNumber);
                  }

                  // Final Success Callback
                  console.log("ORDER PROCESS COMPLETE - Status: SUCCESS");
                  userCallback(null, {
                    status: "SUCCESS",
                    orderId: order.id,
                    trackingNumber: trackingNumber || "PENDING",
                  });
                });
              });
            });
          });
        });
      });
    });
  });
}


// ...existing code...

// Mock database and services for testing
const db = {
  findUser: (id, cb) => cb(null, { id, isActive: true, discountCode: "SAVE10", paymentMethodId: "pm_123", email: "user@example.com" }),
  createOrder: (data, cb) => cb(null, { id: "order_456" })
};

const inventory = {
  checkStock: (items, cb) => cb(null, true),
  reserveItems: (items, txId, cb) => cb(null, "res_789")
};

const pricing = {
  calculateTotal: (items, discount, cb) => cb(null, 99.99)
};

const paymentGateway = {
  charge: (methodId, amount, cb) => cb(null, "txn_123"),
  refund: (txnId, cb) => cb(null, true)
};

const emailService = {
  sendConfirmation: (email, orderId, cb) => cb(null)
};

const shippingService = {
  createShipmentLabel: (order, cb) => cb(null, "TRACK123")
};

// Call the function to see console output
processOrder("user_001", [{ id: 1, qty: 2 }], (err, result) => {
  if (err) {
    console.error("FINAL ERROR:", err);
  } else {
    console.log("FINAL RESULT:", result);
  }
});