document.addEventListener("DOMContentLoaded", function() {
  const book = document.getElementById("book");
  const contact= document.getElementById("contact");
  const bookMessage= document.getElementById("bookMessage");
  const contactMessage= document.getElementById("contactMessage");

  book.addEventListener("submit", function(event) {
    event.preventDefault();
    bookMessage.textContent = "YOUR TICKET HAS BEEN BOOKED";
  });

  contact.addEventListener("submit", function(event) {
    event.preventDefault();
    contactMessage.textContent = "SUBMITTED";
  });
});
