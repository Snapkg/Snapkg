// Get Markdown content from command line argument
const axios = require('axios');

const issue_number = process.argv[2];

// Replace 'https://example.com' with the URL of the website you want to fetch
const url = 'https://api.github.com/repos/Snapkg/snapkg/issues/' + issue_number;

// Make a GET request to the website
axios.get(url)
  .then(response => {
    // Log the HTML content of the website
    console.log(response.data);
  })
  .catch(error => {
    // Handle errors, if any
    console.error('Error fetching website:', error.message);
  });
