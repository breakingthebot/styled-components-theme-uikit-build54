// src/components/Drawer/Drawer.jsx
// Theme-able Slide-Over Drawer Panel Component built with Styled Components.
// Created: 2026-07-31

import React, { useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideRight = keyframes`
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
`;

const slideLeft = keyframes`
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  background-color: ${({ theme }) =>
    theme.mode === 'dark' ? 'rgba(0, 0, 0, 0.75)' : 'rgba(15, 23, 42, 0.5)'};
  backdrop-filter: blur(8px);
  display: flex;
  justify-content: ${({ position }) => (position === 'left' ? 'flex-start' : 'flex-end')};
  animation: ${fadeIn} 0.25s cubic-bezier(0.4, 0, 0.2, 1);
`;

const getDrawerWidth = ({ size = 'md' }) => {
  switch (size) {
    case 'sm':
      return '360px';
    case 'lg':
      return '640px';
    case 'md':
    default:
      return '480px';
  }
};

const DrawerPanel = styled.div`
  background-color: ${({ theme }) => theme.colors.surface};
  border-left: ${({ position, theme }) =>
    position === 'right' ? `1px solid ${theme.colors.border}` : 'none'};
  border-right: ${({ position, theme }) =>
    position === 'left' ? `1px solid ${theme.colors.border}` : 'none'};
  width: 100%;
  max-width: ${getDrawerWidth};
  height: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  animation: ${({ position }) => (position === 'left' ? slideLeft : slideRight)} 0.3s
    cubic-bezier(0.4, 0, 0.2, 1);
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const Title = styled.h3`
  font-size: 1.15rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 1.2rem;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: ${({ theme }) => theme.radii.sm};
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.surfaceElevated};
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;

const Body = styled.div`
  flex: 1;
  padding: 24px;
  overflow-y: auto;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.9rem;
  line-height: 1.6;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  padding: 16px 24px;
  background-color: ${({ theme }) => theme.colors.surfaceElevated};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Drawer = ({
  isOpen,
  onClose,
  title,
  position = 'right',
  size = 'md',
  children,
  footer,
}) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen && onClose) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <Overlay position={position} onClick={onClose}>
      <DrawerPanel
        position={position}
        size={size}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
      >
        {title && (
          <Header>
            <Title>{title}</Title>
            {onClose && <CloseButton onClick={onClose}>✕</CloseButton>}
          </Header>
        )}

        <Body>{children}</Body>

        {footer && <Footer>{footer}</Footer>}
      </DrawerPanel>
    </Overlay>
  );
};
