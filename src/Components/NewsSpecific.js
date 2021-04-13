import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'

const NewsSpecific = ({ history }) => {
    console.log("history", history);
    const [listNews, setlistnews] = useState([history.location.state.news])
    var entriesList = Object.entries(history.location.state.news);
    console.log("----------", entriesList);
    console.log("$$$$$$$$$$$$$$$$$", listNews);
    // const handlerList=()=>{
    //     if(entriesList.length>1){
    //         entriesList.forEach(element => {

    //      }); ([key, value] of entriesList) {
    // console.log("keys",key);      }
    // }
    //     }

    const historicalData = history.location.state.news;
    return (
        <div>
            <button onClick={() => history.goBack()}>Back</button>
            <div>
                <div>
                    {Object.keys(historicalData).map((key) => {
                        return (
                            <div key={key}>
                                <h1>{key}</h1>

                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default withRouter(NewsSpecific);