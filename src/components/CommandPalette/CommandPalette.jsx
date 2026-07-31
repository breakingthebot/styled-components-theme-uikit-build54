// src/components/CommandPalette/CommandPalette.jsx
// Theme-able Search Filter Command Palette Component built with Styled Components.
// Created: 2026-07-31

import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

const scaleUp = keyframes`
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 3000;
  background-color: ${({ theme }) =>
    theme.mode === 'dark' ? 'rgba(0, 0, 0, 0.75)' : 'rgba(15, 23, 42, 0.5)'};
  backdrop-filter: blur(8px);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 100px;
`;

const PaletteModal = styled.div`
  background-color: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  width: 100%;
  max-width: 580px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  animation: ${scaleUp} 0.2s cubic-bezier(0.4, 0, 0.2, 1);
`;

const SearchHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.surfaceElevated};
`;

const SearchInput = styled.input`
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  font-size: 1rem;
  font-family: inherit;
  color: ${({ theme }) => theme.colors.textPrimary};

  &::placeholder {
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;

const ShortcutBadge = styled.kbd`
  padding: 2px 6px;
  background-color: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.sm};
  font-size: 0.75rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const ResultsList = styled.div`
  max-height: 320px;
  overflow-y: auto;
  padding: 8px 0;
`;

const CategoryGroup = styled.div`
  margin-bottom: 8px;
`;

const CategoryLabel = styled.div`
  padding: 6px 20px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.textMuted};
`;

const CommandItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textSecondary};
  transition: background-color 0.15s ease, color 0.15s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryLight};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const CommandFlex = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.9rem;
  font-weight: 500;
`;

const EmptyState = styled.div`
  padding: 32px 20px;
  text-align: center;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.9rem;
`;

export const CommandPalette = ({
  isOpen,
  onClose,
  commands = [],
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

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

  const filteredCommands = commands.filter((cmd) =>
    cmd.label.toLowerCase().includes(query.toLowerCase()) ||
    (cmd.category && cmd.category.toLowerCase().includes(query.toLowerCase()))
  );

  // Group commands by category
  const categories = Array.from(
    new Set(filteredCommands.map((c) => c.category || 'General'))
  );

  return (
    <Overlay onClick={onClose}>
      <PaletteModal onClick={(e) => e.stopPropagation()} role="dialog">
        <SearchHeader>
          <span>🔍</span>
          <SearchInput
            ref={inputRef}
            placeholder="Type a command or search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <ShortcutBadge>ESC</ShortcutBadge>
        </SearchHeader>

        <ResultsList>
          {filteredCommands.length === 0 ? (
            <EmptyState>No matching commands found.</EmptyState>
          ) : (
            categories.map((cat) => (
              <CategoryGroup key={cat}>
                <CategoryLabel>{cat}</CategoryLabel>
                {filteredCommands
                  .filter((c) => (c.category || 'General') === cat)
                  .map((cmd) => (
                    <CommandItem
                      key={cmd.id}
                      onClick={() => {
                        if (cmd.action) cmd.action();
                        if (onClose) onClose();
                      }}
                    >
                      <CommandFlex>
                        {cmd.icon && <span>{cmd.icon}</span>}
                        <span>{cmd.label}</span>
                      </CommandFlex>

                      {cmd.shortcut && <ShortcutBadge>{cmd.shortcut}</ShortcutBadge>}
                    </CommandItem>
                  ))}
              </CategoryGroup>
            ))
          )}
        </ResultsList>
      </PaletteModal>
    </Overlay>
  );
};
