// src/App.jsx
// Main Interactive Playground for Build 54: Theme-able UI Kit with Styled Components.
// Created: 2026-07-30

import React, { useState, useEffect } from 'react';
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
import { SegmentedControl } from './components/SegmentedControl/SegmentedControl';
import { Popover } from './components/Popover/Popover';
import { Toast } from './components/Toast/Toast';
import { CommandPalette } from './components/CommandPalette/CommandPalette';
import { Timeline } from './components/Timeline/Timeline';
import { Rating } from './components/Rating/Rating';

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
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const [inputValue, setInputValue] = useState('acme-corp-prod');
  const [selectedCluster, setSelectedCluster] = useState('us-east-1');
  const [progressVal, setProgressVal] = useState(75);
  const [sliderVal, setSliderVal] = useState(65);
  const [ratingVal, setRatingVal] = useState(4);
  const [viewMode, setViewMode] = useState('grid');
  const [activeTab, setActiveTab] = useState('overview');
  const [checkboxChecked, setCheckboxChecked] = useState(true);
  const [toggleChecked, setToggleChecked] = useState(true);
  const [toasts, setToasts] = useState([]);

  const theme = isDarkMode ? darkTheme : lightTheme;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const commandsList = [
    { id: 1, category: 'Theme Control', label: 'Toggle Light/Dark Theme', icon: '🌙', shortcut: '⌘T', action: () => setIsDarkMode((d) => !d) },
    { id: 2, category: 'Navigation', label: 'Open Cluster Configuration Drawer', icon: '📂', shortcut: '⌘D', action: () => setIsDrawerOpen(true) },
    { id: 3, category: 'Navigation', label: 'Open Demo Modal Dialog', icon: '🪟', shortcut: '⌘M', action: () => setIsModalOpen(true) },
    { id: 4, category: 'Actions', label: 'Trigger Success Toast Notification', icon: '✅', action: () => addToast('success', 'Command Executed', 'Action executed via Command Palette.') },
    { id: 5, category: 'Actions', label: 'Rotate Cluster AES Secret Keys', icon: '🔑', action: () => addToast('warning', 'Security Alert', 'AES keys rotation initiated.') },
  ];

  const breadcrumbItems = [
    { label: 'Infrastructure', icon: '☁️', href: '#' },
    { label: 'Cluster Regions', icon: '🌐', href: '#' },
    { label: 'us-east-1', icon: '🇺🇸', href: '#' },
    { label: 'Telemetry Matrices' },
  ];

  const timelineItems = [
    { date: '15:32:00 UTC', title: 'Release v2.9.0 Deployed', description: 'Integrated Rating Star Input component into master UI kit.', variant: 'success', tag: 'v2.9.0' },
    { date: '15:28:40 UTC', title: 'Release v2.8.0 Deployed', description: 'Integrated Timeline Milestone Feed component.', variant: 'info', tag: 'v2.8.0' },
  ];

  const clusterOptions = [
    { value: 'us-east-1', label: 'US East (N. Virginia)', icon: '🇺🇸' },
    { value: 'eu-west-1', label: 'EU West (Ireland)', icon: '🇪🇺' },
    { value: 'ap-southeast-1', label: 'Asia Pacific (Singapore)', icon: '🇸🇬' },
  ];

  const tabItems = [
    { id: 'overview', label: 'Overview', icon: '📊' },
    { id: 'nodes', label: 'Worker Nodes', icon: '🖥️', badge: 12 },
    { id: 'settings', label: 'Cluster Settings', icon: '⚙️' },
  ];

  const accordionItems = [
    { id: 1, title: 'What is styled-components?', content: 'styled-components is a CSS-in-JS library that lets you write actual CSS code to style your React components with scoped styles, props-based dynamic styling, and theme providers.' },
    { id: 2, title: 'How does theme switching work?', content: 'Components consume design tokens passed through styled-components <ThemeProvider>. When theme state toggles, all styled components automatically re-render with updated colors.' },
  ];

  const tableColumns = [
    { key: 'id', label: 'Node ID', sortable: true },
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
  ];

  const avatarUsers = [
    { name: 'Sarah Connor', status: 'online' },
    { name: 'Alex Mercer', status: 'busy' },
    { name: 'Elena Rostova', status: 'away' },
    { name: 'Marcus Vance', status: 'offline' },
  ];

  const addToast = (variant, title, message) => {
    const newToast = { id: Date.now(), title, message, variant };
    setToasts((prev) => [...prev, newToast]);
  };

  const dismissToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppContainer>
        {/* TOAST STREAMER FIXED OVERLAY */}
        <Toast toasts={toasts} onDismiss={dismissToast} position="topRight" />

        {/* COMMAND PALETTE MODAL OVERLAY */}
        <CommandPalette
          isOpen={isPaletteOpen}
          onClose={() => setIsPaletteOpen(false)}
          commands={commandsList}
        />

        {/* HEADER */}
        <Header>
          <HeaderTop>
            <BadgeStrip>
              <Badge variant="info" hasDot isPulse>CSS-in-JS Architecture</Badge>
              <Badge variant="success">v2.9.0 Master UI Kit</Badge>
              <Badge variant="neutral">27 Components</Badge>
            </BadgeStrip>

            <Switch
              checked={isDarkMode}
              onChange={setIsDarkMode}
              label={isDarkMode ? 'Dark Theme Active' : 'Light Theme Active'}
            />
          </HeaderTop>

          <Title>Styled Components UI Kit</Title>
          <Subtitle>
            A production-grade, theme-able React UI library built with <strong>styled-components (CSS-in-JS)</strong>. Real-time Light/Dark theme switching, dynamic prop-based styling, and 100% scoped style encapsulation across 27 production-ready components.
          </Subtitle>

          <Breadcrumb items={breadcrumbItems} separator="›" />
        </Header>

        {/* SECTION 1: SEARCH & OVERLAYS */}
        <Section>
          <SectionHeader>
            <SectionTitle>1. Command Palette &amp; Floating Overlays</SectionTitle>
            <Badge variant="info" hasDot isPulse>Interactive Controls</Badge>
          </SectionHeader>

          <Row>
            <Button variant="primary" onClick={() => setIsPaletteOpen(true)}>
              🔍 Open Command Palette (⌘K)
            </Button>
            <Button variant="secondary" onClick={() => setIsDrawerOpen(true)}>
              📂 Open Configuration Drawer
            </Button>
            <Button variant="outline" onClick={() => setIsModalOpen(true)}>
              🪟 Open Modal Dialog
            </Button>

            <Popover
              title="🔐 Secret API Key Vault"
              position="bottomLeft"
              trigger={<Button variant="ghost">Popover Bottom Left</Button>}
            >
              <p style={{ marginBottom: '12px' }}>
                Bearer tokens encrypted with AES-256-GCM.
              </p>
              <Button size="sm" variant="primary">Rotate Secret Key</Button>
            </Popover>
          </Row>
        </Section>

        {/* SECTION 2: RATING STAR INPUT (NEW v2.9.0) */}
        <Section>
          <SectionHeader>
            <SectionTitle>2. Styled Rating Star Input (`Rating.jsx`)</SectionTitle>
            <Badge variant="info" hasDot isPulse>NEW v2.9.0</Badge>
          </SectionHeader>

          <Grid>
            <Card>
              <Card.Header title="Interactive Customer Satisfaction" subtitle="Hover star previews with gold fills" />
              <Card.Body>
                <Rating
                  label="Rate Infrastructure Performance"
                  value={ratingVal}
                  onChange={setRatingVal}
                  size="lg"
                />
              </Card.Body>
            </Card>

            <Card>
              <Card.Header title="ReadOnly Metric Rating" subtitle="Small size read-only star display" />
              <Card.Body>
                <Rating
                  label="Average Cluster Score"
                  value={5}
                  readOnly
                  size="md"
                />
              </Card.Body>
            </Card>
          </Grid>
        </Section>

        {/* SECTION 3: TIMELINE MILESTONE FEED */}
        <Section>
          <SectionHeader>
            <SectionTitle>3. Styled Timeline Milestone Feed (`Timeline.jsx`)</SectionTitle>
            <Badge variant="neutral">Activity Log</Badge>
          </SectionHeader>

          <Card>
            <Card.Header title="Release Audit Activity Feed" subtitle="Vertical timeline track with glowing node dots" />
            <Card.Body>
              <Timeline items={timelineItems} />
            </Card.Body>
          </Card>
        </Section>

        {/* SECTION 4: TOAST NOTIFICATION STREAMER */}
        <Section>
          <SectionHeader>
            <SectionTitle>4. Toast Notification Streamer (`Toast.jsx`)</SectionTitle>
            <Badge variant="neutral">Notification System</Badge>
          </SectionHeader>

          <Row>
            <Button variant="primary" onClick={() => addToast('success', 'Backup Succeeded', 'Database snapshot created in 1.2s.')}>
              ✅ Success Toast
            </Button>
            <Button variant="secondary" onClick={() => addToast('info', 'System Notice', 'SDK release v3.4.0 active.')}>
              ℹ️ Info Toast
            </Button>
            <Button variant="outline" onClick={() => addToast('warning', 'Memory Alert', 'RAM usage crossed 88%.')}>
              ⚠️ Warning Toast
            </Button>
            <Button variant="danger" onClick={() => addToast('danger', 'Outage Alert', 'Connection lost to sa-east-1.')}>
              🚨 Danger Toast
            </Button>
          </Row>
        </Section>

        {/* SECTION 5: DATA TABLE & PAGINATION */}
        <Section>
          <SectionHeader>
            <SectionTitle>5. Data Table &amp; Pagination (`Table.jsx`)</SectionTitle>
            <Badge variant="neutral">Data Display</Badge>
          </SectionHeader>

          <Card>
            <Card.Header title="Cluster Telemetry Node Matrix" subtitle="Sortable column headers &amp; page navigation" />
            <Card.Body>
              <Table columns={tableColumns} data={tableData} pageSize={2} />
            </Card.Body>
          </Card>
        </Section>

        {/* SECTION 6: FORM CONTROLS & RANGE SLIDER */}
        <Section>
          <SectionHeader>
            <SectionTitle>6. Form Inputs, Select, &amp; Range Sliders</SectionTitle>
            <Badge variant="neutral">Form Controls</Badge>
          </SectionHeader>

          <Grid>
            <Card>
              <Card.Header title="Input &amp; Dropdown Select" subtitle="Text fields with addons and custom dropdowns" />
              <Card.Body>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <Input
                    label="Cluster Domain Endpoint"
                    addon="https://"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />

                  <Select
                    label="Target Primary Cluster"
                    options={clusterOptions}
                    value={selectedCluster}
                    onChange={setSelectedCluster}
                  />
                </div>
              </Card.Body>
            </Card>

            <Card>
              <Card.Header title="Range Slider &amp; Checkboxes" subtitle="Interactive sliders &amp; custom switches" />
              <Card.Body>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <Slider
                    label="CPU Allocation Capacity"
                    value={sliderVal}
                    onChange={setSliderVal}
                    unit="%"
                  />

                  <div style={{ display: 'flex', gap: '20px', marginTop: '8px' }}>
                    <Checkbox
                      label="Auto-scale Nodes"
                      checked={checkboxChecked}
                      onChange={setCheckboxChecked}
                    />

                    <Toggle
                      label="SLA Alerting"
                      checked={toggleChecked}
                      onChange={setToggleChecked}
                    />
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Grid>
        </Section>

        {/* SECTION 7: NAVIGATION TABS & SEGMENTED CONTROL */}
        <Section>
          <SectionHeader>
            <SectionTitle>7. Navigation Tabs &amp; Segmented Control</SectionTitle>
            <Badge variant="neutral">Navigation</Badge>
          </SectionHeader>

          <Card>
            <Card.Header title="Cluster Workspace Tabs" subtitle="Underline tab bar with badges" />
            <Card.Body>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <Tabs items={tabItems} activeTab={activeTab} onChange={setActiveTab} variant="underline" />

                <SegmentedControl
                  options={[
                    { value: 'grid', label: 'Grid View', icon: '🎛️' },
                    { value: 'list', label: 'List View', icon: '📋' },
                    { value: 'kanban', label: 'Kanban Board', icon: '📊' },
                  ]}
                  value={viewMode}
                  onChange={setViewMode}
                  fullWidth
                />
              </div>
            </Card.Body>
          </Card>
        </Section>

        {/* SECTION 8: FEEDBACK & ACCORDION */}
        <Section>
          <SectionHeader>
            <SectionTitle>8. Progress, Skeleton, Avatars, &amp; Accordion</SectionTitle>
            <Badge variant="neutral">Feedback &amp; Disclosure</Badge>
          </SectionHeader>

          <Grid>
            <Card>
              <Card.Header title="Progress &amp; Avatars" subtitle="Animated gradient progress bar &amp; user avatar group" />
              <Card.Body>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <Progress label="Cluster Memory Load" value={sliderVal} showValue variant="gradient" animated />

                  <div>
                    <span style={{ fontSize: '0.85rem', fontWeight: 600, display: 'block', marginBottom: '8px' }}>Active Engineers</span>
                    <AvatarGroup users={avatarUsers} max={4} size="md" />
                  </div>
                </div>
              </Card.Body>
            </Card>

            <Card>
              <Card.Header title="Accordion &amp; Callout Banners" subtitle="Disclosure panels &amp; alert banners" />
              <Card.Body>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <Alert variant="info" title="System Maintenance Window">
                    Database index re-indexing scheduled for Saturday 02:00 UTC.
                  </Alert>

                  <Accordion items={accordionItems} defaultExpandedId={1} />
                </div>
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
