import type { Meta, StoryFn } from '@storybook/react';
import Message from ".";
import type { Props } from ".";

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

const LeftTemplate: StoryFn<Props> = (args: Props) => <Message
  {...args}
  user={{
    "id": "danny_1",
    "name": "Daniel Georgetown",
    avatar: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
  }}
  type="incoming"
  text="Hello World!"
  created_at={date}
/>

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
  - https://google.com to begin searching
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
  contextMenuActions={[
    {
      name: "Copy Message",
      handler: () => {
        navigator.clipboard.writeText("Right-click on this message to see the context menu!");
        alert("Message copied to clipboard!");
      }
    },
    {
      name: "Edit Message",
      handler: () => alert("Edit message functionality"),
      onlyFor: "outgoing"
    },
    {
      name: "Delete Message",
      handler: () => alert("Delete message functionality"),
      onlyFor: "outgoing"
    },
    {
      name: "Reply to Message",
      handler: () => alert("Reply functionality")
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
  contextMenuActions={[
    {
      name: "Copy Message",
      handler: () => {
        navigator.clipboard.writeText("Right-click on this incoming message to see the context menu!");
        alert("Message copied to clipboard!");
      }
    },
    {
      name: "Reply to Message",
      handler: () => alert("Reply functionality")
    },
    {
      name: "React to Message",
      handler: () => alert("React functionality"),
      onlyFor: "incoming"
    },
    {
      name: "Report Message",
      handler: () => alert("Report functionality"),
      onlyFor: "incoming"
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








