import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";

import Access from "./pages/Access";
import Character from "./pages/Character";
import Characters from "./pages/Characters";

const AppRoutes = () => {
    const loggedIn = useSelector((state) => state.preserverKeys);

    return (
        <>
            <Switch>
                <Route path="/" exact>
                    {loggedIn.validate ? (
                        <Redirect to="/characters" />
                    ) : (
                        <Access />
                    )}
                </Route>
                <Route path="/characters">
                    {loggedIn.validate ? <Characters /> : <Redirect to="/" />}
                </Route>
                <Route path="/character/:id">
                    {loggedIn.validate ? <Character /> : <Redirect to="/" />}
                </Route>
            </Switch>
        </>
    );
};

export default AppRoutes;
