const markdownit = require('markdown-it')
const md = markdownit();
const axios = require('axios');

const issue_number = process.argv[2];
const url = 'https://api.github.com/repos/Snapkg/snapkg/issues/' + issue_number;

console.log(url);

axios.get(url)
  .then(response => {
    const markdown = response.data.body;
    // Check if Markdown content is provided
    if (!markdown) {
        console.error('Please provide Markdown content as a command line argument.');
        process.exit(1);
    }
    
    // Parse the Markdown content
    const tokens = md.parse(markdown, {});
    
    // Extract JavaScript/JSON code above "## Package manifest" header
    const header = 'Package manifest';
    const extractedCode = findCodeBlock(header, tokens);
    
    console.log(extractedCode);
    
  })
  .catch(error => {
    console.error('Error fetching GitHub issue:', error.message);
    console.error(error);
    process.exit(1);
  });

// Function to find code block by header
function findCodeBlock(header, tokens) {
    let inCodeBlock = false;
    let codeBlock = '';

    for (const token of tokens) {
        if (token.type === 'heading_open') {
            // Check if the heading is the specified header
            const headingText = tokens.find(t => t.type === 'inline' && t.content === header);
            if (headingText) {
                break; // Stop if the specified header is found
            }
        }

        if (inCodeBlock) {
            if (token.type === 'code_block') {
                // End of the code block, exit the loop
                break;
            } else if (token.type === 'softbreak') {
                // Softbreaks are ignored in code blocks
                continue;
            } else {
                // Append the token content to the code block
                codeBlock += token.content;
            }
        }

        if (token.type === 'fence' && token.info === 'javascript') {
            // Start of a JavaScript code block
            inCodeBlock = true;
        }
    }

    return codeBlock;
}
