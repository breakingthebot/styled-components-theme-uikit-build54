// src/components/Tooltip/Tooltip.jsx
// Theme-able Tooltip Hover Popup Component built with Styled Components.
// Created: 2026-07-30

import React, { useState, useRef } from 'react';
import styled, { css, keyframes } from 'styled-components';

const fadeInScale = keyframes`
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
`;

const Container = styled.div`
  position: relative;
  display: inline-flex;
`;

const getTooltipPosition = ({ position = 'top' }) => {
  switch (position) {
    case 'bottom':
      return css`
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        margin-top: 8px;
      `;
    case 'left':
      return css`
        right: 100%;
        top: 50%;
        transform: translateY(-50%);
        margin-right: 8px;
      `;
    case 'right':
      return css`
        left: 100%;
        top: 50%;
        transform: translateY(-50%);
        margin-left: 8px;
      `;
    case 'top':
    default:
      return css`
        bottom: 100%;
        left: 50%;
        transform: translateX(-50%);
        margin-bottom: 8px;
      `;
  }
};

const TooltipBubble = styled.div`
  position: absolute;
  z-index: 1000;
  padding: 6px 12px;
  border-radius: ${({ theme }) => theme.radii.sm};
  background-color: ${({ theme }) => theme.colors.surfaceElevated};
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 0.75rem;
  font-weight: 600;
  white-space: nowrap;
  box-shadow: ${({ theme }) => theme.shadows.md};
  pointer-events: none;
  animation: ${fadeInScale} 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  ${getTooltipPosition}
`;

const getArrowStyle = ({ position = 'top', theme }) => {
  switch (position) {
    case 'bottom':
      return css`
        bottom: 100%;
        left: 50%;
        transform: translateX(-50%);
        border-width: 0 5px 5px 5px;
        border-color: transparent transparent ${theme.colors.surfaceElevated} transparent;
      `;
    case 'left':
      return css`
        left: 100%;
        top: 50%;
        transform: translateY(-50%);
        border-width: 5px 0 5px 5px;
        border-color: transparent transparent transparent ${theme.colors.surfaceElevated};
      `;
    case 'right':
      return css`
        right: 100%;
        top: 50%;
        transform: translateY(-50%);
        border-width: 5px 5px 5px 0;
        border-color: transparent ${theme.colors.surfaceElevated} transparent transparent;
      `;
    case 'top':
    default:
      return css`
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        border-width: 5px 5px 0 5px;
        border-color: ${theme.colors.surfaceElevated} transparent transparent transparent;
      `;
  }
};

const Arrow = styled.span`
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
  ${getArrowStyle}
`;

export const Tooltip = ({
  children,
  content,
  position = 'top',
  delay = 150,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef(null);

  const showTooltip = () => {
    timeoutRef.current = setTimeout(() => {
      setIsVisible(true);
    }, delay);
  };

  const hideTooltip = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsVisible(false);
  };

  return (
    <Container
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
    >
      {children}

      {isVisible && content && (
        <TooltipBubble position={position}>
          <span>{content}</span>
          <Arrow position={position} />
        </TooltipBubble>
      )}
    </Container>
  );
};
