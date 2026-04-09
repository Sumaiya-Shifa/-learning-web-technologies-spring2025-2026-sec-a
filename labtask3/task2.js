document.getElementById('submitBtn').addEventListener('click', function() 

{


    const emailInput = document.getElementById ('emailInput').value.trim();
 const messageDiv = document.getElementById('message');
    
    messageDiv.textContent = '';
    messageDiv.style.color = '';
    
    if (emailInput === '') 
        {
     messageDiv.textContent = 'Email cannot be empty.';
     messageDiv.style.color = 'red';
        return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailInput))
         {
       
            messageDiv.textContent = 'Please enter a valid email address (e.g., anything@example.com).';
        messageDiv.style.color = 'red';
        return;
    }
    

    messageDiv.textContent = 'Valid email: ' + emailInput;
    messageDiv.style.color = 'green';
});