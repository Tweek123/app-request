import React, {useState} from "react";
import { useDispatch} from "react-redux";
import { addRequest } from "../../actions/actions";

export default function FormSendRequest() {
    const dispatch = useDispatch();


    const [visibility, setVisibility] = useState(false);
    
    const handleSubmit = e => {
        e.preventDefault();
        const request = {
            url: e.target.url.value, 
            type: e.target.type.value, 
            data: e.target.data.value ? JSON.parse(e.target.data.value) : null
        }

        dispatch(addRequest(request));
    };
   

    return (
        <form name="addRequest" className={"form"} onSubmit={handleSubmit}>
            <h2>Reqeusts</h2>
            <div className={"form__item"}>
                <input className={"form__input-text"} type="text" placeholder="URL" name="url"/>
            </div>
            <label className={"form__item"}>
                GET
                <input value = "GET" id="GET" type="radio" name="type" defaultChecked onChange={() => setVisibility(false)}/>
            </label>
            <label className={"form__item"}>
                POST
                <input type="radio" value = "POST" id = "POST" name="type" onChange={() => setVisibility(true)}/>
            </label>
            <label className={"form__item"}>
                PUT
                <input type="radio" value = "PUT" id="PUT" name="type" onChange={() => setVisibility(true)}/>
            </label>
            <label className={"form__item"}>
                DELETE
                <input type="radio" value = "DELETE" id = "DELETE" name="type" onChange={() => setVisibility(true)}/>
            </label>
            <div className={"form__item"}>
                <input type="text" placeholder="data" name="data" className={visibility ?  "": "hidden"}/>
            </div>
            <div className={"form__item"}>
                <button className={"form__button"} type="submit">send</button>
            </div>            
        </form>
    );
}
