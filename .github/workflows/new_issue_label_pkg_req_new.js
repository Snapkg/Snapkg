const md = require('markdown-it')();
const attrs = require('markdown-it-attrs');

// Add the markdown-it-attrs plugin to enable attribute parsing
md.use(attrs);

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

// Get Markdown content from command line argument
const markdownContent = process.argv[2];

// Check if Markdown content is provided
if (!markdownContent) {
    console.error('Please provide Markdown content as a command line argument.');
    process.exit(1);
}

// Parse the Markdown content
const tokens = md.parse(markdownContent, {});

// Extract JavaScript/JSON code above "## Package manifest" header
const header = 'Package manifest';
const extractedCode = findCodeBlock(header, tokens);

console.log(extractedCode);
