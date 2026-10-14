// Challenge 8: Festival Statistics

let attendees = [
    { name: "Lebo", age: 22, ticket: "General", hasTicket: true, checkedIn: false, spend: 350 },
    { name: "Aisha", age: 19, ticket: "VIP", hasTicket: true, checkedIn: false, spend: 1200 },
    { name: "Thabo", age: 17, ticket: "General", hasTicket: true, checkedIn: false, spend: 250 },
    { name: "Naledi", age: 25, ticket: "VIP", hasTicket: true, checkedIn: false, spend: 850 },
    { name: "Jason", age: 31, ticket: "General", hasTicket: false, checkedIn: false, spend: 0 },
    { name: "Zanele", age: 20, ticket: "General", hasTicket: true, checkedIn: false, spend: 650 },
    { name: "Karabo", age: 16, ticket: "VIP", hasTicket: true, checkedIn: false, spend: 900 },
    { name: "Michael", age: 28, ticket: "General", hasTicket: true, checkedIn: false, spend: 450 }
   ]

// Initialize the counters
let totalAttendees = 0;
let validTickets = 0;
let invalidTickets = 0;
let under18 = 0;
let vipCount = 0;
let generalCount = 0;
let totalSpend = 0;
let highestSpender = null;

// Loop through attendees
for (const person of attendees) {
  totalAttendees++;

  if (person.hasTicket) {
    validTickets++;
  } else {
    invalidTickets++;
  }

  if (person.age < 18) {
    under18++;
  }

  if (person.ticketType === "VIP") {
    vipCount++;
  } else if (person.ticketType === "General") {
    generalCount++;
  }

  totalSpend += person.spend;

  if (highestSpender === null || person.spend > highestSpender.spend) {
    highestSpender = person;
  }
}

// Calculate average spend
let averageSpend = totalSpend / totalAttendees;

// Display results
console.log(`Total attendees: ${totalAttendees}`);
console.log(`Valid tickets: ${validTickets}`);
console.log(`Invalid tickets: ${invalidTickets}`);
console.log(`Under 18 attendees: ${under18}`);
console.log(`VIP ticket holders: ${vipCount}`);
console.log(`General ticket holders: ${generalCount}`);
console.log(`Total amount spent: R${totalSpend}`);
console.log(`Average spend per attendee: R${averageSpend.toFixed(2)}`);
console.log(`Highest spender: ${highestSpender.name} (R${highestSpender.spend})`);