import React from 'react';
import { withRouter } from 'react-router-dom';

const NewsSpecific = ({ history }) => {

    const handlerInfo = () => {
        const historyData = history.location.state.news;
        const keys = Object.keys(historyData);

        return keys.map((key, index) => {
            if (typeof historyData[key] !== "object") {
                return (
                    <div key={index} style={{width: "100%", display: "flex", margin: "2% 3%"}}>
                        <div class="card bg-light" style={{ width: "20%" }}>
                            <div class="card-body text-center">
                                <p class="card-text">{key.toUpperCase()}</p>
                            </div>
                        </div>

                        <div class="card bg-light" style={{width: "70%",marginLeft: "3%" }}>
                            <div class="card-body text-center">
                                <p class="card-text" style={{ textAlign: "left" }}>{historyData[key]}</p>
                            </div>
                        </div>
                    </div>)
            }
        });
    }
    return (
        <div className="NewsSpecific">
            <div>
                <button id="source" className="btn btn-secondary" style={{ float: "left", margin: "1% 3%" }} onClick={() => history.goBack()}>Go Back</button>
                <button  className="btn btn-info" style={{ margin: "1% 3%", cursor: "default" }}>Source: {history.location.state.news.source.name}</button>
            </div>
            {handlerInfo()}
        </div>

    )
}

export default withRouter(NewsSpecific);