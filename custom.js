// JavaScript function to switch between tabs and update active tab button and tab
function openTab(tabId, buttonId) {
   // Step 1: Get all elements with the class "tab" and remove the "active-tab" class from each of them.
   var tabs = document.querySelectorAll('.tab');
   for (var i = 0; i < tabs.length; i++) {
       tabs[i].classList.remove('active-tab');
   }

   // Step 2: Get all elements with the class "tab-button" and remove the "active-tab-button" class from each of them.
   var tabButtons = document.querySelectorAll('.tab-button');
   for (var i = 0; i < tabButtons.length; i++) {
       tabButtons[i].classList.remove('active-tab-button');
   }

   // Step 3: Add the "active-tab" class to the tab with the ID specified in the "tabId" parameter.
   document.getElementById(tabId).classList.add('active-tab');

   // Step 4: Add the "active-tab-button" class to the tab button with the ID specified in the "buttonId" parameter.
   document.getElementById(buttonId).classList.add('active-tab-button');
}

// Step 5: Initially show the first tab and mark the first button as active. This is done by calling the "openTab" function with the initial tab and button IDs.
openTab('tab1', 'tabButton1');
