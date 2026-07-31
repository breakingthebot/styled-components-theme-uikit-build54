// src/components/Timeline/Timeline.jsx
// Theme-able Timeline Milestone Feed Component built with Styled Components.
// Created: 2026-07-31

import React from 'react';
import styled, { css } from 'styled-components';
import { Badge } from '../Badge/Badge';

const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding-left: 28px;
  width: 100%;

  &::before {
    content: '';
    position: absolute;
    top: 6px;
    bottom: 6px;
    left: 9px;
    width: 2px;
    background-color: ${({ theme }) => theme.colors.border};
  }
`;

const TimelineItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 24px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const getNodeColor = ({ variant = 'primary', theme }) => {
  switch (variant) {
    case 'success':
      return theme.colors.success;
    case 'warning':
      return theme.colors.warning;
    case 'info':
      return theme.colors.info;
    case 'primary':
    default:
      return theme.colors.primary;
  }
};

const NodeDot = styled.div`
  position: absolute;
  top: 4px;
  left: -28px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: ${(props) => getNodeColor(props)};
  border: 3px solid ${({ theme }) => theme.colors.surface};
  box-shadow: 0 0 0 2px ${(props) => getNodeColor(props)};
  z-index: 1;
`;

const ItemHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
`;

const Title = styled.h4`
  font-size: 0.95rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: 0;
`;

const Timestamp = styled.span`
  font-size: 0.78rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textMuted};
`;

const Description = styled.p`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: 0;
  line-height: 1.5;
`;

export const Timeline = ({ items = [], className }) => {
  return (
    <TimelineContainer className={className}>
      {items.map((item, idx) => (
        <TimelineItem key={idx}>
          <NodeDot variant={item.variant} />
          <ItemHeader>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Title>{item.title}</Title>
              {item.tag && <Badge variant={item.variant || 'neutral'}>{item.tag}</Badge>}
            </div>
            {item.date && <Timestamp>{item.date}</Timestamp>}
          </ItemHeader>
          {item.description && <Description>{item.description}</Description>}
        </TimelineItem>
      ))}
    </TimelineContainer>
  );
};
