import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useHistory } from "react-router-dom";
import { Filter } from './Filter'

import './LatestNew.scss'

export const LatestNews = () => {
    
    const history = useHistory();
    const [articles, setarticles] = useState([])
    const [arti, setarti] = useState([])
    const [Error, setError] = useState("")
    const [filter, setfilter] = useState("")
    const [buttonBlur, setButtonBlur] = useState(true)
    const [articlesError, setarticlesError] = useState("")

    useEffect(() => {
        axios.get('/UkNews')
            .then(res => {
                console.log("Res", res)
                setarti(res.data.articles)
                setarticles(res.data.articles)
            })
            .catch(err => {
                console.log("errorhandler", err)
                setarticlesError("Error While Fetching");
            })
    }, [])


    console.log("resppppppp", articles)
    const handler = (ele) => {
        console.log("---------", ele)
    }

    const handleChange = (e) => {
        e.preventDefault();

        if (e.target.value === "") {
            setButtonBlur(true)
        }
        else {
            setButtonBlur(false)
            setfilter(e.target.value)
            setError("")

        }


    }

    console.log("filter", filter)

    const handlerSubmit = (e) => {
        e.preventDefault();

        if (filter.length > 2) {
            //setError("error")
            setarticles([])
            console.log("filter===", filter.length)
            axios.post('/filterKeyword', { filter })
                .then(res => {
                    setarticles(res.data.articles)
                    setButtonBlur(true)
                    setError("")
                    setfilter("");

                    console.log("ressssssssssssssssssssss", res)
                })
                .catch(err => {
                    setarticlesError("Error While Fetching");

                })
        }
        else {
            setError("Enter 3 characters atleast")
        }
    }
    const handlerReset = () => {
        setError("")
        console.log("resetttt")
        setfilter("");
        setButtonBlur(true)

        setarticles(arti)

    }

    return (

        <div className="headlines">
            <h1>Latest News</h1>
            <div className="formInput">
                <div>
                    <form onSubmit={handlerSubmit}>
                    <div class="form-group">
      <label for="email">Email:</label>
      <input type="text" value={filter} onkeypress="var key = event.keyCode || event.charCode; return ((key  >= 48 && key  <= 57) || key == 8)" onChange={handleChange}  placeholder="Enter email" />
    </div>


                        
                        {/* <input style={{width: "116%"}} type="text" placeholder="Enter at least 3 characters" value={filter} onChange={handleChange} />
                        <div className="errorplace">{Error} </div> */}
                    </form>
                </div>

                <div className="buttonReset"> <button disabled={buttonBlur} onClick={handlerReset}>Reset</button></div>

            </div>
            {/* <div className="container">
  <form>
    <div class="form-group">
      <label for="email">Email:</label>
      <input type="text" placeholder="Enter email" name="email" />
    </div>
    <div class="form-group">
      <label for="pwd">Password:</label>
      <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pwd" />
    </div>

  </form>
</div> */}

            {/* <Filter /> */}
            {articles.length > 0 ? articles.map((ele, i) => {
                if (ele.description !== null) {
                    return (
                        <div className="card bg-light mb-3" style={{ margin: "0% 3%" }}>
                            <div className="card-header" style={{ fontSize: "15px", fontWeight: "300" }}>{ele.source.name || ele.source.id}</div>
                            <div className="">
                                <p key={i} className="news" onClick={() => history.push({ pathname: '/news', state: { news: ele } })}>{ele.description}</p>
                            </div>
                        </div>

                    )
                    //<li key={i} className="news" onClick={() => history.push({ pathname: '/news', state: { news: ele } })}>{ele.description}</li>

                }
            }) : 
            <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>}

        </div>
    )
}