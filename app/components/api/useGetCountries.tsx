// "use strict";
// import { use, useCallback, useMemo, useState } from 'react';
import React, { useCallback } from "react";
import { useQuery, gql } from "@apollo/client";
export const useGetCountries = async () => {
    // const [ isLoading, setIsLoading ] = useState(false);
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Access-Control-Allow-Credentials", "true");

    const graphql = JSON.stringify({
      query:
      `{
            countries {
                code
                name
                emoji
            }
        }`,
        variables: {}
    })

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: graphql
    };

    const url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent";

    
    const getCountries = useCallback(async () => {
        try {
            const result = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=YOUR_API_KEY", requestOptions);
            console.log(result);
            return await result.text();
            return null;
        } catch (error) {
            console.error(error);
            return error;
        }
    }, []);

    return getCountries;
};




// const GET_COUNTRIES = gql`
//   query getCountries {
//     {
//         countries {
//             code
//             name
//             emoji
//         }
//     }
// }`;


//  const TodoPrivateListQuery = () => {
//    const { loading, error, data } = useQuery(GET_COUNTRIES);
 
//    if (loading) {
//      return <div>Loading...</div>;
//    }
//    if (error) {
//      console.error(error);
//      return <div>Error!</div>;
//    }
//    return <TodoPrivateList todos={data.todos} />;
//  };

// export default TodoPrivateList;
