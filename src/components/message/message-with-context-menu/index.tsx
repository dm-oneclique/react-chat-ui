import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import ContextMenu from '../context-menu'
import { type ActionDescription, type MessageType } from '../../../types/MessageType'

const MessageWrapper = styled.div<{ isContextMenuOpen: boolean }>`
  position: relative;
  transition: background-color 0.2s ease;
  background-color: ${({ isContextMenuOpen }) => 
    isContextMenuOpen ? 'rgba(0, 0, 0, 0.1)' : 'transparent'};
  border-radius: 8px;
`

interface MessageWithContextMenuProps {
  children: React.ReactNode
  contextMenuActions?: ActionDescription[]
  messageData?: MessageType
}

export default function MessageWithContextMenu({ 
  children, 
  contextMenuActions,
  messageData
}: MessageWithContextMenuProps) {
  const [contextMenu, setContextMenu] = useState<{
    visible: boolean
    x: number
    y: number
  }>({
    visible: false,
    x: 0,
    y: 0
  })

  const handleContextMenu = useCallback((event: React.MouseEvent) => {
    if (contextMenuActions && contextMenuActions.length > 0) {
      event.preventDefault()
      setContextMenu({
        visible: true,
        x: event.clientX,
        y: event.clientY
      })
    }
  }, [contextMenuActions])

  const closeContextMenu = useCallback(() => {
    setContextMenu(prev => ({ ...prev, visible: false }))
  }, [])

  return (
    <>
      <MessageWrapper 
        isContextMenuOpen={contextMenu.visible}
        onContextMenu={handleContextMenu}
      >
        {children}
      </MessageWrapper>
      <ContextMenu
        visible={contextMenu.visible}
        x={contextMenu.x}
        y={contextMenu.y}
        actions={contextMenuActions || []}
        messageData={messageData}
        onClose={closeContextMenu}
      />
    </>
  )
}
