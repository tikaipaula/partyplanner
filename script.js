let guestList = [];

function setPartyDetails() {
  const date = document.getElementById("party-date").value;
  const description = document.getElementById("party-description").value;
  const message = document.getElementById("invite-message").value;

  if (!date || !description || !message) {
    alert("Please fill out all party details!");
    return;
  }

  document.getElementById("party-info").innerText = `Date: ${date}\n${description}`;
  document.getElementById("invite-text").innerText = message;
  document.getElementById("invite-section").classList.remove("hidden");
}

function registerGuest() {
  const firstName = document.getElementById("first-name").value.trim();
  const lastName = document.getElementById("last-name").value.trim();

  if (!firstName || !lastName) {
    alert("Please enter your full name.");
    return;
  }

  guestList.push({ firstName, lastName });

  document.getElementById("first-name").value = "";
  document.getElementById("last-name").value = "";

  renderGuestList();
}

function renderGuestList() {
  const list = document.getElementById("guest-list");
  list.innerHTML = "";

  guestList.forEach((guest, index) => {
    const li = document.createElement("li");
    li.innerText = `${guest.firstName} ${guest.lastName}`;
    list.appendChild(li);
  });
}
