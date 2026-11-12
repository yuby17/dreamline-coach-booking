
// DREAMLINE WEBSITE JAVASCRIPT

// MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.textContent = isOpen ? "✕" : "☰";

});

// CLOSE MENU AFTER CLICKING A LINK

document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        menuToggle.textContent = "☰";

        menuToggle.setAttribute("aria-expanded", "false");

    });

});


// SET MINIMUM TRAVEL DATE

const travelDate = document.getElementById("travelDate");

const today = new Date();

const localToday = new Date(
    today.getTime() - today.getTimezoneOffset() * 60000
).toISOString().split("T")[0];

travelDate.min = localToday;


// BOOKING ENQUIRY FORM

const bookingForm = document.getElementById("bookingForm");

const bookingResult = document.getElementById("bookingResult");

bookingForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const from = document.getElementById("from").value;

    const to = document.getElementById("to").value;

    const date = travelDate.value;

    const passengers = document.getElementById("passengers").value;


    // CHECK DEPARTURE AND DESTINATION

    if (from === to) {

        bookingResult.style.color = "red";

        bookingResult.textContent =
            "Departure and destination cannot be the same.";

        return;

    }


    // CHECK TRAVEL DATE

    if (date < localToday) {

        bookingResult.style.color = "red";

        bookingResult.textContent =
            "Please select a valid future travel date.";

        return;

    }


    // DISPLAY ENQUIRY DETAILS

    bookingResult.style.color = "green";

    bookingResult.textContent =
        `Enquiry prepared! Journey: ${from} to ${to}. ` +
        `Travel date: ${date}. Passengers: ${passengers}. ` +
        "This is a demonstration only. No ticket has been booked.";

});


// AUTOMATIC COPYRIGHT YEAR

document.getElementById("year").textContent =
    new Date().getFullYear();
