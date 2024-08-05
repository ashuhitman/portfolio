function sendEmail(event) {
  event.preventDefault();
  console.log(event);

  //   const to = document.getElementById("to").value;
  //   const subject = document.getElementById("subject").value;
  //   const message = document.getElementById("message").value;
  const to = "ashu8306@gmail.com";
  const subject = "my subject";
  const message = "my message";

  // Encode the subject and message for use in a URL
  const mailtoLink = `mailto:${to}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(message)}`;

  // Open the user's email client
  window.location.href = mailtoLink;
}
