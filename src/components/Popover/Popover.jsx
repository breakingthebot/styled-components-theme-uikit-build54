// src/components/Popover/Popover.jsx
// Theme-able Popover Floating Panel Component built with Styled Components.
// Created: 2026-07-31

import React, { useState, useRef, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';

const scaleUp = keyframes`
  from { opacity: 0; transform: scale(0.94); }
  to { opacity: 1; transform: scale(1); }
`;

const Container = styled.div`
  position: relative;
  display: inline-flex;
`;

const getPopoverPosition = ({ position = 'bottomLeft' }) => {
  switch (position) {
    case 'bottomRight':
      return css`
        top: 100%;
        right: 0;
        margin-top: 8px;
      `;
    case 'topLeft':
      return css`
        bottom: 100%;
        left: 0;
        margin-bottom: 8px;
      `;
    case 'topRight':
      return css`
        bottom: 100%;
        right: 0;
        margin-bottom: 8px;
      `;
    case 'bottomLeft':
    default:
      return css`
        top: 100%;
        left: 0;
        margin-top: 8px;
      `;
  }
};

const PopoverPanel = styled.div`
  position: absolute;
  z-index: 1000;
  width: 280px;
  background-color: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  overflow: hidden;
  animation: ${scaleUp} 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  ${getPopoverPosition}
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.surfaceElevated};
`;

const Title = styled.h4`
  font-size: 0.875rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

const Body = styled.div`
  padding: 16px;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.85rem;
  line-height: 1.5;
`;

export const Popover = ({
  trigger,
  title,
  children,
  position = 'bottomLeft',
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <Container ref={containerRef} className={className}>
      <div onClick={() => setIsOpen((prev) => !prev)}>
        {trigger}
      </div>

      {isOpen && (
        <PopoverPanel position={position} role="dialog">
          {title && (
            <Header>
              <Title>{title}</Title>
            </Header>
          )}
          <Body>{children}</Body>
        </PopoverPanel>
      )}
    </Container>
  );
};
