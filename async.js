// Mock database with 5 student records
const studentDatabase = [
    { id: 1, name: "Ntiyiso Moraba", course: "Software Testing", status: "Active" },
    { id: 2, name: "Thabo Khoza", course: "Web Development", status: "Completed" },
    { id: 3, name: "Lerato Mashego", course: "Cybersecurity", status: "Active" },
    { id: 4, name: "Sipho Nkosi", course: "Data Analytics", status: "Pending" },
    { id: 5, name: "Annah Mokoena", course: "IT Support", status: "Active" }
];

// 1. Synchronous JavaScript Example
// This function runs sequentially, line by line, exactly in order.
function runSynchronousDemo() {
    console.log("--- Task 1: Synchronous Code Starting ---");
    console.log("Step 1: Fetching database configuration...");
    console.log("Step 2: Connection verified.");
    console.log("Step 3: Synchronous process finished successfully.");
}

// Execute the synchronous function right away
runSynchronousDemo();


// 2. Asynchronous JavaScript Example
// This function uses setTimeout to delay printing the data by 3 seconds.
function fetchDatabaseWithDelay() {
    console.log("\n--- Task 2: Starting Asynchronous Fetch (Waiting 3 seconds...) ---");

    setTimeout(function() {
        console.log("Data successfully retrieved from studentDatabase:");
        console.table(studentDatabase); // console.table displays the array as a neat grid
    }, 3000); // 3000 milliseconds = 3 seconds
}

// Call the async function
fetchDatabaseWithDelay();