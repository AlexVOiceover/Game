console.log("Initialising console");


const titles = document.querySelectorAll('h2.collapsible');

  // Loop through the title elements and add a click event listener to each
  titles.forEach(title => {
    title.addEventListener('click', () => {
      // Get the corresponding flex container element
      const container = title.nextElementSibling;
      // Toggle the collapsed class on the container element
      container.classList.toggle('collapsed');

    });
  });

