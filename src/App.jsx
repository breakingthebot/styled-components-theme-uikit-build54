// src/App.jsx
// Main Interactive Playground for Build 54: Theme-able UI Kit with Styled Components.
// Created: 2026-07-30

import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';
import { GlobalStyle } from './styles/GlobalStyle';
import { Button } from './components/Button/Button';
import { Card } from './components/Card/Card';
import { Badge } from './components/Badge/Badge';
import { Switch } from './components/Switch/Switch';
import { Input } from './components/Input/Input';
import { Modal } from './components/Modal/Modal';
import { Tabs } from './components/Tabs/Tabs';
import { Progress } from './components/Progress/Progress';
import { Skeleton } from './components/Skeleton/Skeleton';
import { Avatar, AvatarGroup } from './components/Avatar/Avatar';
import { Checkbox } from './components/Checkbox/Checkbox';
import { Toggle } from './components/Toggle/Toggle';
import { Tooltip } from './components/Tooltip/Tooltip';
import { Accordion } from './components/Accordion/Accordion';
import { Select } from './components/Select/Select';
import { Alert } from './components/Alert/Alert';
import { Slider } from './components/Slider/Slider';
import { Breadcrumb } from './components/Breadcrumb/Breadcrumb';
import { Drawer } from './components/Drawer/Drawer';
import { Table } from './components/Table/Table';

const AppContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 24px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-bottom: 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const HeaderTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
`;

const BadgeStrip = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h1`
  font-size: 2.2rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.textPrimary};
  letter-spacing: -0.02em;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 720px;
  line-height: 1.6;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SectionTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
