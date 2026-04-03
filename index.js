//Implementing a login feature that allows a user to attempt login a limited number of times before the account becomes locked. This feature will demonstrate your skills in using nested functions and arrow functions, as well as managing scope.
// Function to create a login tracker as an outer function
function createLoginTracker(attemptCount) {
  let userInfo = {
    username: "user1",
    password:"password123",
  }



  // Inner function to handle login attempts
  const passwordAttempt = (username, password) => { // Using an arrow function for the inner function. 
    incrementAttempt(); // Increment the attempt count each time a login attempt is made
    if (username === userInfo.username && password === userInfo.password) { // Check if the provided credentials are correct
      console.log("Login successful!"); // If login is successful, reset the attempt count
      resetAttempt(); // Reset the attempt count after a successful login
    } else { // If login fails, log the failure and the current attempt count
      console.log("Login failed. Attempt " + attemptCount); 
    }
  }


   const  returnMessage = () => { // Using an arrow function to return a message based on the attempt count
    if (attemptCount >= 3) { // If the attempt count reaches 3 or more, lock the account
      console.log("Account locked due to too many failed login attempts.");}} }
  // Function to increment the attempt count
  function incrementAttempt() { // Increment the attempt count each time a login attempt is made
    attemptCount++;
    returnMessage(); // Call the returnMessage function to check if the account should be locked after incrementing the attempt count
  } 


const tracker = createLoginTracker(0); // Simulating login attempts
tracker.passwordAttempt("user1", "wrongpassword"); 
tracker.passwordAttempt("user1", "wrongpassword");
tracker.passwordAttempt("user1", "wrongpassword");
tracker.passwordAttempt("user1", "wrongpassword");
tracker.passwordAttempt("user1", "password123");
console.log("Final attempt count: " + tracker.attemptCount); 


module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
}; 