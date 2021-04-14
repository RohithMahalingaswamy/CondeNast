import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useHistory } from "react-router-dom";

import './LatestNews.scss'

export const LatestNews = () => {

    const history = useHistory();
    const [articles, setArticles] = useState([])
    const [articlesData,setArticlesData] = useState([]);
    const [Error, setError] = useState("")
    const [source ,setSource] = useState([])

    useEffect(() => {
        axios.get('/UkNews')
            .then(res => {
                console.log("sucess", res)
                setArticlesData(res.data.articles)
                    setArticles(res.data.articles)
                    let sourceArr=[];
                    res.data.articles.map((ele,i)=>{
                        if(!sourceArr.includes(ele.source.name)){
                            sourceArr.push(ele.source.name)

                        }
                    })
                    setSource(sourceArr)
                    console.log("Source",sourceArr)
                
            })
            .catch(err => {
                console.log("catch", err)
                setError("Error:500 Interval Server Error")
            })
    }, [])
    const handleChange =(e)=>{
        var filter=e.target.value;
        console.log("handleChange",filter)

        axios.post('/filterKeyword', { filter })
        .then(res=>{
            
                setArticles(res.data.articles)
        })
        .catch(err=>{
            console.log("errr",err)
            setError("Error:500 Interval Server Error")

        })
    
    }
    const buttonHandler =()=>{
setArticles(articlesData);
    }
    return (
        <div>
            {Error ? <div>{Error}</div> :
                <div className="headlines">
                    <h1>Latest News</h1>
                    <div>
                        <span>Filter News By Keywords:</span>
                    <select defaultValue={{ label: "Select Dept", value: 0 }} onChange={handleChange}>
                        <option disabled value="filter">Filter By KeyWords</option>
     {source.map((ele,i)=>{
         return     <option value={ele}>{ele}</option>
     })}
   
  </select>
  <button type="button" className="btn btn-secondary" style={{margin:'1%'}} onClick={buttonHandler}>Reset</button>

                    </div>
                    

{articles.length>0 ? articles.map((ele, i) => {
                            if (ele.description !== null) {
                                return (
                                    <div key={i} className="card bg-light mb-3" style={{ margin: "0% 3%" }}>
                                        <div className="card-header" style={{ fontSize: "15px", fontWeight: "300" }}>{ele.source.name || ele.source.id}</div>
                                        <div className="">
                                            <p key={i} className="news" onClick={() => history.push({ pathname: '/news', state: { news: ele } })}>{ele.description}</p>
                                        </div>
                                    </div>

                                )

                            }
                        })  :<div className="spinner-border text-primary" style={{margin: "5%"}}></div>
  }
                    
                </div>
            }

        </div>
    )
}