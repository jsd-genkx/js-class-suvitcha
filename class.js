"use strict";
// =======================================================
// 🛠️ EXERCISE: PRODUCT CLASS
// =======================================================
// Follow each step and fill in the code where marked
// Test your work by running the test section at the bottom
// =======================================================

// ✅ STEP 1: Create a custom ValidationError class
// - It should extend Error
// - In constructor, call super(message) and set this.name = "ValidationError"
// ✏️ YOUR CODE HERE

// ✅ STEP 2: Create a Product class
// Requirements:
// - Private field: #price
// - constructor(name, price, manufacturedDate)
//     → call Product.validateName(name)
//     → set price using setter
//     → store manufacturedDate
// - getter and setter for price
//     → setter must throw ValidationError if price < 0
// - getInfo(): return "<name> costs $<price>"
// - applyDiscount(percent): subtract discount using Math.floor
// - getAge(): return days old since manufacturedDate
// - static validateName(name): throw ValidationError if name is empty or shorter than 2 characters
// ✏️ YOUR CODE HERE

// ✅ STEP 3: Create subclasses LandProduct and SeaProduct
// - both extend Product
// - override getInfo() to prefix "[Land]" or "[Sea]" before the parent's getInfo()
// ✏️ YOUR CODE HERE

// ✅ STEP 4: Test your code
// After you finish implementing, uncomment the code below and run to see if it works.

/*
try {
  const apple = new LandProduct("Apple", 100, new Date(2025, 6, 1));
  console.log(apple.getInfo()); // [Land] Apple costs $100
  apple.applyDiscount(10);
  console.log(apple.getInfo()); // [Land] Apple costs $90
  console.log("Days old:", apple.getAge());

  const tuna = new SeaProduct("Tuna", 200, new Date(2025, 6, 10));
  console.log(tuna.getInfo()); // [Sea] Tuna costs $200
  tuna.applyDiscount(5);
  console.log(tuna.getInfo()); // [Sea] Tuna costs $190

  // Uncomment below to test error
  // Product.validateName(""); // should throw ValidationError
} catch (err) {
  if (err instanceof ValidationError) {
    console.error("Validation failed:", err.message);
  } else {
    console.error("Error:", err.message);
  }
}
*/

// ===============================
// ✅ BONUS (Optional)
// - Create DigitalProduct extends Product
//   → override getInfo() with "[Digital]" prefix
//   → override getAge() to log "Not applicable" and return null
// ===============================
