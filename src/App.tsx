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
        <TabList className="flex justify-around absolute z-100 bottom-7 w-full border-t-1! rounded-lg pt-5 border-[#262626]!">
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
      </Tabs>
    </div>
  );
}

export default App;
