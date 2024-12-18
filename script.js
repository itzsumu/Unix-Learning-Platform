// Fetch and display commands from the JSON file
async function loadCommands() {
    try {
      const response = await fetch('commands.json'); // Fetch the JSON file
      if (!response.ok) {
        throw new Error('Failed to load commands.json');
      }
  
      const commands = await response.json(); // Parse the JSON data
  
      const commandList = document.getElementById('command-list'); // Get the command list container
  
      // Iterate over the commands and create HTML for each
      commands.forEach((command) => {
        const listItem = document.createElement('li');
  
        // Command name
        const nameElement = document.createElement('h3');
        nameElement.textContent = command.name;
        listItem.appendChild(nameElement);
        // Command description
        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = command.description;
        listItem.appendChild(descriptionElement);
  
        // Command usage
        const usageElement = document.createElement('pre');
        usageElement.textContent = command.usage;
        listItem.appendChild(usageElement);
  
        // Append the list item to the command list
        commandList.appendChild(listItem);
      });
    } catch (error) {
      console.error('Error loading commands:', error);
    }
  }
  
  // Load commands when the page is loaded
  document.addEventListener('DOMContentLoaded', loadCommands);
  let allCommands = []; // To store the full list of commands

// Fetch and display commands from the JSON file
async function loadCommands() {
  try {
    const response = await fetch('commands.json'); // Fetch the JSON file
    if (!response.ok) {
      throw new Error('Failed to load commands.json');
    }

    const commands = await response.json(); // Parse the JSON data
    allCommands = commands; // Store all commands globally

    displayCommands(commands); // Initial display of all commands
  } catch (error) {
    console.error('Error loading commands:', error);
  }
}

// Display filtered commands in the list
function displayCommands(commands) {
  const commandList = document.getElementById('command-list'); // Get the command list container
  commandList.innerHTML = ''; // Clear existing commands

  commands.forEach((command) => {
    const listItem = document.createElement('li');

    // Command name
    const nameElement = document.createElement('h3');
    nameElement.textContent = command.name;
    listItem.appendChild(nameElement);

    // Command description
    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = command.description;
    listItem.appendChild(descriptionElement);

    // Command usage
    const usageElement = document.createElement('pre');
    usageElement.textContent = command.usage;
    listItem.appendChild(usageElement);

    // Append the list item to the command list
    commandList.appendChild(listItem);
  });
}

// Filter commands based on search input
function filterCommands() {
  const searchInput = document
    .getElementById('search-input')
    .value.toLowerCase(); // Get the search input value
  const filteredCommands = allCommands.filter((command) => {
    return (
      command.name.toLowerCase().includes(searchInput) ||
      command.description.toLowerCase().includes(searchInput)
    );
  });

  displayCommands(filteredCommands); // Display the filtered commands
}

// Add event listener to the search button
document.getElementById('search-btn').addEventListener('click', filterCommands);

// Load commands when the page is loaded
document.addEventListener('DOMContentLoaded', loadCommands);
