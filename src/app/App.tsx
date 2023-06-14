import React, {useEffect} from "react";
import "app/App.css";
import {Header} from "app/header/Header";
import {Pages} from "app/pages/Pages";
import {useAppDispatch, useAppSelector} from "app/hooks";
import {appActions} from "app/app.slice";

function App() {
    const isLoading = useAppSelector((state) => state.app.isLoading);

    const dispatch = useAppDispatch();

    useEffect(() => {
        setTimeout(() => {
            dispatch(appActions.setIsLoading({isLoading: false}));
        }, 3000);
    }, []);

    return (
        <div className="App">
            <Header/>
            <Pages/>
            {isLoading && <h1>Loader...</h1>}
        </div>
    );
}

export default App;