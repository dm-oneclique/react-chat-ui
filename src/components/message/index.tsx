import React from 'react'
import type { UserType } from '../../types/UserType';
import OutgoingMessage from './outgoing-message'
import IncomingMessage from './incoming-message'
import MessageWithContextMenu from './message-with-context-menu'
import { type MediaType, type ActionDescription, type MessageType } from '../../types/MessageType';


export type Props = {
    showTimestamp?: boolean
    created_at?: Date
    seen?: boolean
    text?: string,
    media?: MediaType | MediaType[],
    loading?: boolean
    type?: "incoming" | "outgoing"
    user?: UserType
    showAvatar?: boolean
    showHeader?: boolean
    // determines whether its the last message in the group of outgoing or incoming
    last?: boolean
    //determines whether its the only message in the group of outgoing or incoming
    single?: boolean
    clusterFirstMessage?: boolean
    clusterLastMessage?: boolean
    themeColor?: string
    contextMenuActions?: ActionDescription[]
    id?: string
    enableMarkdown?: boolean
};


export default function Message({
    text,
    media,
    created_at,
    seen,
    loading,
    type = "outgoing",
    user,
    showAvatar,
    showHeader,
    last,
    single,
    clusterFirstMessage,
    clusterLastMessage,
    showTimestamp,
    themeColor,
    contextMenuActions,
    id,
    enableMarkdown = true
}: Props) {

    // Construct MessageType object for action handlers
    const messageData: MessageType = {
        user: user || { id: "unknown", name: "Unknown User" },
        id: id || `msg_${Date.now()}`, // Use provided ID or generate one for demo purposes
        text,
        media,
        createdAt: created_at,
        seen,
        loading
    }

    const messageComponent = type === "outgoing" ?
        <OutgoingMessage
            loading={loading}
            text={text}
            created_at={created_at}
            seen={seen}
            media={media}
            last={last}
            single={single}
            clusterFirstMessage={clusterFirstMessage}
            clusterLastMessage={clusterLastMessage}
            showTimestamp={showTimestamp}
            themeColor={themeColor}
            enableMarkdown={enableMarkdown}
        />
        :
        <IncomingMessage
            showAvatar={showAvatar}
            text={text}
            created_at={created_at}
            media={media}
            user={user}
            showHeader={showHeader}
            last={last}
            single={single}
            showTimestamp={showTimestamp}
            themeColor={themeColor}
            enableMarkdown={enableMarkdown}
        />

    return (
        <MessageWithContextMenu
            contextMenuActions={contextMenuActions}
            messageData={messageData}
        >
            {messageComponent}
        </MessageWithContextMenu>
    )
}

