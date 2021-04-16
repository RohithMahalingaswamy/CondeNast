import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useHistory } from "react-router-dom";
import './LatestNews.scss'

export const LatestNews = () => {

    const history = useHistory();
    const [articles, setArticles] = useState([])
    const [articlesData, setArticlesData] = useState([]);
    const [Error, setError] = useState("")
    const [source, setSource] = useState([])

    useEffect(() => {
        axios.get('/UkNews')
            .then(res => {
                setArticlesData(res.data.articles)
                setArticles(res.data.articles)
                let sourceArr = [];
                res.data.articles.forEach((ele, i) => {
                    if (!sourceArr.includes(ele.source.name)) {
                        sourceArr.push(ele.source.name)

                    }
                })
                setSource(sourceArr)

            })
            .catch(err => {
                setError("Error:500 Interval Server Error")
            })
    }, [])

    //filter handler to filter news using the keyword 
    const handleChange = (e) => {
        var filter = e.target.value;
        axios.post('/filterKeyword', { filter })

            .then(res => {
                setArticles(res.data.articles)
            })
            //error in response
            .catch(err => {
                setError("Error:500 Interval Server Error")
            })
    }
    //reset buutonhandler
    const buttonHandler = () => {
        setArticles(articlesData);
    }

    return (
        <div className="latestNews">
            {Error ? <div>{Error}</div> :
                <div className="headlines">
                    <h2 className="headtitle">Top Headlines</h2>

                    <div>
                        <span className="keywords">Filter News By Keywords:</span>
                        <select className="select" onChange={handleChange}>
                            <option disabled value="filter">Filter By KeyWords</option>
                            {source.map((ele, i) => {
                                return <option key={i} value={ele}>{ele}</option>
                            })}

                        </select>
                        <button type="button" className="btn btn-outline-secondary" style={{ margin: '1%' }} onClick={buttonHandler}>Reset</button>
                    </div>


                    {articles.length > 0 ? articles.map((ele, i) => {

                        return (

                            <div>
                                {ele.description &&
                                    <div key={i} className="cardtitle card bg-light mb-3">
                                        <div className="cardheader card-header">{ele.source.name || ele.source.id}</div>

                                        <p key={i} className="news" onClick={() => history.push({ pathname: '/news', state: { news: ele } })}>{ele.description}</p>
                                    </div>
                                }
                            </div>

                        )


                    }) : <div className="spinner-border text-primary" style={{ margin: "5%" }}></div>
                    }

                </div>
            }

        </div>
    )
}