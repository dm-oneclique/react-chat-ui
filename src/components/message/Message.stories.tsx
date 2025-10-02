import type { Meta, StoryFn } from '@storybook/react';
import { useEffect, useRef, useState } from 'react';
import Message from ".";
import type { Props } from ".";
import { StyleSheetManager } from 'styled-components';

const meta: Meta = {
  title: 'Message',
  component: Message,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const date = new Date()
const minutesAgoDate = new Date(date)
const hoursAgoDate = new Date(date)
const daysAgoDate = new Date(date)
const monthsAgoDate = new Date(date)



minutesAgoDate.setMinutes(minutesAgoDate.getMinutes() - 10)
hoursAgoDate.setHours(hoursAgoDate.getHours() - 3)
daysAgoDate.setDate(daysAgoDate.getDate() - 10)
monthsAgoDate.setMonth(monthsAgoDate.getMonth() - 2)

const LeftTemplate: StoryFn<Props> = (args: Props) => {
  const styleTargetRef = useRef<HTMLDivElement | null>(null);
  const [target, setTarget] = useState<any>()

  console.log({ target })

  useEffect(() => {

    const t = document.getElementById("sc-style-target")

    if (t) {
      setTarget(t)
    }

  }, [styleTargetRef.current])

  return <>
    <div id="sc-style-target" ref={styleTargetRef} />
    {target &&
      <StyleSheetManager target={target || undefined}>
        <div>
          <Message
            {...args}
            user={{
              "id": "danny_1",
              "name": "Daniel Georgetown",
              avatar: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
            }}
            type="incoming"
            text="Hello World! incoming"
            created_at={date}
          />
        </div>
      </StyleSheetManager >
    }
  </>
}



const IncomingWithLinkTemplate: StoryFn<Props> = (args: Props) => <Message
  {...args}
  user={{
    "id": "danny_1",
    "name": "Daniel Georgetown",
    avatar: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
  }}
  type="incoming"
  text="Hello World! visit https://google.com to begin searching"
  created_at={minutesAgoDate}

/>

const IncomingWithMarkdownTemplate: StoryFn<Props> = (args: Props) => <Message
  {...args}
  user={{
    "id": "danny_1",
    "name": "Daniel Georgetown",
    avatar: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
  }}
  type="incoming"
  text="
  **Hello World!**
  
  visit:
  - www.google.com to begin searching
  - something else:
    1. something else 2
    2. something else 3
    3. something else 4
    4. something else 5
    5. something else 6
    6. something else 7
    7. something else 8
  "
  created_at={minutesAgoDate}

/>

const IncomingWithLinkAndMarkdownTemplate: StoryFn<Props> = (args: Props) => <Message
  {...args}
  user={{
    "id": "danny_1",
    "name": "Daniel Georgetown",
    avatar: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
  }}
  type="incoming"
  text="**Hello World!**
  
  visit https://google.com to begin searching"
  created_at={minutesAgoDate}

/>

const OutgoingWithLinkTemplate: StoryFn<Props> = (args: Props) => <Message
  {...args}
  user={{
    "id": "danny_1",
    "name": "Daniel Georgetown",
    avatar: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
  }}
  type="outgoing"
  text="Hello World! visit https://google.com to begin searching"
  created_at={hoursAgoDate}

/>



const RightTemplate: StoryFn<Props> = (args: Props) => <Message
  {...args}
  user={{
    "id": "danny_1",
    "name": "Daniel Georgetown",
    avatar: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
  }}
  type="outgoing"
  text="Hello World!"
  created_at={daysAgoDate}

/>


const LoadingTemplate: StoryFn<Props> = (args: Props) => <Message
  {...args}
  user={{
    "id": "danny_1",
    "name": "Daniel Georgetown",
    avatar: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
  }}
  loading={true}
  type="outgoing"
  text="Hello World!"
  created_at={monthsAgoDate}

/>

const WithAvatarTemplate: StoryFn<Props> = (args: Props) => <Message
  {...args}
  user={{
    "id": "danny_1",
    "name": "Daniel Georgetown",
    avatar: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
  }}
  type="incoming"
  showAvatar={true}
  created_at={date}
  text="Hello World! adfnjflejkrngelrwgnerljgnerlgnewrlgejnurglwejrnglewrkjgnlewrgnljner"
/>

const ImageContentTemplate: StoryFn<Props> = (args: Props) => <Message
  {...args}
  user={{
    "id": "danny_1",
    "name": "Daniel Georgetown",
    avatar: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
  }}
  type="incoming"
  showAvatar={true}
  created_at={minutesAgoDate}
  media={{
    type: "image",
    url: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
  }}
/>

const FileContentTemplate: StoryFn<Props> = (args: Props) => <Message
  {...args}
  user={{
    "id": "danny_1",
    "name": "Daniel Georgetown",
    avatar: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
  }}
  type="incoming"
  showAvatar={true}
  created_at={hoursAgoDate}

  media={{
    type: "file",
    url: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg",
    size: "2 mb"

  }} />

const VideoContentTemplate: StoryFn<Props> = (args: Props) => <Message
  {...args}
  user={{
    "id": "danny_1",
    "name": "Daniel Georgetown",
    avatar: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
  }}
  created_at={daysAgoDate}

  type="incoming"
  showAvatar={true}
  media={{
    type: "video",
    url: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg",
    size: "2 mb"
  }} />

const GifContentTemplate: StoryFn<Props> = (args: Props) => <Message
  {...args}
  user={{
    "id": "danny_1",
    "name": "Daniel Georgetown",
    avatar: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
  }}
  created_at={monthsAgoDate}

  type="incoming"
  showAvatar={true}
  media={{
    type: "gif",
    url: "https://media2.giphy.com/media/sugyoDHOvvFVawa7qZ/giphy.gif?cid=ecf05e47c6mrta3sn8ol5nv1hgz6eu8jew3b2v0iya4ckbmv&ep=v1_gifs_gifId&rid=giphy.gif&ct=s",
    size: "2 mb"
  }} />

const WithHeaderTemplate: StoryFn<Props> = (args: Props) => <Message
  {...args}
  user={{
    "id": "danny_1",
    "name": "Daniel Georgetown",
    avatar: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
  }}
  type="incoming"
  created_at={date}
  showAvatar={true}
  showHeader={true}
  text="Hello World!"
/>

const LastIncomingTemplate: StoryFn<Props> = (args: Props) => <Message
  {...args}
  user={{
    "id": "danny_1",
    "name": "Daniel Georgetown",
    avatar: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
  }}
  type="incoming"
  created_at={minutesAgoDate}
  showAvatar={true}
  last={true}
  text="Hello World!"
/>


const SingleIncomingTemplate: StoryFn<Props> = (args: Props) => <Message
  {...args}
  user={{
    "id": "danny_1",
    "name": "Daniel Georgetown",
    avatar: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
  }}
  type="incoming"
  showAvatar={true}
  single={true}
  created_at={hoursAgoDate}
  text="Hello World!"
/>



const SingleOutgoingTemplate: StoryFn<Props> = (args: Props) => <Message
  {...args}
  user={{
    "id": "danny_1",
    "name": "Daniel Georgetown",
    avatar: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
  }}
  type="outgoing"
  single
  created_at={daysAgoDate}
  text="Hello World! adfnjflejkrngelrwgnerljgnerlgnewrlgejnurglwejrnglewrkjgnlewrgnljner"
/>

const LastOutgoingTemplate: StoryFn<Props> = (args: Props) => <Message
  {...args}
  user={{
    "id": "danny_1",
    "name": "Daniel Georgetown",
    avatar: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
  }}
  type="outgoing"
  last
  created_at={monthsAgoDate}
  text="Hello World! adfnjflejkrngelrwgnerljgnerlgnewrlgejnurglwejrnglewrkjgnlewrgnljner"
/>

const OutgoingImageContentTemplate: StoryFn<Props> = (args: Props) => <Message
  {...args}
  user={{
    "id": "danny_1",
    "name": "Daniel Georgetown",
    avatar: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
  }}
  type="outgoing"
  created_at={date}
  showAvatar={true}
  media={{
    type: "image",
    url: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
  }} />

const OutgoingFileContentTemplate: StoryFn<Props> = (args: Props) => <Message
  {...args}
  user={{
    "id": "danny_1",
    "name": "Daniel Georgetown",
    avatar: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
  }}
  type="outgoing"
  created_at={minutesAgoDate}
  showAvatar={true}
  media={{
    type: "file",
    url: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg",
    size: "2 mb"
  }} />

const OutgoingVideoContentTemplate: StoryFn<Props> = (args: Props) => <Message
  {...args}
  user={{
    "id": "danny_1",
    "name": "Daniel Georgetown",
    avatar: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
  }}
  created_at={date}
  type="outgoing"
  showAvatar={true}
  media={{
    type: "video",
    url: "https://www.youtube.com/watch?v=dfhbmlm4emI",
    size: "2 mb"
  }}
/>


const OutgoingGifContentTemplate: StoryFn<Props> = (args: Props) => <Message
  {...args}
  user={{
    "id": "danny_1",
    "name": "Daniel Georgetown",
    avatar: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
  }}
  created_at={daysAgoDate}
  type="outgoing"
  showAvatar={true}
  media={{
    type: "gif",
    url: "https://media2.giphy.com/media/sugyoDHOvvFVawa7qZ/giphy.gif?cid=ecf05e47c6mrta3sn8ol5nv1hgz6eu8jew3b2v0iya4ckbmv&ep=v1_gifs_gifId&rid=giphy.gif&ct=s",
    size: "2 mb"
  }}
/>

// Context Menu Examples
const ContextMenuTemplate: StoryFn<Props> = (args: Props) => <Message
  {...args}
  type="outgoing"
  text="Right-click on this message to see the context menu!"
  created_at={date}
  id="outgoing-msg-001"
  contextMenuActions={[
    {
      name: "Copy Message",
      handler: (message) => {
        navigator.clipboard.writeText(message.text || "");
        alert(`Message copied to clipboard! Message ID: ${message.id}`);
      }
    },
    {
      name: "Edit Message",
      handler: (message) => alert(`Edit message functionality for message: "${message.text}" (ID: ${message.id})`),
      onlyFor: "outgoing"
    },
    {
      name: "Delete Message",
      handler: (message) => alert(`Delete message functionality for message ID: ${message.id}`),
      onlyFor: "outgoing"
    },
    {
      name: "Reply to Message",
      handler: (message) => alert(`Reply functionality - replying to: "${message.text}" from ${message.user.name}`)
    },
    {
      name: "Show Message Details",
      handler: (message) => {
        const details = {
          id: message.id,
          text: message.text,
          user: message.user.name,
          createdAt: message.createdAt?.toISOString(),
          seen: message.seen,
          loading: message.loading,
          hasMedia: !!message.media
        };
        alert(`Message Details:\n${JSON.stringify(details, null, 2)}`);
      }
    }
  ]}
/>

const IncomingContextMenuTemplate: StoryFn<Props> = (args: Props) => <Message
  {...args}
  user={{
    "id": "danny_1",
    "name": "Daniel Georgetown",
    avatar: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
  }}
  type="incoming"
  text="Right-click on this incoming message to see the context menu!"
  created_at={date}
  showAvatar={true}
  showHeader={true}
  id="incoming-msg-001"
  contextMenuActions={[
    {
      name: "Copy Message",
      handler: (message) => {
        navigator.clipboard.writeText(message.text || "");
        alert(`Message copied to clipboard! From: ${message.user.name} (ID: ${message.id})`);
      }
    },
    {
      name: "Reply to Message",
      handler: (message) => alert(`Reply functionality - replying to: "${message.text}" from ${message.user.name}`)
    },
    {
      name: "React to Message",
      handler: (message) => alert(`React functionality for message from ${message.user.name}: "${message.text}"`),
      onlyFor: "incoming"
    },
    {
      name: "Report Message",
      handler: (message) => alert(`Report functionality - reporting message ID: ${message.id} from ${message.user.name}`),
      onlyFor: "incoming"
    },
    {
      name: "View User Profile",
      handler: (message) => alert(`View profile of ${message.user.name} (ID: ${message.user.id})`),
      onlyFor: "incoming"
    }
  ]}
/>

const MediaContextMenuTemplate: StoryFn<Props> = (args: Props) => <Message
  {...args}
  user={{
    "id": "alice_1",
    "name": "Alice Johnson",
    avatar: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
  }}
  type="incoming"
  text="Check out this awesome image!"
  created_at={date}
  showAvatar={true}
  showHeader={true}
  id="media-msg-001"
  media={{
    type: "image",
    url: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg",
    name: "profile-picture.jpeg"
  }}
  contextMenuActions={[
    {
      name: "Download Media",
      handler: (message) => {
        if (message.media) {
          alert(`Downloading ${message.media.type}: ${message.media.name || 'unnamed'} from ${message.media.url}`);
        } else {
          alert("No media to download");
        }
      }
    },
    {
      name: "View Full Size",
      handler: (message) => {
        if (message.media) {
          alert(`Opening full size view for ${message.media.type}: ${message.media.url}`);
        } else {
          alert("No media to view");
        }
      }
    },
    {
      name: "Copy Media Link",
      handler: (message) => {
        if (message.media) {
          navigator.clipboard.writeText(message.media.url);
          alert(`Media link copied! Type: ${message.media.type}, URL: ${message.media.url}`);
        } else {
          alert("No media link to copy");
        }
      }
    },
    {
      name: "Share Media",
      handler: (message) => {
        if (message.media) {
          alert(`Sharing ${message.media.type} from ${message.user.name}: ${message.media.url}`);
        } else {
          alert("No media to share");
        }
      }
    }
  ]}
/>


// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing

export const Incoming = LeftTemplate.bind({});
export const IncomingWithLink = IncomingWithLinkTemplate.bind({});
export const IncomingWithMarkdown = IncomingWithMarkdownTemplate.bind({});
export const IncomingWithLinkAndMarkdown = IncomingWithLinkAndMarkdownTemplate.bind({});

export const IncomingWithAvatar = WithAvatarTemplate.bind({});
export const IncomingWithHeader = WithHeaderTemplate.bind({});
export const SingleIncoming = SingleIncomingTemplate.bind({});
export const LastIncoming = LastIncomingTemplate.bind({});
export const IncomingImageContent = ImageContentTemplate.bind({});
export const IncomingFileContent = FileContentTemplate.bind({});
export const IncomingVideoContent = VideoContentTemplate.bind({});
export const IncomingGifContent = GifContentTemplate.bind({});



export const Outgoing = RightTemplate.bind({});
export const SingleOutgoing = SingleOutgoingTemplate.bind({});
export const LastOutgoing = LastOutgoingTemplate.bind({});
export const SendMessageLoading = LoadingTemplate.bind({});
export const OutgoingWithLink = OutgoingWithLinkTemplate.bind({});
export const OutgoingImageContent = OutgoingImageContentTemplate.bind({});
export const OutgoingFileContent = OutgoingFileContentTemplate.bind({});
export const OutgoingVideoContent = OutgoingVideoContentTemplate.bind({});
export const OutgoingGifContent = OutgoingGifContentTemplate.bind({});

export const WithContextMenu = ContextMenuTemplate.bind({});
export const IncomingWithContextMenu = IncomingContextMenuTemplate.bind({});
export const MediaWithContextMenu = MediaContextMenuTemplate.bind({});








