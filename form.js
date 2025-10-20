(() => {
    document.addEventListener("submit", async (e) => {
      const form = e.target;
      if (!form.hasAttribute("data-form-email")) return; 
  
      e.preventDefault();
  
      const to = form.getAttribute("data-form-email");
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
  
      data.to = to; // include owner's email
  
      try {
        const res = await fetch("https://send-mail-jade.vercel.app/send", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data)
        });
  
        const result = await res.json();
        alert(result.message);
      } catch (err) {
        alert("Error sending form!");
      }
    });
  })();
  