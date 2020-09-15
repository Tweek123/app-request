import React from "react";

export const dictElement = (dict) => {
    const dictArray = []; 
    for (const key in dict) {
        dictArray.push(   
                <div className="dict-element" key={key}>
                    {key} : {String(dict[key])}
                </div>
        )
    }

    return dictArray;
}

export const getStatusAndHeaders = (response) => {
    const result = {
        headers: {},
        status: response.status
    }

    for (const [key, value] of response.headers.entries()) {
        result.headers[key] = value;
      }

      return result;
}