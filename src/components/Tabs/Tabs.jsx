// src/components/Tabs/Tabs.jsx
// Theme-able Tabs Navigation Component built with Styled Components.
// Created: 2026-07-30

import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

const getVariantListStyle = ({ variant = 'underline', theme }) => {
  switch (variant) {
    case 'pills':
      return css`
        gap: 8px;
        border-bottom: none;
      `;
    case 'segmented':
      return css`
        gap: 4px;
        padding: 4px;
        background-color: ${theme.colors.surfaceElevated};
        border-radius: ${theme.radii.md};
        border: 1px solid ${theme.colors.border};
      `;
    case 'underline':
    default:
      return css`
        gap: 16px;
        border-bottom: 1px solid ${theme.colors.border};
      `;
  }
};

const TabList = styled.div`
  display: flex;
  align-items: center;
  overflow-x: auto;
  user-select: none;

  ${getVariantListStyle}
`;

const getVariantTabStyle = ({ variant = 'underline', isActive, theme }) => {
  switch (variant) {
    case 'pills':
      return css`
        padding: 8px 16px;
        border-radius: ${theme.radii.md};
        background-color: ${isActive ? theme.colors.primary : 'transparent'};
        color: ${isActive ? '#ffffff' : theme.colors.textSecondary};
        &:hover:not(:disabled) {
          background-color: ${isActive
            ? theme.colors.primaryHover
            : theme.colors.surfaceElevated};
          color: ${isActive ? '#ffffff' : theme.colors.textPrimary};
        }
      `;
    case 'segmented':
      return css`
        flex: 1;
        justify-content: center;
        padding: 6px 14px;
        border-radius: ${theme.radii.sm};
        background-color: ${isActive ? theme.colors.primaryLight : 'transparent'};
        color: ${isActive ? theme.colors.primary : theme.colors.textSecondary};
        font-weight: ${isActive ? 700 : 500};
        &:hover:not(:disabled) {
          color: ${theme.colors.textPrimary};
        }
      `;
    case 'underline':
    default:
      return css`
        padding: 10px 4px;
        border-bottom: 2px solid
          ${isActive ? theme.colors.primary : 'transparent'};
        color: ${isActive ? theme.colors.primary : theme.colors.textSecondary};
        font-weight: ${isActive ? 700 : 500};
        &:hover:not(:disabled) {
          color: ${theme.colors.textPrimary};
        }
      `;
  }
};

const TabButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  border: none;
  font-family: inherit;
  font-size: 0.875rem;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s ease;

  ${getVariantTabStyle}

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

const ContentPanel = styled.div`
  padding: 16px 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.9rem;
  line-height: 1.6;
`;

export const Tabs = ({
  tabs = [],
  variant = 'underline',
  defaultActiveId,
  onChange,
}) => {
  const [activeTabId, setActiveTabId] = useState(
    defaultActiveId || (tabs[0] && tabs[0].id)
  );

  const handleTabClick = (tab) => {
    if (tab.disabled) return;
    setActiveTabId(tab.id);
    if (onChange) onChange(tab.id);
  };

  const currentTab = tabs.find((t) => t.id === activeTabId);

  return (
    <Container>
      <TabList variant={variant} role="tablist">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTabId;
          return (
            <TabButton
              key={tab.id}
              role="tab"
              aria-selected={isActive}
              variant={variant}
              isActive={isActive}
              disabled={tab.disabled}
              onClick={() => handleTabClick(tab)}
            >
              {tab.icon && <span>{tab.icon}</span>}
              <span>{tab.label}</span>
              {tab.badge && <span>{tab.badge}</span>}
            </TabButton>
          );
        })}
      </TabList>

      {currentTab && <ContentPanel role="tabpanel">{currentTab.content}</ContentPanel>}
    </Container>
  );
};
