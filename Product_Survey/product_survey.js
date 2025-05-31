
function submitFeedback() {
    //retrineving in fo
    const username = document.getElementById('name').value;
    const userAge = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;
    const submitButton=document.getElementById('submitBtn');
    submitButton.onclick = submitFeedback;
    //showing info
    document.getElementById('userInfo').style.display = 'block';
    document.getElementById('userName').innerHTML=`${username}`;
    document.getElementById('userAge').innerHTML=userAge;
    
    document.getElementById('userEmail').innerHTML = email;
    document.getElementById('userJob').innerHTML = job;
    document.getElementById('userDesignation').innerHTML = designation;
    document.getElementById('userProductChoice').innerHTML = productType;
    document.getElementById('userFeedback').innerHTML = feedback;
    alert('Thank you for your valuable feedback');
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      submitFeedback();
    }
  });

document.getElementById('submitBtn').addEventListener('click',submitFeedback);