import React from 'react';
import { withRouter } from 'react-router-dom';
import './LatestNews.scss'

const NewsSpecific = ({ history }) => {

    const handlerInfo = () => {
        const historyData = history.location.state.news;
        const keys = Object.keys(historyData);

        return keys.map((key, index) => {
            if (typeof historyData[key] !== "object") {
                return (
                    <div className="historyInfo" key={index}>
                        <div class="cardTitle card bg-light">
                            <div class="card-body text-center">
                                <p class="card-text">{key.toUpperCase()}</p>
                            </div>
                        </div>

                        <div class="cardValue card bg-light">
                            <div class="card-body text-center">
                                <p class="card-text">{historyData[key]}</p>
                            </div>
                        </div>
                    </div>)
            }
        });
    }
    return (
        <div className="NewsSpecific">
            <div>
                <button className="backbtn btn btn-secondary" onClick={() => history.goBack()}>Go Back</button>
                <button className="sourcebtn btn btn-info">Source: {history.location.state.news.source.name}</button>
            </div>
            {handlerInfo()}
        </div>

    )
}

export default withRouter(NewsSpecific);