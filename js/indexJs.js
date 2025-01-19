document.getElementById('registerButton').addEventListener('click', async function () {
  const firstname = document.getElementById('newsletterFirstname').value.trim();
  const email = document.getElementById('newsletterEmail').value.trim();
   // Remplacez par l'ID de la liste Brevo où ajouter le contact

  // Validation des champs
  if (!firstname || !email) {
      alert('Please fill in all fields.');
      return;
  }

  // Validation de l'email (simple regex)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
  }

  try {
      // Envoi de la requête au backend
      const response = await fetch('https://api-dmupbc76bq-uc.a.run.app/api/add-contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ firstname, email })
      });

      if (response.ok) {
          const data = await response.json();
          alert('Contact added successfully!');
          console.log(data);
      } else {
          const error = await response.json();
          alert('Error adding contact: ' + error.error);
      }
  } catch (err) {
      console.error('Error:', err);
      alert('An unexpected error occurred.');
  }
});