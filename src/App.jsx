import  TopBar  from "./scenes/global/topBar"
import { ColorModeContext, useMode } from "./theme"
import { CssBaseline, ThemeProvider } from "@mui/material"
import { Routes, Route } from "react-router-dom";
import SideBar from "./scenes/global/sideBar";
import Dashboard from "./scenes/dashboard/dashboard";
import Team from "./scenes/team/team";
import Invoices from "./scenes/invoices/invoices";
import Contacts from "./scenes/contacts/contacts";
// import Bar from "./scenes/bar";
// import Form from "./scenes/form";
// import Line from "./scenes/line";v   
// import Pie from "./scenes/pie";
// import FAQ from "./scenes/faq";
// import Geography from "./scenes/geography";
// import Calendar  from "./scenes/calendar";

function App() {
  const [theme, colorMode] = useMode()
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SideBar />
          <main className="content">
            <TopBar />
            <Routes>
              {<Route path="/" element={<Dashboard/>} /> }
              {<Route path="/team" element={<Team />} /> }
              {<Route path="/contacts" element={<Contacts />} />}
              {<Route path="/invoices" element={<Invoices />} />}
              {/* <Route path="/bar" element={<Bar />} /> */}
              {/* <Route path="/form" element={<Form />} /> */}
              {/* <Route path="/line" element={<Line />} /> */}
              {/* <Route path="/pie" element={<Pie />} /> */}
              {/* <Route path="/faq" element={<FAQ />} /> */}
              {/* <Route path="/geography" element={<Geography />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
