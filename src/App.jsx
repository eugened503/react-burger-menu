import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import { Projects, Design, Web, Editing } from "./pages/Projects";
import Incoming from "./pages/Incoming";
import Activity from "./pages/Activity";
import Team from "./pages/Team";
import { ThemeProvider } from "./providers/ThemeProvider";
import Layout from "./components/Layout";
import ChangeThemeButton from "./components/ChangeThemeButton/ChangeThemeButton";

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Router>
          <ChangeThemeButton />
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/incoming" element={<Incoming />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/activity" element={<Activity />} />
            <Route path="/team" element={<Team />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/design" exact element={<Design />} />
            <Route path="/projects/web" exact element={<Web />} />
            <Route path="/projects/editing" exact element={<Editing />} />
          </Routes>
        </Router>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
