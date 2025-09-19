# Context Menu Usage Guide

## Overview

The Message and MessageList components now support custom context menus that appear when users right-click on messages. Actions can be filtered by message type (incoming vs outgoing).

## ActionDescription Type

```typescript
interface ActionDescription {
  name: string
  handler: () => void
  onlyFor?: 'incoming' | 'outgoing'  // Optional: filters actions by message type
}
```

## Usage Examples

### Basic Message with Context Menu

```typescript
<Message
  type="outgoing"
  text="Hello World!"
  contextMenuActions={[
    {
      name: "Copy Message",
      handler: () => navigator.clipboard.writeText("Hello World!")
    },
    {
      name: "Edit Message",
      handler: () => console.log("Edit message"),
      onlyFor: "outgoing"  // Only shows for outgoing messages
    }
  ]}
/>
```

### MessageList with Context Menu Actions

```typescript
<MessageList
  messages={messages}
  currentUserId="user123"
  contextMenuActions={[
    {
      name: "Copy Message",
      handler: () => alert("Message copied!")
    },
    {
      name: "Reply to Message",
      handler: () => alert("Reply functionality")
    },
    {
      name: "Edit Message",
      handler: () => alert("Edit message"),
      onlyFor: "outgoing"  // Only shows for outgoing messages
    },
    {
      name: "Delete Message",
      handler: () => alert("Delete message"),
      onlyFor: "outgoing"  // Only shows for outgoing messages
    },
    {
      name: "React to Message",
      handler: () => alert("React functionality"),
      onlyFor: "incoming"  // Only shows for incoming messages
    },
    {
      name: "Report Message",
      handler: () => alert("Report functionality"),
      onlyFor: "incoming"  // Only shows for incoming messages
    }
  ]}
/>
```

## Action Filtering

- **No `onlyFor` property**: Action appears on both incoming and outgoing messages
- **`onlyFor: "outgoing"`**: Action only appears on outgoing messages (user's own messages)
- **`onlyFor: "incoming"`**: Action only appears on incoming messages (other users' messages)

## Features

- Right-click activation
- Customizable actions with handlers
- Message type filtering
- Proper positioning at cursor location
- Click outside or Escape key to close
- TypeScript support
- Works with both Message and MessageList components
