import { useState } from 'react'
import './App.css'
import ReactMarkdown from "react-markdown"
const DefaultMarkdown = `\
# Welcome to my React Markdown Previewer!

## This is a sub-heading...

### And here's some other cool stuff: \

Heres some code, \`<div></div>\`, between 2 backticks.
\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\\\`\\\`\\\`' && lastLine == '\\\`\\\`\\\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and

> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded cool images:

![A cool rammus](https://3.bp.blogspot.com/-tgcfFTOwlV8/WxGrCx_GmtI/AAAAAAABA1Q/CMFQdvzCOtkLhT56z7ZT1JQ_lOPRlSWTQCLcBGAs/s1600/7a102c939fd239aa.png)
`;

function App() {
  const [markdownText, setMarkdownText] = useState<string>(DefaultMarkdown)
  

  return <>
<div>
  <h1 style={{textAlign: "center"}}>Markdown Previewer</h1>
  <div className="boxes-container">
    <textarea name="editor" id="editor" value={markdownText} onChange={(i) => setMarkdownText(i.target.value)}></textarea>
    <div id="preview">
      <ReactMarkdown>{markdownText}</ReactMarkdown>
    </div>
  </div>
</div>
</>;

};

export default App
