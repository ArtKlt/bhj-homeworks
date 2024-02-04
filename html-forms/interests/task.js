document.addEventListener('DOMContentLoaded', function () {
    const interestsContainer = document.querySelector('.interests_main');
  
    interestsContainer.addEventListener('change', function (event) {
      const checkbox = event.target;
      const subInterests = checkbox.closest('.interest').querySelector('.interests_active');
  
      if (subInterests) {
        handleNestedInterests(checkbox, subInterests);
      } else {
        updateCheckboxState(checkbox);
      }
    });
  
    function handleNestedInterests(checkbox, subInterests) {
      const checkboxes = subInterests.querySelectorAll('.interest__check');
      const mainCheckbox = checkbox.closest('.interest').querySelector('.interest__check');
  
      checkboxes.forEach((nestedCheckbox) => {
        nestedCheckbox.checked = checkbox.checked;
        nestedCheckbox.indeterminate = false;
      });
  
      updateCheckboxState(mainCheckbox);
    }
  
    function updateCheckboxState(checkbox) {
      const siblingsCheckboxes = checkbox.closest('ul').querySelectorAll('.interest__check');
  
      let allChecked = true;
      let someChecked = false;
  
      siblingsCheckboxes.forEach((siblingCheckbox) => {
        if (siblingCheckbox.checked) {
          someChecked = true;
        } else {
          allChecked = false;
        }
      });
  
      if (allChecked) {
        checkbox.checked = true;
        checkbox.indeterminate = false;
      } else if (someChecked) {
        checkbox.checked = false;
        checkbox.indeterminate = true;
      } else {
        checkbox.checked = false;
        checkbox.indeterminate = false;
      }
    }
  });