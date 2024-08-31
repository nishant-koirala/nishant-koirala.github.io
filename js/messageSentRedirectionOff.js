document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contact-form').addEventListener('submit', async function(event) {
      event.preventDefault(); // Prevent the default form submission
      const form = event.target;
  
      // Clear previous status message
      const statusDiv = document.getElementById('status');
      statusDiv.className = 'alert alert-primary'; // Reset classes to base
      statusDiv.innerText = ''; // Clear text
      statusDiv.style.display = 'none'; // Hide the alert box initially
  
      try {
        const response = await fetch(form.action, {
          method: form.method,
          body: new FormData(form),
          headers: {
            'Accept': 'application/json'
          }
        });
  
        if (response.ok) {
          statusDiv.innerHTML = `
            <strong>Success!</strong> Thanks for your submission.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          `;
          statusDiv.classList.add('alert-success'); // Add success classes
          statusDiv.style.display = 'block'; // Show the alert box
          form.reset();
        } else {
          statusDiv.innerHTML = `
            <strong>Error!</strong> Oops! There was a problem submitting your form.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          `;
          statusDiv.classList.add('alert-danger'); // Add danger classes
          statusDiv.style.display = 'block'; // Show the alert box
        }
      } catch (error) {
        statusDiv.innerHTML = `
          <strong>Error!</strong> Oops! There was a problem submitting your form.
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        `;
        statusDiv.classList.add('alert-danger'); // Add danger classes
        statusDiv.style.display = 'block'; // Show the alert box
      }
    });
  });