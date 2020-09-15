import "regenerator-runtime/runtime";
import { getStatusAndHeaders } from "../utils" ;

export function fetchGET(url) {
    const requestInit = {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin', 
      headers: {
        'Content-Type': 'application/json'
        
      },
      redirect: 'follow', 
      referrerPolicy: 'no-referrer'
    }

    const request = {
      url,
      ...requestInit
    } 

    const result = {
      request,
      response: {}
    }

    return fetch(request.url,requestInit)
    .then(response => 
      {
        result.response = getStatusAndHeaders(response);
        return response.json()
      })
    .then(data => {
        result.response.body = data;
        return result;
    })
}


export function fetchPOST(url, data) {
  const requestInit = {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin', 
    headers: {
      'Content-Type': 'application/json'
      
    },
    redirect: 'follow', 
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data)
  }


  const request = {
    url,
    ...requestInit
  } 
  
  const result = {
    request,
    response: {}
  }

  return fetch(request.url,requestInit)
  .then(response => 
    {
      result.response = getStatusAndHeaders(response);
      return response.json()
    })
  .then(data => {
      result.response.body = data;
      return result;
  })
}

export function fetchPUT(url, data) {
  const requestInit = {
    method: 'PUT',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin', 
    headers: {
      'Content-Type': 'application/json'
      
    },
    redirect: 'follow', 
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data)
  }


  const request = {
    url,
    ...requestInit
  } 
  
  const result = {
    request,
    response: {}
  }


  return fetch(request.url,requestInit)
  .then(response => 
    {
      result.response = getStatusAndHeaders(response);
      return response.json()
    })
  .then(data => {
      result.response.body = data;
      return result;
  })
}

export function fetchDELETE(url, data) {
  const requestInit = {
    method: 'DELETE',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin', 
    headers: {
      'Content-Type': 'application/json'
      
    },
    redirect: 'follow', 
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data)
  }


  const request = {
    url,
    ...requestInit
  } 
  
  const result = {
    request,
    response: {}
  }


    return fetch(request.url,requestInit)
    .then(response => 
      {
        result.response = getStatusAndHeaders(response);
        return response.json()
      })
    .then(data => {
        result.response.body = data;
        return result;
    })
}
