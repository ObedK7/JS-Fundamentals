// Get all command-line arguments
const args = process.argv;

// Calculate how many arguments the user actually passed
const count = args.length - 2;

// Check the number of arguments and print the message
if (count === 0) {
    console.log("No argument");
} else if (count === 1) {
    console.log("Argument found");
} else {
    console.log("Arguments found");
}
