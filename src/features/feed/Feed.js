import './Feed.css'
import React from 'react'
import circle from './sample-circle.png'
import {Post} from "../post/Post";
import Axios from "axios";
import {selectPosts, selectSubName} from './feedSlice'
import {useEffect, useState} from "react";
import {markdown} from "../../utilities/drawdown";
import {useDispatch, useSelector} from "react-redux";
import {loadPostsAsync, selectSubPostsLoading} from './feedSlice';
import {selectSubRedditInfos} from "../subreddit/subRedditSlice";

export const Feed = (props)=>{
    const posts = useSelector(selectPosts);
    const dispatch = useDispatch();
    const subName = useSelector(selectSubName);
    const subredditInfos = useSelector(selectSubRedditInfos);
    const isLoading = useSelector(selectSubPostsLoading);

    useEffect(()=>{
        dispatch(loadPostsAsync(subName))
    }, [subName])
    return (
            <section id={'feed'}>

                {isLoading? (<div className={'loading'}>
                    <div className={'loadingSubImage'}></div>
                    <div className={'loadingSubText'}></div>
                    </div>) :
                    (<div id={'feedTitle'}>
                    <img alt={'reddit icon'} src={subredditInfos[subName]}/>
                    <h1>{subName}</h1>
                </div>)}

                <div id={'feedPosts'}>
                    {posts}
                </div>
            </section>
    )
}