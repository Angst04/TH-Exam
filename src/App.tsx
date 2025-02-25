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
        <TabList
          className="flex justify-around z-100 w-full max-w-2xl mx-auto fixed bottom-0 left-0 right-0 pb-6 pt-2 rounded-lg"
          style={{
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            background:
              "linear-gradient(120deg, rgba(38, 38, 38, 1), rgba(38, 38, 38, 0.95))",
          }}
        >
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
