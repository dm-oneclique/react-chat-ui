import React, { useState, useCallback } from 'react'
import ContextMenu from '../context-menu'
import { type ActionDescription } from '../../../types/MessageType'

interface MessageWithContextMenuProps {
  children: React.ReactNode
  contextMenuActions?: ActionDescription[]
}

export default function MessageWithContextMenu({ 
  children, 
  contextMenuActions 
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
      <div onContextMenu={handleContextMenu}>
        {children}
      </div>
      <ContextMenu
        visible={contextMenu.visible}
        x={contextMenu.x}
        y={contextMenu.y}
        actions={contextMenuActions || []}
        onClose={closeContextMenu}
      />
    </>
  )
}
