import { Coins, House, Medal, Wallet, Wrench } from "lucide-react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { Home } from "./pages/Home";
import { Balance } from "./pages/Balance";
import { Buy } from "./pages/Buy";
import { Settings } from "./pages/Settings";
import { Top } from "./pages/Top";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "TH Exam";
  }, []);

  const tg = window.Telegram.WebApp;
  const tg_haptic = tg.HapticFeedback;
  tg.expand();

  return (
    <div className="page">
      <Tabs>
        <TabPanel>
          <Home />
        </TabPanel>
        <TabPanel>
          <Balance />
        </TabPanel>
        <TabPanel>
          <Buy />
        </TabPanel>
        <TabPanel>
          <Settings />
        </TabPanel>
        <TabPanel>
          <Top />
        </TabPanel>

        <TabList className="flex justify-around z-100 w-full fixed bottom-6">
          <Tab
            onClick={() => tg_haptic.impactOccurred("soft")}
            className="nav-tab"
            selectedClassName="nav-tab-selected"
          >
            <House size={24} />
            <span>HOME</span>
          </Tab>
          <Tab
            onClick={() => tg_haptic.impactOccurred("soft")}
            className="nav-tab"
            selectedClassName="nav-tab-selected"
          >
            <Wallet size={24} />
            <span>BALANCE</span>
          </Tab>
          <Tab
            onClick={() => tg_haptic.impactOccurred("soft")}
            className="nav-tab"
            selectedClassName="nav-tab-selected"
          >
            <Coins size={24} />
            <span>BUY</span>
          </Tab>
          <Tab
            onClick={() => tg_haptic.impactOccurred("soft")}
            className="nav-tab"
            selectedClassName="nav-tab-selected"
          >
            <Wrench size={24} />
            <span>SETTINGS</span>
          </Tab>
          <Tab
            onClick={() => tg_haptic.impactOccurred("soft")}
            className="nav-tab"
            selectedClassName="nav-tab-selected"
          >
            <Medal size={24} />
            <span>TOP</span>
          </Tab>
        </TabList>
      </Tabs>
    </div>
  );
}

export default App;
