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
    for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i];
        console.log(token);
        if (token.type === 'heading_open' && token.tag === 'h2') {
            const nextToken = tokens[i + 1];
            if (nextToken.type === 'inline') {
                const headingText = nextToken.content.trim();
                if (headingText === header) {
                    break;
                }
            }
        }

        if (inCodeBlock) {
            if (token.type === 'fence' && token.info === 'javascript') {
                break;
            }
            codeBlock += token.content;
        }

        if (token.type === 'fence' && token.info === 'javascript') {
            inCodeBlock = true;
        }
    }

    return codeBlock.trim();
}
