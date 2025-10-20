document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("submit", async (event) => {
    const form = event.target;
    if (!form.hasAttribute("data-form-email")) return;

    event.preventDefault(); 

    const to = form.getAttribute("data-form-email");

    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
      to: to
    };

    try {
      const res = await fetch("https://send-mail-jade.vercel.app/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      const result = await res.json();
      alert(result.message || "Form sent successfully!");
    } catch (err) {
      console.error(err);
      alert("Error sending form!");
    }
  });
});


  
