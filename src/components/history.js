import React, {useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { loadHistoryFromStorage } from '../actions/actions';
import { addRequest } from "../actions/actions";
import { dictElement } from "../utils"

const History = () =>  {
    const history = useSelector(state => state.requestReducer.history);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadHistoryFromStorage())
      }, history);
    
    const historyElements = (history) =>  {
        return history.map((element,index) => {
            return historyElement(element, index); 
          });
    }


    const historyElement = (historyElement, index ) => {
        return (<tr className="table__row" key={index}>
                    <td className="table__col">
                        { historyElement.request.url }
                    </td>
                    <td className="table__col">
                        { historyElement.request.method }
                    </td>
                    <td className="table__col">
                        {dictElement(historyElement.request.headers)}
                    </td>
                    <td className="table__col">
                        
                        { historyElement.request.body ? historyElement.request.body: "not send" }
                    </td>
                    <td className="table__col">
                        { historyElement.response.status }
                    </td>
                    <td className="table__col">
                        { dictElement(historyElement.response.headers) }
                    </td>
                    <td className="table__col">
                        { historyElement.response.body ? JSON.stringify(historyElement.response.body): "not send" }
                    </td>
                    <td className="table__col">
                        {String(new Date(historyElement.date))}
                    </td>
                    <td className="table__col">
                        <button className={"table__button"} type="submit" onClick={handleSubmit} index={index} >send</button>
                    </td>
                </tr>)
    }


    const handleSubmit = (e) => {
       const index = e.target.attributes.index.value;
       const historyRequest = history[index].request;
       
       const request = {
           url: historyRequest.url,
           type: historyRequest.method,
           data: historyRequest.body ? JSON.parse(historyRequest.body) : null
       }

       dispatch(addRequest(request));

    }


    return (
        <table className={"table"}>
            <tbody>
            <tr className={"table__header"}>
                <th className={"table__header-col"}>URL</th>
                <th className={"table__header-col"}>method</th>
                <th className={"table__header-col"}>request headers</th>
                <th className={"table__header-col"}>request body</th>
                <th className={"table__header-col"}>response status</th>
                <th className={"table__header-col"}>response headers</th>
                <th className={"table__header-col"}>response body</th>
                <th className={"table__header-col"}>date</th>
                <th className={"table__header-col"}>send request</th>
            </tr>
                {historyElements(history)}
           </tbody>
        </table>
    );
}

export default History;