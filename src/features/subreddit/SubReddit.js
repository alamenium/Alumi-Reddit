import circle from "../feed/sample-circle.png";
import React, {useEffect} from "react";
import './SubReddit.css'
import {useDispatch, useSelector} from "react-redux";
import {AsyncLoadSubredditInfo, selectSubInfosLoading, selectSubRedditInfos} from "./subRedditSlice";
import {setSubReddt, selectSubPostsLoading, selectSubName, loadPostsAsync} from "../feed/feedSlice";

export const SubReddit = ({subName})=>{

    const dispatch = useDispatch();
    const subredditInfos = useSelector(selectSubRedditInfos);

    const currentSub = useSelector(selectSubName)

    useEffect(()=>{
       dispatch(AsyncLoadSubredditInfo(subName))
        console.log(subredditInfos)
    }, [])

    const isLoading = useSelector(selectSubInfosLoading);
    const GoToSub = ()=>{
        dispatch(setSubReddt(subName))  ;
    }
    if(isLoading){
        return (<div className={'loading'}>
            <div className={'loadingSubImage'}></div>
            <div className={'loadingSubText'}></div>
        </div>)
    }
    const isSelected = subName ===  currentSub;
    return(
        <div>
        {/*<NavLink to={"yes"}/>*/}
        <div id={subName} className={'tile'} onClick={GoToSub} style={isSelected?{backgroundColor: "dodgerblue"} : {}}>
            <img src={subredditInfos[subName]}/>
            <h1>{`r/${subName}`}</h1>
        </div>
        </div>
    )
}