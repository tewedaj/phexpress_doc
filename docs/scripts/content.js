fetch('../data/content/content.json')
  .then(response => response.json())
  .then(data => {
    // Access the JSON array
    const jsonArray = data;

    // Get the list element from the HTML
    const list = document.getElementById('menuList');

    // Iterate over the JSON array and create list items
    jsonArray.forEach(item => {
      const listItem = document.createElement('li');
      const contentBody = document.getElementById('body')
      listItem.textContent = `${item.title}`;
      
      // Add a click event listener to each list item
      listItem.addEventListener('click', () => {
        // Remove the "selected" class from all list items
        let selectedTitleContent = jsonArray.filter((value)=>{
            return value.title == item.title;
        });
        console.log(selectedTitleContent);
        contentBody.innerHTML = `${selectedTitleContent[0].content}`;
        const allListItems = list.getElementsByTagName('li');
        for (let i = 0; i < allListItems.length; i++) {
          allListItems[i].classList.remove('selected');

        }
        
        // Add the "selected" class to the clicked list item
        listItem.classList.add('selected');
      });
      
      list.appendChild(listItem);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });
