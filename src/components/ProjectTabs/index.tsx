import { Tabs, Tab, Box } from '@mui/material';

type TabType = {
  value: string;
  icon: JSX.Element;
  component: JSX.Element;
};

interface TeamTabsProps {
  tabs: TabType[];
  currentTab: string;
  onChangeTab: (tab: string) => void;
}

export default function ProjectTabs({
  tabs,
  currentTab,
  onChangeTab
}: TeamTabsProps) {
  return (
    <Box alignItems="flex-start" ml={{ xs: 'inherit', md: 1 }}>
      <Tabs
        value={currentTab}
        onChange={(_, value) => onChangeTab(value)}
        scrollButtons="auto"
        variant="scrollable"
        allowScrollButtonsMobile
      >
        {tabs.map(tab => (
          <Tab
            disableRipple
            key={tab.value}
            value={tab.value}
            icon={tab.icon}
            label={tab.value}
          />
        ))}
      </Tabs>

      <Box sx={{ mb: 5 }} />

      {tabs.map(tab => {
        const isMatched = tab.value === currentTab;

        return isMatched && tab.component;
      })}
    </Box>
  );
}
