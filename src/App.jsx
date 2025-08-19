import React from 'react';

import { useRoutes, useLocation } from "react-router-dom";
import ShowCreator from "./pages/showcreator/ShowCreator";
import AddCreator from "./pages/addcreator/AddCreator";
import ViewCreator from "./pages/viewcreator/ViewCreator";
import EditCreator from "./pages/editcreator/EditCreator";

import './App.css';



function App() {
    // define routes using useRoutes hook
    const location = useLocation();
    const element = useRoutes([

        { path: "/", element: <ShowCreator /> },
        { path: "/new", element: <AddCreator /> },
        { path: "/creator/:id", element: <ViewCreator /> },
        { path: "/creator/:id/edit", element: <EditCreator /> },
    ])

    // Hide header on home and add creator pages
    const hideHeader = location.pathname === '/' || location.pathname === '/new';

    return (
        <div className="App">
        {!hideHeader && (
            <header className="App-header">
                <h1>🌟 Creatorverse</h1>
            </header>
        )}
        <main style={hideHeader ? {padding: 0, maxWidth: 'none'} : {}}>
            {element}
        </main>
    </div>
    )
}
export default App
