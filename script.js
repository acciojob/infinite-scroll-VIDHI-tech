//your code here!
// Get the list element
const list = document.getElementById('infi-list');

// Initial number of list items
let itemCount = 10;

// Function to add more list items
function addMoreItems() {
  // Number of additional items to add
  const additionalItems = 2;

  // Create and append new list items
  for (let i = 0; i < additionalItems; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = `List Item ${itemCount + i + 1}`;
    list.appendChild(listItem);
  }

  // Update the item count
  itemCount += additionalItems;
}

// Add initial list items
for (let i = 0; i < itemCount; i++) {
  const listItem = document.createElement('li');
  listItem.textContent = `List Item ${i + 1}`;
  list.appendChild(listItem);
}

// Event listener to detect scroll to the bottom
window.addEventListener('scroll', () => {
  // Distance from the top of the page to the bottom of the viewport
  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  
  // Current scroll position
  const scrollTop = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
  
  // Threshold for triggering the addition of more items (80% from the bottom)
  const threshold = scrollableHeight * 0.8;
  
  // Check if the scroll position is beyond the threshold
  if (scrollTop > threshold) {
    addMoreItems();
  }
});

