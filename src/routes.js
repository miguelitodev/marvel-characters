import React from "react";
import { Route, Switch } from "react-router-dom";

import Access from "./pages/Access";
import Character from "./pages/Character";
import Characters from "./pages/Characters";

const AppRoutes = () => {
    return (
        <>
            <Switch>
                <Route path="/" exact>
                    <Access />
                </Route>
                <Route path="/character">
                    <Character />
                </Route>
                <Route path="/characters">
                    <Characters />
                </Route>
            </Switch>
        </>
    );
};

export default AppRoutes;
