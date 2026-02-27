document.querySelector('input[type="button"]').addEventListener('click', function()
 {
    const dateInput = document.querySelector('input[type="date"]').value;
    const fieldset = document.querySelector('fieldset');
    
  
             
            if (dateInput === '') {
        alert('Date of birth cannot be empty.');
        return;
    }
    const date = new Date(dateInput + 'T00:00:00');
    const day = date.getDate();
    const month = date.getMonth() + 1; 
    const year = date.getFullYear();
    

    if (day < 1 || day > 31) 
        {
     
        alert('Day must be between 1-31.');
        return;
    }
    
    if (month < 1 || month > 12) {
     
        alert('Month must be between 1-12.');
        return;
    }
    
    if (year < 1900 || year > 2016) {
    
        alert('Year must be between 1900-2016.');
        return;
    }
    

    alert('Valid date of birth: ' + dateInput);
});