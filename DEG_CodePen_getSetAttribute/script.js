/* 
Goal: Learn to use the Element.getAttribute() and Element.setAttribute() methods

Task: Build a basic version of inputtypes.com. Changing the dropdown should change the input's "type" attribute, and clicking the button should display the input's current "type" attribute.

For reference:
https://developer.mozilla.org/en-US/docs/Web/API/Element/getattribute
https://developer.mozilla.org/en-US/docs/Web/API/Element/setattribute
*/

const input = document.querySelector('.input');
const inputTypes = document.querySelector('.input-types');
const current = document.querySelector('.current');

inputTypes.addEventListener('change', function(e) {
  // Set the input element's type attribute based on the value of the inputTypes dropdown, using .setAttribute();
   let typeVal = e.target.value;
   input.setAttribute("type", typeVal);
   
   
});

current.addEventListener('click', function(e) {
  // console.log or alert() the input element's current type, using .getAttribute();
  let type = input.getAttribute("type");
  alert(type);
  
  
})