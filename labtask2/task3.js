
document.querySelector('input[type="button"]').addEventListener('click', function()

{
    const genderRadios = document.querySelectorAll('input[name="Gender"]');
    const fieldset = document.querySelector('fieldset');

    
    
 fieldset.style.borderColor = '';
 Array.from(genderRadios).forEach(radio => radio.style.outline = '');
    
  
    let isSelected = false;
 genderRadios.forEach(radio =>
    {
        if (radio.checked)
             {
           
                isSelected = true;
        }
    });
    
    if (!isSelected)
        
        {
      
     fieldset.style.border = '2px solid red';
     genderRadios.forEach(radio => radio.style.outline = '2px solid red');
        alert('Please select at least one gender option.');
        return;
    }
    

    alert('gender selected');
});