import React, { useRef, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import { copyArray, copyUrl } from './Redux/arraySlice'
import { useDispatch } from 'react-redux'
import styled from './Search.module.css';

const Search = () => {
  const [disContent, setDisContent] = useState(false);
  let arr=[] ;
  let urlArr=[] ;
  const queryRef = useRef();
  const dispatch = useDispatch()

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setDisContent(true)
    
    e.preventDefault();
    async function fetchData() {
      const query = queryRef.current.value;
      const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyC3bwvckIG796ccc9uGghgK996oIqA87vQ&cx=d45502433f8c14d3f&q=${query}&num=5`)
      const resData = await response.json();

      const obtainedArray = resData.items;
      for (const query of obtainedArray) {
        const queryLink = query.link;
        const scrapedRes = await fetch(`http://localhost:3000?link=${queryLink}`);
        const resultsJson = await scrapedRes.json();

        if (!scrapedRes.ok) {
          throw new Error("failed to fetch");
        }
        urlArr=[...urlArr, resultsJson.url];
        arr = [...arr, resultsJson.res.substring(13)];
      }
      dispatch(copyArray(arr));
      dispatch(copyUrl(urlArr));
      console.log(urlArr[0]);

    }
    fetchData();
  }



  return (
    <div>
      <h1 className={styled.h1_tag}>Enter your Query here and get results from 5 Websites</h1>
      <form className={styled.form_sec} onSubmit={onSubmitHandler}>
        <input className={styled.input_field} type='text' ref={queryRef} />
        <button className={styled.submit_btn}>Search</button>
      </form>
      {disContent && <div >
        <div className={styled.btnOfLinks}>
          <NavLink className={({ isActive }) =>
            isActive ? styled.active_cls : styled.eachLink
          } to="one" data={arr[0]}>Content 1</NavLink>
          <NavLink className={({ isActive }) =>
            isActive ? styled.active_cls : styled.eachLink
          } to="two" data={arr[1]}>Content 2</NavLink>
          <NavLink className={({ isActive }) =>
            isActive ? styled.active_cls : styled.eachLink
          } to="three" data={arr[2]}>Content 3</NavLink>
          <NavLink className={({ isActive }) =>
            isActive ? styled.active_cls : styled.eachLink
          } to="four" data={arr[3]}>Content 4</NavLink>
          <NavLink className={({ isActive }) =>
            isActive ? styled.active_cls : styled.eachLink
          } to="five" data={arr[4]}>Content 5</NavLink>
        </div>
        <Outlet />
      </div>
      }
      <div className={styled.my_name}>
      <small>Chetana M Jyothi</small>
      </div>
    </div>
  )
}

export default Search
