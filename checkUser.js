import guests from "./data/guests";

let checkUser = (accessCode) => {
  let actualGuest = [];
  guests.forEach((guest) => {
    if (guest.accessCode == accessCode) {
      actualGuest.push(guest);
    }
  });
  if (actualGuest.length > 0) {
    return actualGuest[0];
  } else {
    return false;
  }
};

export default checkUser;
