document.querySelector('input[type="button"]').addEventListener('click', function() {
    const fieldset = document.querySelector('fieldset');
    const userIdInput = fieldset.querySelector('input[type="text"]');
    const fileInput = fieldset.querySelector('input[type="file"]');
    
   
    const userIdValue = userIdInput.value.trim();
    
   if (userIdValue === '') {
        
        alert('User ID cannot be empty.');
        return;
    }
    
    if (!/^\d+$/.test(userIdValue) || parseInt(userIdValue) <= 0)
         {
    alert('User ID must be a positive number.');
        return;
    }
    

    if (!fileInput.files || fileInput.files.length === 0) 
        {
   
       alert('Please select a picture file.');
        return;
    }
    
 
 
    alert('Valid User ID: ' + userIdValue + '\nSelected file: ' + fileInput.files[0].name);
});