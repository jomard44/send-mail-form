(() => {
  document.addEventListener("submit", async (e) => {
    const form = e.target;
    if (!form.hasAttribute("data-form-email")) return;

    e.preventDefault();

    const to = form.getAttribute("data-form-email");

    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
      to: to
    };

    let msgEl = form.querySelector(".form-message");
    if (!msgEl) {
      msgEl = document.createElement("div");
      msgEl.className = "form-message";
      form.appendChild(msgEl);
    }

    try {
      const res = await fetch("https://send-mail-jade.vercel.app/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      const result = await res.json();
      msgEl.textContent = result.message || "Form sent successfully!";
      msgEl.style.color = result.success ? "green" : "red";

      form.reset();
    } catch (err) {
      console.error(err);
      msgEl.textContent = "Error sending form!";
      msgEl.style.color = "red";
    }
  });
})();

  
