const userProfile = {
  name: "Alice",
  age: 28,

  // Corrected: use backticks for template literal
  details() {
    return `${this.name} is ${this.age} years old.`;
  },

  updateAge(newAge) {
    if (newAge <= 0) {
      console.log("Invalid age.");
      return;
    }

    this.age = newAge;

    // Corrected: Call the method to get return value
    console.log(this.details());
  }
};

// ✅ Test cases
userProfile.updateAge(30);                 // Logs: Alice is 30 years old.
console.log(userProfile.details());        // Logs: Alice is 30 years old.
