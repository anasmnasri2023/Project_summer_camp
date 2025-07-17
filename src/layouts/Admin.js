import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// Components
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js"; // Ajout manquant

// Views
import Dashboard from "views/admin/Dashboard.js";
import Maps from "views/admin/Maps.js";
import Settings from "views/admin/Settings.js";
import Tables from "views/admin/Tables.js";

export default function Admin() {
  return (
    <>
      {/* Sidebar */}
      <Sidebar />
      
      {/* Contenu principal */}
      <div className="relative md:ml-64 bg-blueGray-100 min-h-screen">
        
        {/* Barre de navigation et statistiques */}
        <AdminNavbar />
        <HeaderStats />

        {/* Section des vues */}
        <div className="px-4 md:px-10 mx-auto w-full mt-12">
          <Switch>
            <Route path="/admin/dashboard" exact component={Dashboard} />
            <Route path="/admin/maps" exact component={Maps} />
            <Route path="/admin/settings" exact component={Settings} />
            <Route path="/admin/tables" exact component={Tables} />
            
            {/* Redirection par défaut */}
            <Redirect from="/admin" to="/admin/dashboard" />
          </Switch>

          {/* Pied de page */}
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
