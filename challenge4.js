// Challenge 4: VIP Lounge Security

// Data provided for people attending the festive event.
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

   // Karabo has a valid and VIP ticket and, but Karabo the festive requires 18+ and he/she is 17 years.
   for (const person of attendees) {
    if (person.age >= 18 && person.hasTicket === true && person.ticketType === "VIP") {
      console.log(`${person.name} -> VIP LOUNGE ACCESS APPROVED`);
    } else if (person.age < 18) {
      console.log(`${person.name} -> VIP LOUNGE ACCESS DENIED: UNDER 18`);
    } else if (person.hasTicket === false) {
      console.log(`${person.name} -> VIP LOUNGE ACCESS DENIED: NO VALID TICKET`);
    } else if (person.ticketType !== "VIP") {
      console.log(`${person.name} -> VIP LOUNGE ACCESS DENIED: NOT A VIP TICKET`);
    }
  }
