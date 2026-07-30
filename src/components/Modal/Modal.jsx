// src/components/Modal/Modal.jsx
// Theme-able Modal Overlay Component built with Styled Components.
// Created: 2026-07-30

import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const scaleUp = keyframes`
  from { opacity: 0; transform: scale(0.92); }
  to { opacity: 1; transform: scale(1); }
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  background-color: ${({ theme }) =>
    theme.mode === 'dark' ? 'rgba(0, 0, 0, 0.75)' : 'rgba(15, 23, 42, 0.5)'};
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  animation: ${fadeIn} 0.25s cubic-bezier(0.4, 0, 0.2, 1);
`;

const getModalWidth = ({ size = 'md' }) => {
  switch (size) {
    case 'sm':
      return '400px';
    case 'lg':
      return '720px';
    case 'md':
    default:
      return '540px';
  }
};

const ModalContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  width: 100%;
  max-width: ${getModalWidth};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: ${scaleUp} 0.25s cubic-bezier(0.4, 0, 0.2, 1);
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 24px;
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
  padding: 24px;
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

export const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
  size = 'md',
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
    <Overlay onClick={onClose}>
      <ModalContainer size={size} onClick={(e) => e.stopPropagation()} role="dialog">
        {title && (
          <Header>
            <Title>{title}</Title>
            {onClose && <CloseButton onClick={onClose}>✕</CloseButton>}
          </Header>
        )}

        <Body>{children}</Body>

        {footer && <Footer>{footer}</Footer>}
      </ModalContainer>
    </Overlay>
  );
};
