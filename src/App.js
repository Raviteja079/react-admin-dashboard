import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./pages/global/Topbar";
import Dashboard from "./pages/dashboard";
import SideBar from "./pages/global/Sidebar";
import Team from "./pages/team";
import Invoices from "./pages/invoices";
import Form from "./pages/form/index";
import Contacts from "./pages/contacts";
import Calendar from "./pages/calendar/index";
import FAQ from "./pages/faq";
// import Bar from './pages/charts/Bar';
// import Pie from './pages/charts/Pie';
// import Line from './pages/charts/Line';
// import Geography from './pages/geography';

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SideBar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/faq" element={<FAQ />} />
              {/* <Route path='/bar' element={<Bar />} />
                  <Route path='/pie' element={<Pie />} />
                  <Route path='/line' element={<Line />} />
                  <Route path='/geography' element={<Geography />} />  */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
