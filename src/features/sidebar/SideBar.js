import './SideBar.css'
import {React} from "react";
import {SubReddit} from "../subreddit/SubReddit";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectSubRedditInfos, AsyncLoadSubredditInfo} from "../subreddit/subRedditSlice";

const availableSubs = ['Kuwait', 'Alamenium', 'qatar', 'thereWasAnAttempt', 'gaming', 'blessedimages', 'memes', 'dankmemes']
export const SideBar = (props)=>{
    return (
        <div id={'sideBar'}>
            <h2>
                Alumini Zones
            </h2>
            {availableSubs.map(sub=> (<SubReddit key={"subbutton"+sub} className={"reddiCon"} subName={sub}/>))}

            <div id={'scrollBar'}></div>
        </div>
    )
}