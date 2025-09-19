import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { type ActionDescription, type MessageType } from '../../../types/MessageType'

const ContextMenuContainer = styled.div<{ 
  visible: boolean
  x: number
  y: number
}>`
  position: fixed;
  top: ${({ y }) => y}px;
  left: ${({ x }) => x}px;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  z-index: 1000;
  min-width: 150px;
  padding: 4px 0;
  display: ${({ visible }) => visible ? 'block' : 'none'};
`

const ContextMenuItem = styled.div`
  padding: 8px 16px;
  cursor: pointer;
  font-size: 14px;
  color: #374151;
  transition: background-color 0.15s ease;

  &:hover {
    background-color: #f3f4f6;
  }

  &:first-child {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  &:last-child {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`

interface ContextMenuProps {
  visible: boolean
  x: number
  y: number
  actions: ActionDescription[]
  messageData?: MessageType
  onClose: () => void
}

export default function ContextMenu({ visible, x, y, actions, messageData, onClose }: ContextMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    if (visible) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [visible, onClose])

  const handleActionClick = (action: ActionDescription) => {
    if (messageData) {
      action.handler(messageData)
    }
    onClose()
  }

  if (!visible || actions.length === 0) {
    return null
  }

  return (
    <ContextMenuContainer ref={menuRef} visible={visible} x={x} y={y}>
      {actions.map((action, index) => (
        <ContextMenuItem
          key={index}
          onClick={() => handleActionClick(action)}
        >
          {action.name}
        </ContextMenuItem>
      ))}
    </ContextMenuContainer>
  )
}
