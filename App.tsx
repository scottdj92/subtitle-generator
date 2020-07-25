import React, { useState } from "react";
import dayjs from "dayjs";
import { useForm } from "react-hook-form";

export const App = () => {
    const [currentTime, setCurrentTime] = useState(0);
    const { handleSubmit, register } = useForm();
    return (
        <>
            <h1>Testing subtitle creation</h1>
            <video controls src="https://interactive-examples.mdn.mozilla.net/media/examples/flower.mp4" onSeeking={(e) => {
                console.log(e.currentTarget.currentTime)
                setCurrentTime(Math.ceil(e.currentTarget.currentTime * 1000))
            }}>

            </video>
            {console.log(currentTime)}
            <form onSubmit={handleSubmit((data) => {
                console.log(data);
            })}>
                <div>
                    <input ref={register} type="text" name="timestamp" value={currentTime} />
                </div>
                <div>
                    <input ref={register} type="textarea" name="subtitle" />
                </div>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}
