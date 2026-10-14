// Challenge 10: Venue Capacity

// Attendees list
const attendees = [
  { name: "Lebo", age: 21, hasTicket: true },
  { name: "Aisha", age: 20, hasTicket: true },
  { name: "Thabo", age: 16, hasTicket: true },
  { name: "Jason", age: 25, hasTicket: false },
  { name: "Naledi", age: 23, hasTicket: true },
  { name: "Zanele", age: 19, hasTicket: true },
  { name: "Karabo", age: 17, hasTicket: true },
  { name: "Michael", age: 30, hasTicket: true }
];

// Venue capacity
let capacity = 5;
let peopleInside = 0;

// Process attendees
for (const person of attendees) {
  if (person.age >= 18 && person.hasTicket === true) {
    peopleInside++;
    console.log(`${person.name} entered.`);
    console.log(`People inside: ${peopleInside} / ${capacity}`);

    if (peopleInside === capacity) {
      console.log("VENUE FULL");
      console.log("STOP ADMITTING PEOPLE");
      break; // stop processing once capacity is reached
    }
  } else {
    console.log(`${person.name} denied entry.`);
  }
}