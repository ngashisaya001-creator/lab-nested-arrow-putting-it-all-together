//Step 1: Define the createLoginTracker function (Outer Function)
// This is the OUTER function that takes a userInfo object as a parameter
// userInfo contains: { username: "user1", password: "password123" }
// The outer function initializes the login tracking and returns the inner function
function createLoginTracker(userInfo) {
 
  // Initialize Login Tracking
  // 'attemptCount' is a CLOSURE variable — it lives inside createLoginTracker
  // but is accessible to the inner function via closure (scope chain)
  // It starts at 0 and increments with each login attempt
  let attemptCount = 0;
 
  // Define and Return an Inner Arrow Function
  // This inner arrow function is returned so the caller can invoke it
  // each time a user tries to log in with a password attempt
  // Arrow functions capture 'attemptCount' and 'userInfo' from the outer scope (closure)
  const loginAttempt = (passwordAttempt) => {
 
    // Step 2 - Increment attemptCount
    // Each time this inner function is called, increase the attempt counter by 1
    attemptCount++;
 
    // Step 2 - Account Lock Check
    // If attemptCount exceeds 3, the account is locked
    // No more login attempts are allowed — return lock message immediately
    if (attemptCount > 3) {
      return 'Account locked due to too many failed login attempts';
    }
 
    // Step 2 - Password Check
    // Compare the passwordAttempt (what user typed) with userInfo.password (the real password)
    if (passwordAttempt === userInfo.password) {
 
      // Passwords match AND attemptCount is 3 or less — login is successful
      return 'Login successful';
 
    } else {
 
      // Passwords do NOT match — return a message showing which attempt number this was
      // Format: "Login failed" with the attempt number so user knows how many tries remain
      return `Attempt ${attemptCount}: Login failed`;
    }
  };
 
  // Return the inner arrow function so it can be called from outside
  // This is what makes it a CLOSURE — loginAttempt keeps access to attemptCount and userInfo
  // even after createLoginTracker has finished executing
  return loginAttempt;
}
 
// Export the function so Jest tests can import and test it
module.exports = { createLoginTracker };
 