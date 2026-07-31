// src/components/Table/Table.jsx
// Theme-able Data Table & Pagination Controls Component built with Styled Components.
// Created: 2026-07-31

import React, { useState, useMemo } from 'react';
import styled, { css } from 'styled-components';
import { Button } from '../Button/Button';

const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  background-color: ${({ theme }) => theme.colors.surface};
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  font-size: 0.875rem;
`;

const TableHeader = styled.thead`
  background-color: ${({ theme }) => theme.colors.surfaceElevated};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const HeaderCell = styled.th`
  padding: 14px 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  user-select: none;

  ${({ sortable }) =>
    sortable &&
    css`
      cursor: pointer;
      &:hover {
        color: ${({ theme }) => theme.colors.primary};
      }
    `}
`;

const HeaderFlex = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const SortIcon = styled.span`
  font-size: 0.7rem;
  color: ${({ active, theme }) => (active ? theme.colors.primary : theme.colors.textMuted)};
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  transition: background-color 0.15s ease;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.surfaceElevated};
  }
`;

const TableCell = styled.td`
  padding: 14px 18px;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const PaginationBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 0;
  gap: 16px;
  flex-wrap: wrap;
`;

const PageInfo = styled.span`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const Table = ({
  columns = [],
  data = [],
  pageSize = 5,
  className,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortKey, setSortKey] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');

  const handleSort = (key) => {
    if (sortKey === key) {
      setSortOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortKey(key);
      setSortOrder('asc');
    }
  };

  const sortedData = useMemo(() => {
    if (!sortKey) return data;
    return [...data].sort((a, b) => {
      const valA = a[sortKey];
      const valB = b[sortKey];
      if (valA < valB) return sortOrder === 'asc' ? -1 : 1;
      if (valA > valB) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });
  }, [data, sortKey, sortOrder]);

  const totalPages = Math.ceil(sortedData.length / pageSize) || 1;
  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return sortedData.slice(start, start + pageSize);
  }, [sortedData, currentPage, pageSize]);

  return (
    <TableContainer className={className}>
      <TableWrapper>
        <StyledTable>
          <TableHeader>
            <tr>
              {columns.map((col) => (
                <HeaderCell
                  key={col.key}
                  sortable={col.sortable}
                  onClick={() => col.sortable && handleSort(col.key)}
                >
                  <HeaderFlex>
                    <span>{col.label}</span>
                    {col.sortable && (
                      <SortIcon active={sortKey === col.key}>
                        {sortKey === col.key ? (sortOrder === 'asc' ? '▲' : '▼') : '↕'}
                      </SortIcon>
                    )}
                  </HeaderFlex>
                </HeaderCell>
              ))}
            </tr>
          </TableHeader>

          <TableBody>
            {paginatedData.map((row, rowIdx) => (
              <TableRow key={rowIdx}>
                {columns.map((col) => (
                  <TableCell key={col.key}>
                    {col.render ? col.render(row[col.key], row) : row[col.key]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </StyledTable>
      </TableWrapper>

      <PaginationBar>
        <PageInfo>
          Showing Page <strong>{currentPage}</strong> of <strong>{totalPages}</strong> ({data.length} total records)
        </PageInfo>

        <div style={{ display: 'flex', gap: '8px' }}>
          <Button
            size="sm"
            variant="outline"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          >
            Previous
          </Button>
          <Button
            size="sm"
            variant="outline"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
          >
            Next
          </Button>
        </div>
      </PaginationBar>
    </TableContainer>
  );
};
