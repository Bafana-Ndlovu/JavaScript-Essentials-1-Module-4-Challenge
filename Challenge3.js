// Challenge 3: Access Zones

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

   //
   for (const person of attendees) {
    if (person.age >= 18 && person.hasTicket === true) {
      // Entry approved, now assign wristband
      let wristband;
      switch (person.ticketType) {
        case "VIP":
          wristband = "GOLD WRISTBAND";
          break;
        case "General":
          wristband = "BLUE WRISTBAND";
          break;
        default:
          wristband = "UNKNOWN TICKET TYPE";
      }
      console.log(`${person.name} -> ENTRY APPROVED (${wristband})`);
    } else if (person.age < 18) {
      console.log(`${person.name} -> ENTRY DENIED: UNDER 18`);
    } else {
      console.log(`${person.name} -> ENTRY DENIED: NO VALID TICKET`);
    }
  }