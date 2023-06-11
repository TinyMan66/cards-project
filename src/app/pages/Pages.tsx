import React from 'react';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import {PATH} from "common/routes/pathRoutesList";
import {Register} from "features/auth/register/Register";
import {CheckEmail} from "features/auth/password/CheckEmail";
import {Login} from "features/auth/login/Login";
import {ForgotPassword} from 'features/auth/password/ForgotPassword';
import {SetNewPassword} from "features/auth/password/SetNewPassword";
import {Learn} from "features/learn/Learn";
import {Packs} from "features/packs/Packs";
import {Cards} from "features/cards/Cards";
import {Profile} from "features/profile/Profile";

//TODO : add Outlet

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path={PATH.REGISTER} element={<Register/>}/>
            <Route path={PATH.LOGIN} element={<Login/>}/>
            <Route path={PATH.CHECK_EMAIL} element={<CheckEmail/>}/>
            <Route path={PATH.FORGOT_PASS} element={<ForgotPassword/>}/>
            <Route path={PATH.SET_NEW_PASS} element={<SetNewPassword/>}/>
            <Route path={PATH.PROFILE} element={<Profile/>}/>
            <Route path={PATH.PACKS} element={<Packs/>}/>
            <Route path={PATH.PACK} element={<Cards/>}/>
            {/*<Route path={PATH.CARD} element={<Card />} />*/}
            <Route path={PATH.LEARN} element={<Learn/>}/>
        </Route>
    ))

export const Pages = () => {
    return (
        <RouterProvider router={router}/>
    );
};