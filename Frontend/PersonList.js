import React from 'react'
import { useEffect, useState } from 'react';
export default function PersonList() {
    const [num, setNum] = useState(0);
    const getSearchParams = () => {

        const pair = unescape(window.location.search.replace("?", ""));



        const splited = pair.split("=");
        return splited[1];


    };
    useEffect(() => {
        const params = getSearchParams();
        setNum(params);
        console.log(num);

    })

    return (

        <>
            <form>
                <tbody>
                    {
                        num.map(x => <tr key={x}><input type="text">name</input></tr>)
                    }
                </tbody>
            </form>

        </>
    )
}
