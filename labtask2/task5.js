document.querySelector('input[type="button"]').addEventListener('click', function() {
    const degreeCheckboxes = document.querySelectorAll('input[type="checkbox"]');
    const fieldset = document.querySelector('fieldset');
    

    fieldset.style.borderColor = '';
    degreeCheckboxes.forEach(cb => cb.style.outline = '');

    let isSelected = false;
    degreeCheckboxes.forEach(cb =>
         {
        if (cb.checked) {
            isSelected = true;
        }
    });
    
    if (!isSelected) {


        alert('Please select at least one degree.');
        return;
    }
    


    const selectedDegrees = Array.from(degreeCheckboxes)
        .filter(cb => cb.checked)
        .map(cb => cb.nextSibling.nodeValue.trim())
        .join(', ');
    alert('Selected degrees: ' + selectedDegrees);
});