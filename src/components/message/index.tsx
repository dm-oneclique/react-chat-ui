import React from 'react'
import type { UserType } from '../../types/UserType';
import OutgoingMessage from './outgoing-message'
import IncomingMessage from './incoming-message'
import MessageWithContextMenu from './message-with-context-menu'
import { type MediaType, type ActionDescription } from '../../types/MessageType';


export type Props = {
    showTimestamp?: boolean
    created_at?: Date
    seen?: boolean
    text?: string,
    media?: MediaType,
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
    contextMenuActions
}: Props) {

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
        />

    return (
        <MessageWithContextMenu contextMenuActions={contextMenuActions}>
            {messageComponent}
        </MessageWithContextMenu>
    )
}

