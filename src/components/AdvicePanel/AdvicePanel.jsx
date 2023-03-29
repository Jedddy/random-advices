import "./AdvicePanel.css"
import { useState } from "react"
import useSWR from "swr"

export default function AdvicePanel() {
    const fetcher = url => fetch(url).then(res => res.json())

    const { data, error, isLoading, isValidating, mutate } = useSWR("https://api.adviceslip.com/advice", fetcher, {
        revalidateOnFocus: false
    })

    function clickHandler(event) {
        mutate()
    }
    return (
        <div className="advice-panel">
            <div className="advice">
                <p>Here's an advice for you.</p>
                { isLoading && <div> Loading... </div> }
                { error && <div> An error occured... </div> }
                <p> { data && data.slip.advice } </p>
            </div>
            <button onClick={clickHandler}>Generate Advice</button>
        </div>
    )
}