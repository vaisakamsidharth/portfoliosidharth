function sendMail(event) {
  event.preventDefault();

  var params = {
    from_name: document.getElementById("name").value,
    last_name: document.getElementById("lastname").value,
    phone_number: document.getElementById("phone").value,
    from_email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_f8t4lik";
  const templateID = "template_9henvm9";

  emailjs.send(serviceID, templateID, params)
    .then((res) => {
      alert("Your message was sent successfully!");
      // Clear the form
      document.getElementById("name").value = "";
      document.getElementById("lastname").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
    })
    .catch((err) => {
      console.error("Email send error:", err);
      alert("Failed to send message. Please try again later.");
    });
}
