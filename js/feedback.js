document.addEventListener('DOMContentLoaded', function() {
  const feedbackForm = document.getElementById('feedbackForm');
  const previewContainer = document.getElementById('preview');
  const confirmationContainer = document.getElementById('confirmation');

  feedbackForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const rating = document.querySelector('input[name="rate"]:checked').value;
    const comment = document.getElementById('comment').value;

    
    document.getElementById('previewName').textContent = name;
    document.getElementById('previewEmail').textContent = email;
    document.getElementById('previewRating').textContent = rating;
    document.getElementById('previewComment').textContent = comment;

    previewContainer.style.display = 'block';
  });

 
  const editButton = document.getElementById('editButton');
  editButton.addEventListener('click', function() {
    previewContainer.style.display = 'none';
  });


  const submitButton = document.getElementById('submitButton');
  submitButton.addEventListener('click', function() {
    // Redirect to submission form page
    window.location.href = '../html/submission.html?name=' + encodeURIComponent(document.getElementById('name').value) +
                           '&email=' + encodeURIComponent(document.getElementById('email').value) +
                           '&rating=' + encodeURIComponent(document.querySelector('input[name="rate"]:checked').value) +
                           '&comment=' + encodeURIComponent(document.getElementById('comment').value);
  });
});
