// Challenge 9: Find the Biggest Spender

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
   
   // Start by assuming the first attendee is the biggest spender
   let biggestSpender = attendees[0];
   
   // Loop through the rest of the attendees
   for (const person of attendees) {
     if (person.spend > biggestSpender.spend) {
       biggestSpender = person; // update if someone spends more moore
     }
   }
   
   // Display the top customer
   console.log("===== TOP CUSTOMER =====");
   console.log(`Name: ${biggestSpender.name}`);
   console.log(`Amount Spent: R${biggestSpender.spend}`);
   console.log("Reward: Backstage Upgrade");