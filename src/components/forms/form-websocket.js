import React from "react";
import { useDispatch} from "react-redux";
import { connectWebsocket } from "../../actions/actions";

export default function FormWebsocket() {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(connectWebsocket(e.target.url.value));
    }

    
    return (
        <form name="websocket" className={"form"} onSubmit={handleSubmit}>
            <h2>Websocket</h2>
            <div className={"form__item"}>
                <input type="text" className={"form__input-text"} placeholder="URL" name="url"/>
            </div>
            <div className={"form__item"}>
                <button className={"form__button"} type="submit">connect</button>
            </div>     
        </form>
    );
}
