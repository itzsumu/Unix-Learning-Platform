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