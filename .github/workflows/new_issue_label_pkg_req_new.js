const attrs = require('markdown-it-attrs');
const markdownit = require('markdown-it')
const md = markdownit().use(attrs);
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
    let isInCodeBlock = false;
    let codeBlock = '';

    for (const token of tokens) {
        if (token.type === 'heading_open') {
            // const headingLevel = token.attrs.find(attr => attr[0] === 'level')[1];
          console.log(token);
          //const headingTextToken = tokens.find(t => t.type === 'inline' && t.level === headingLevel);

            // if (headingTextToken && headingTextToken.content.trim() === header) {
            //     isInCodeBlock = true;
            //     continue;
            // }
        }

        // if (isInCodeBlock) {
        //     if (token.type === 'code') {
        //         codeBlock += token.content;
        //     } else if (token.type === 'heading_close') {
        //         isInCodeBlock = false;
        //     }
        // }
    }

    return codeBlock;
}
