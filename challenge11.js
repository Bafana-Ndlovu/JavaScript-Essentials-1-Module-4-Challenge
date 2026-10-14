// Challenge 11: Closing-Time Countdown

// Countdown from 10 minutes to 1 minute
for (let minutes = 10; minutes >= 1; minutes--) {
  console.log(`Festival closes in ${minutes} minute${minutes > 1 ? "s" : ""}...`);

  if (minutes === 5) {
    console.log("WARNING: LAST ENTRY HAS ENDED");
  } else if (minutes === 2) {
    console.log("PLEASE PROCEED TO THE EXIT");
  }
}

// After countdown ends
console.log("FESTIVAL CLOSED");