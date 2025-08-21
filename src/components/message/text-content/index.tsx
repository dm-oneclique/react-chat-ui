import React from 'react'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'
import linkify from 'markdown-linkify'

type Props = {
    children?: string
    color?: string
    linkColor?: string
}

export const Content = styled.div<{
    color?: string
    linkColor?: string
}>`
text-align:left;
vertical-align:text-top;
font-size:14px;
align-self:flex-start;
line-height:auto;
color:${({ color }) => color || '#000000'};
font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
padding-left:16px;
padding-right:16px;
padding-top:8px;
padding-bottom:8px;
position: relative;
box-sizing: border-box;
word-wrap: break-word;
width: 100%;

// user-select: none;

a {
    color: ${({ linkColor }) => linkColor || 'blue'};
    text-decoration: underline;
}

p {
    margin: 0;
    padding: 0;
}

code {
    background-color: rgba(0, 0, 0, 0.1);
    padding: 2px 4px;
    border-radius: 3px;
    font-family: 'Courier New', Courier, monospace;
}

pre {
    background-color: rgba(0, 0, 0, 0.1);
    padding: 8px;
    border-radius: 4px;
    overflow-x: auto;
}

blockquote {
    border-left: 3px solid ${({ color }) => color || '#000000'};
    margin: 0;
    padding-left: 12px;
    opacity: 0.8;
}

ul, ol {
    margin: 4px 0;
    padding-left: 20px;
}

li {
    margin: 2px 0;
}
`

export default function TextContent({
    linkColor,
    color,
    children = ""
}: Props) {
    // Preprocess text with markdown-linkify to convert URLs to markdown links
    const preprocessedText = linkify(children);

    return (
        <Content linkColor={linkColor} color={color}>
            <ReactMarkdown>
                {preprocessedText}
            </ReactMarkdown>
        </Content>
    )
}