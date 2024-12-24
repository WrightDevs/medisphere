document.addEventListener("DOMContentLoaded", () => {
  const counters = [
    { id: "specialist-doctor", end: 500 },
    { id: "happy-patient", end: 5000 },
    { id: "years-experience", end: 16 }
  ];
  
  counters.forEach(counter => {
    let start = 0;
    const duration = 2000; // Duration in milliseconds
    const increment = counter.end / (duration / 50);
    const element = document.getElementById(counter.id);
    
    const updateCounter = () => {
      start += increment;
      if (start >= counter.end) {
        element.textContent = Math.ceil(counter.end);
      } else {
        element.textContent = Math.floor(start);
        requestAnimationFrame(updateCounter);
      }
    };
    
    updateCounter();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Initialize EmailJS
  emailjs.init("A9NEt4yvnKfwIvNK0"); // Replace with your EmailJS Public Key

  // Newsletter Subscription
  document.querySelector("#subscribe").addEventListener("click", function () {
    const email = document.querySelector("#newsletterEmail").value;

    if (!email) {
      alert("Please enter your email address.");
      return;
    }

    const templateParams = { email: email };

    emailjs
      .send("service_1iwpwin", "template_8yvosr8", templateParams)
      .then(
        function (response) {
          alert("Subscription successful!");
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          alert("Failed to subscribe. Please try again later.");
          console.log("FAILED...", error);
        }
      );
  });

  // Booking Appointment
  document.querySelector(".bookappointmemt").addEventListener("click", function (e) {
    e.preventDefault();

    const name = document.querySelector('input[placeholder="John Doe"]').value;
    const email = document.querySelector('input[placeholder="name@example.com"]').value;
    const department = document.querySelector(".form-select:nth-of-type(1)").value;
    const doctor = document.querySelector(".form-select:nth-of-type(2)").value;
    const message = document.querySelector("#exampleFormControlTextarea1").value;

    // Basic Validation
    if (!name) {
      alert("Please enter your name.");
      return;
    }
    if (!email) {
      alert("Please enter a valid email address.");
      return;
    }
    if (department === "Department") {
      alert("Please select a department.");
      return;
    }
    if (doctor === "Doctor") {
      alert("Please select a doctor.");
      return;
    }

    const templateParams = {
      name: name,
      email: email,
      department: department,
      doctor: doctor,
      message: message,
    };

    emailjs
      .send("service_1iwpwin", "template_cmnromc", templateParams)
      .then(
        function (response) {
          alert("Appointment booked successfully!");
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          alert("Failed to book appointment. Please try again later.");
          console.log("FAILED...", error);
        }
      );
  });
});