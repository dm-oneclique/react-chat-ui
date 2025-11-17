import React, { useState } from 'react';
import { type Meta, type StoryObj } from '@storybook/react';
import styled from 'styled-components';
import MessageInput from "."
import MinChatUIProvider from "../../providers/MinChatUiProvider"
import { type AttachedFileType } from "../../types/MessageType"
const meta: Meta<typeof MessageInput> = {
  title: 'MessageInput',
  component: MessageInput,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

type Story = StoryObj<typeof MessageInput>;

export const Default: Story = {
  render: args => (
    <MinChatUIProvider theme='#6ea9d7'>
      <MessageInput {...args} onAttachClick={() => console.log("onAttachClick")} />
    </MinChatUIProvider>
  ),
};

export const WithoutAttach: Story = {
  render: args => (
    <MinChatUIProvider theme='#6ea9d7'>
      <MessageInput {...args} onAttachClick={() => console.log("onAttachClick")} showAttachButton={false} />
    </MinChatUIProvider>
  ),
};

export const WithoutSend: Story = {
  render: args => (
    <MinChatUIProvider theme='#6ea9d7'>
      <MessageInput {...args} onAttachClick={() => console.log("onAttachClick")} showAttachButton={false} showSendButton={false} />
    </MinChatUIProvider>
  ),
};

export const Disabled: Story = {
  render: args => (
    <MinChatUIProvider theme='#6ea9d7'>
      <MessageInput {...args} onAttachClick={() => console.log("onAttachClick")} disabled={true} />
    </MinChatUIProvider>
  ),
};

export const TopRoundedOnly: Story = {
  render: args => (
    <MinChatUIProvider theme='#6ea9d7'>
      <MessageInput 
        {...args} 
        onAttachClick={() => console.log("onAttachClick")} 
        borderTopLeftRounded={true}
        borderTopRightRounded={true}
        borderBottomLeftRounded={false}
        borderBottomRightRounded={false}
      />
    </MinChatUIProvider>
  ),
};

export const BottomRoundedOnly: Story = {
  render: args => (
    <MinChatUIProvider theme='#6ea9d7'>
      <MessageInput 
        {...args} 
        onAttachClick={() => console.log("onAttachClick")} 
        borderTopLeftRounded={false}
        borderTopRightRounded={false}
        borderBottomLeftRounded={true}
        borderBottomRightRounded={true}
      />
    </MinChatUIProvider>
  ),
};

export const CustomBorderRadius: Story = {
  render: args => (
    <MinChatUIProvider theme='#6ea9d7'>
      <MessageInput 
        {...args} 
        onAttachClick={() => console.log("onAttachClick")} 
        borderRadius="8px 24px 8px 24px"
      />
    </MinChatUIProvider>
  ),
};

export const NoRoundedCorners: Story = {
  render: args => (
    <MinChatUIProvider theme='#6ea9d7'>
      <MessageInput 
        {...args} 
        onAttachClick={() => console.log("onAttachClick")} 
        borderTopLeftRounded={false}
        borderTopRightRounded={false}
        borderBottomLeftRounded={false}
        borderBottomRightRounded={false}
      />
    </MinChatUIProvider>
  ),
};

export const WithAttachedFiles: Story = {
  render: args => {
    const attachedFiles: AttachedFileType[] = [
      {
        type: "file",
        url: "https://example.com/file1.svg",
        name: "TritonPokerIcon.501...",
        size: "SVG"
      },
      {
        type: "file",
        url: "https://example.com/document.pdf",
        name: "Important Document.pdf",
        size: "2.4 MB"
      },
      {
        type: "file",
        url: "https://example.com/spreadsheet.xlsx",
        name: "Budget_2024.xlsx",
        size: "156 KB"
      }
    ];

    return (
      <MinChatUIProvider theme='#6ea9d7'>
        <MessageInput 
          {...args} 
          onAttachClick={() => console.log("onAttachClick")}
          attachedFiles={attachedFiles}
        />
      </MinChatUIProvider>
    );
  },
};

export const WithSingleAttachedFile: Story = {
  render: args => {
    const attachedFiles: AttachedFileType[] = [
      {
        type: "file",
        url: "https://example.com/file.svg",
        name: "TritonPokerIcon.501...",
        size: "SVG"
      }
    ];

    return (
      <MinChatUIProvider theme='#6ea9d7'>
        <MessageInput 
          {...args} 
          onAttachClick={() => console.log("onAttachClick")}
          attachedFiles={attachedFiles}
        />
      </MinChatUIProvider>
    );
  },
};

export const WithAttachedFilesNoSize: Story = {
  render: args => {
    const attachedFiles: AttachedFileType[] = [
      {
        type: "file",
        url: "https://example.com/file1.svg",
        name: "File without size.svg"
      },
      {
        type: "file",
        url: "https://example.com/file2.txt",
        name: "Another file.txt"
      }
    ];

    return (
      <MinChatUIProvider theme='#6ea9d7'>
        <MessageInput 
          {...args} 
          onAttachClick={() => console.log("onAttachClick")}
          attachedFiles={attachedFiles}
        />
      </MinChatUIProvider>
    );
  },
};

export const WithLoadingFiles: Story = {
  render: args => {
    const attachedFiles: AttachedFileType[] = [
      {
        type: "file",
        name: "Uploading document.pdf",
        size: "2.4 MB",
        isLoading: true
      },
      {
        type: "file",
        url: "https://example.com/file1.svg",
        name: "TritonPokerIcon.501...",
        size: "SVG",
        isLoading: false
      },
      {
        type: "file",
        name: "Another file.xlsx",
        size: "156 KB",
        isLoading: true
      }
    ];

    return (
      <MinChatUIProvider theme='#6ea9d7'>
        <MessageInput 
          {...args} 
          onAttachClick={() => console.log("onAttachClick")}
          attachedFiles={attachedFiles}
        />
      </MinChatUIProvider>
    );
  },
};

export const InteractiveFileUpload: Story = {
  render: args => {
    const [attachedFiles, setAttachedFiles] = useState<AttachedFileType[]>([]);

    const handleAttachClick = () => {
      const fileNames = [
        "Document.pdf",
        "Spreadsheet.xlsx",
        "Image.png",
        "Video.mp4",
        "Archive.zip"
      ];
      
      const fileSizes = [
        "2.4 MB",
        "156 KB",
        "1.2 MB",
        "15.8 MB",
        "3.1 MB"
      ];

      const randomIndex = Math.floor(Math.random() * fileNames.length);
      const newFile: AttachedFileType = {
        type: "file",
        name: fileNames[randomIndex],
        size: fileSizes[randomIndex],
        isLoading: true
      };

      setAttachedFiles([...attachedFiles, newFile]);

      // Simulate upload completion after 1 second
      setTimeout(() => {
        setAttachedFiles(prevFiles => 
          prevFiles.map((file, index) => 
            index === prevFiles.length - 1
              ? { ...file, isLoading: false, url: `https://example.com/${file.name}` }
              : file
          )
        );
      }, 1000);
    };

    return (
      <MinChatUIProvider theme='#6ea9d7'>
        <MessageInput 
          {...args} 
          onAttachClick={handleAttachClick}
          attachedFiles={attachedFiles}
        />
      </MinChatUIProvider>
    );
  },
};





// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing





