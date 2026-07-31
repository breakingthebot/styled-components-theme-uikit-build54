// src/components/Select/Select.jsx
// Theme-able Select Dropdown Menu Component built with Styled Components.
// Created: 2026-07-31

import React, { useState, useRef, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';

const fadeInDown = keyframes`
  from { opacity: 0; transform: translateY(-6px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  position: relative;
  width: 100%;
`;

const Label = styled.label`
  font-size: 0.8rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

const TriggerButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 10px 14px;
  background-color: ${({ theme }) => theme.colors.surface};
  border: 1px solid
    ${({ isOpen, theme }) => (isOpen ? theme.colors.primary : theme.colors.border)};
  border-radius: ${({ theme }) => theme.radii.md};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: inherit;
  font-size: 0.875rem;
  cursor: pointer;
  outline: none;
  transition: all 0.2s ease;
  box-shadow: ${({ isOpen, theme }) =>
    isOpen ? `0 0 0 3px ${theme.colors.primaryLight}` : 'none'};

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `}
`;

const ValueGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Placeholder = styled.span`
  color: ${({ theme }) => theme.colors.textMuted};
`;

const Chevron = styled.span`
  font-size: 0.7rem;
  color: ${({ theme }) => theme.colors.textMuted};
  transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: transform 0.2s ease;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 1000;
  margin-top: 6px;
  padding: 6px;
  background-color: ${({ theme }) => theme.colors.surfaceElevated};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  display: flex;
  flex-direction: column;
  gap: 2px;
  max-height: 240px;
  overflow-y: auto;
  animation: ${fadeInDown} 0.2s cubic-bezier(0.4, 0, 0.2, 1);
`;

const MenuItem = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 9px 12px;
  background-color: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.primaryLight : 'transparent'};
  border: none;
  border-radius: ${({ theme }) => theme.radii.sm};
  color: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.primary : theme.colors.textPrimary};
  font-family: inherit;
  font-size: 0.875rem;
  font-weight: ${({ isSelected }) => (isSelected ? 700 : 500)};
  text-align: left;
  cursor: pointer;
  transition: background-color 0.15s ease;

  &:hover:not(:disabled) {
    background-color: ${({ isSelected, theme }) =>
      isSelected ? theme.colors.primaryLight : theme.colors.border};
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

const ItemLabelGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const CheckMark = styled.span`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Select = ({
  options = [],
  value,
  onChange,
  placeholder = 'Select an option...',
  label,
  disabled,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  const selectedOption = options.find((opt) => opt.value === value);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    if (option.disabled) return;
    if (onChange) onChange(option.value);
    setIsOpen(false);
  };

  return (
    <Container ref={containerRef} className={className}>
      {label && <Label>{label}</Label>}

      <TriggerButton
        type="button"
        isOpen={isOpen}
        disabled={disabled}
        onClick={() => !disabled && setIsOpen((prev) => !prev)}
      >
        <ValueGroup>
          {selectedOption ? (
            <>
              {selectedOption.icon && <span>{selectedOption.icon}</span>}
              <span>{selectedOption.label}</span>
            </>
          ) : (
            <Placeholder>{placeholder}</Placeholder>
          )}
        </ValueGroup>

        <Chevron isOpen={isOpen}>▼</Chevron>
      </TriggerButton>

      {isOpen && (
        <DropdownMenu role="listbox">
          {options.map((option) => {
            const isSelected = option.value === value;
            return (
              <MenuItem
                key={option.value}
                type="button"
                role="option"
                aria-selected={isSelected}
                isSelected={isSelected}
                disabled={option.disabled}
                onClick={() => handleSelect(option)}
              >
                <ItemLabelGroup>
                  {option.icon && <span>{option.icon}</span>}
                  <span>{option.label}</span>
                </ItemLabelGroup>

                {isSelected && <CheckMark>✓</CheckMark>}
              </MenuItem>
            );
          })}
        </DropdownMenu>
      )}
    </Container>
  );
};
