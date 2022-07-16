import { Box } from "./components/Box/Box.component";
import "./App.css";
import { Tabs } from "./components/Tabs";
import { TabsForm } from "./Form.component";
import { TabProvider } from "./context/TabContext";

function App() {
  return (
    <TabProvider>
      <div className="App">
        <TabsForm />

        <Box title="Conteúdo" className="BoxContent">
          <Tabs />
        </Box>
      </div>
    </TabProvider>
  );
}

export default App;
