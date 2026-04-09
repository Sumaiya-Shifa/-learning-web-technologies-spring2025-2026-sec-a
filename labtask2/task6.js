document.querySelector('input[type="button"]').addEventListener('click', function() {
    const bloodGroupSelect = document.querySelector('select[name="Blood Group"]');
    const select = bloodGroupSelect;
    

    
    

    if (!select.value)
         {
      
        alert('Please select a blood group.');
        return;
    }
    


    alert('Selected blood group: ' + select.value);
});