`;

export function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [inputValue, setInputValue] = useState('acme-corp-prod');
  const [sliderVal, setSliderVal] = useState(65);

  const theme = isDarkMode ? darkTheme : lightTheme;

  const tableColumns = [
    { key: 'id', label: 'Cluster ID', sortable: true },
    { key: 'region', label: 'Region', sortable: true },
    {
      key: 'status',
      label: 'Status',
      sortable: true,
      render: (val) => (
        <Badge variant={val === 'Operational' ? 'success' : 'warning'} hasDot>
          {val}
        </Badge>
      ),
    },
    { key: 'uptime', label: 'SLA Uptime', sortable: true },
    { key: 'latency', label: 'Avg Latency', sortable: true },
  ];

  const tableData = [
    { id: 'use1-a', region: 'us-east-1a (N. Virginia)', status: 'Operational', uptime: '99.99%', latency: '12ms' },
    { id: 'use1-b', region: 'us-east-1b (N. Virginia)', status: 'Operational', uptime: '99.98%', latency: '14ms' },
    { id: 'euw1-a', region: 'eu-west-1a (Ireland)', status: 'Operational', uptime: '99.95%', latency: '28ms' },
    { id: 'euw1-b', region: 'eu-west-1b (Ireland)', status: 'Degraded', uptime: '98.50%', latency: '82ms' },
    { id: 'aps1-a', region: 'ap-southeast-1a (Singapore)', status: 'Operational', uptime: '99.99%', latency: '42ms' },
    { id: 'sae1-a', region: 'sa-east-1a (São Paulo)', status: 'Operational', uptime: '99.91%', latency: '64ms' },
  ];

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppContainer>
        {/* HEADER */}
        <Header>
          <HeaderTop>
            <BadgeStrip>
              <Badge variant="info" hasDot isPulse>CSS-in-JS Architecture</Badge>
              <Badge variant="success">v2.3.0 Release</Badge>
              <Badge variant="neutral">Styled Components</Badge>
            </BadgeStrip>

            <Switch
              checked={isDarkMode}
              onChange={setIsDarkMode}
              label={isDarkMode ? 'Dark Theme Active' : 'Light Theme Active'}
            />
          </HeaderTop>

          <Title>Styled Components UI Kit</Title>
          <Subtitle>
            A production-grade, theme-able React UI library built with <strong>styled-components (CSS-in-JS)</strong>. Real-time Light/Dark theme switching, dynamic prop-based styling, and 100% scoped style encapsulation.
          </Subtitle>
        </Header>

        {/* SECTION 1: BUTTON SHOWCASE */}
        <Section>
          <SectionHeader>
            <SectionTitle>1. Styled Button Component (`Button.jsx`)</SectionTitle>
            <Badge variant="neutral">Dynamic Variants &amp; Sizes</Badge>
          </SectionHeader>

          <Row>
            <Button variant="primary">Primary CTA</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="danger">Danger Action</Button>
            <Button variant="outline">Outline Button</Button>
            <Button variant="ghost">Ghost Button</Button>
          </Row>
        </Section>

        {/* SECTION 2: DATA TABLE & PAGINATION (NEW v2.3.0) */}
        <Section>
          <SectionHeader>
            <SectionTitle>2. Styled Data Table &amp; Pagination (`Table.jsx`)</SectionTitle>
            <Badge variant="info" hasDot isPulse>NEW v2.3.0</Badge>
          </SectionHeader>

          <Card>
            <Card.Header title="Cluster Telemetry Node Matrix" subtitle="Sortable headers &amp; page navigation controls" />
            <Card.Body>
              <Table columns={tableColumns} data={tableData} pageSize={4} />
            </Card.Body>
          </Card>
        </Section>

        {/* SECTION 3: DRAWER PANEL */}
        <Section>
          <SectionHeader>
            <SectionTitle>3. Styled Slide-Over Drawer Panel (`Drawer.jsx`)</SectionTitle>
            <Badge variant="neutral">Overlay System</Badge>
          </SectionHeader>

          <Row>
            <Button variant="primary" onClick={() => setIsDrawerOpen(true)}>
              📂 Open Cluster Configuration Drawer
            </Button>
          </Row>
        </Section>

        {/* SECTION 4: SLIDER RANGE CONTROL */}
        <Section>
          <SectionHeader>
            <SectionTitle>4. Styled Slider Range Control (`Slider.jsx`)</SectionTitle>
            <Badge variant="neutral">Form Controls</Badge>
          </SectionHeader>

          <Grid>
            <Card>
              <Card.Header title="System Resource Allocation" subtitle="Interactive slider range controls with dynamic fills" />
              <Card.Body>
                <Slider
                  label="CPU Core Allocation Capacity"
                  value={sliderVal}
                  onChange={setSliderVal}
                  unit="%"
                />
              </Card.Body>
            </Card>
          </Grid>
        </Section>
      </AppContainer>

      {/* DEMO SLIDE-OVER DRAWER */}
      <Drawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        title="⚙️ Cluster Configuration Drawer"
        position="right"
        size="md"
        footer={
          <>
            <Button variant="ghost" onClick={() => setIsDrawerOpen(false)}>Cancel</Button>
            <Button variant="primary" onClick={() => setIsDrawerOpen(false)}>Apply Configuration</Button>
          </>
        }
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <Alert variant="info" title="Active Environment">
            Modifying settings for primary region <strong>us-east-1</strong>.
          </Alert>

          <Input
            label="Cluster Domain Endpoint"
            addon="https://"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />

          <Slider
            label="Worker Node Allocation"
            value={sliderVal}
            onChange={setSliderVal}
            unit="%"
          />
        </div>
      </Drawer>

      {/* DEMO MODAL DIALOG */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="🪟 Styled Components Modal Demo"
        footer={
          <>
            <Button variant="ghost" onClick={() => setIsModalOpen(false)}>Cancel</Button>
            <Button variant="primary" onClick={() => setIsModalOpen(false)}>
              Confirm Action
            </Button>
          </>
        }
      >
        <p>
          This theme-aware modal dialog is built with <strong>styled-components</strong>. It features backdrop blur overlays, scale-up entrance keyframe animations, and keyboard <kbd style={{ background: 'rgba(255,255,255,0.1)', padding: '2px 6px', borderRadius: '4px' }}>ESC</kbd> dismissal.
        </p>
      </Modal>
    </ThemeProvider>
  );
}
