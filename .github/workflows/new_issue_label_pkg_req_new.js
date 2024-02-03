const md = require('markdown-it')();
const attrs = require('markdown-it-attrs');
const axios = require('axios');

const issue_number = process.argv[2];
const url = 'https://api.github.com/repos/Snapkg/snapkg/issues/' + issue_number;

console.log(url);

md.use(attrs);

axios.get(url)
  .then(response => {
    console.log(response.data);
    
  })
  .catch(error => {
    console.error('Error fetching GitHub issue:', error.message);
  });

// Function to find code block by header
function findCodeBlock(header, tokens) {
    let isInCodeBlock = false;
    let codeBlock = '';

    for (const token of tokens) {
        if (token.type === 'heading_open') {
            const headingLevel = token.attrs.find(attr => attr[0] === 'level')[1];
            const headingTextToken = tokens.find(t => t.type === 'inline' && t.level === headingLevel);

            if (headingTextToken && headingTextToken.content.trim() === header) {
                isInCodeBlock = true;
                continue;
            }
        }

        if (isInCodeBlock) {
            if (token.type === 'code') {
                codeBlock += token.content;
            } else if (token.type === 'heading_close') {
                isInCodeBlock = false;
            }
        }
    }

    return codeBlock;
}
