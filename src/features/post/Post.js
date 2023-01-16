
import {markdown} from "../../utilities/drawdown";
import React from "react";
import './Post.css'
import {useSelector} from "react-redux";
import{selectSubPostsLoading} from "../feed/feedSlice";

export const Post = ({author, title, selftext, video, videoPoster, image, link, urlImage})=>{
    const removeElement = (e)=>{
        e.target.remove();
    }
    const html = {__html: markdown(selftext)}
    const isLoading = useSelector(selectSubPostsLoading)
    if(isLoading){
        return (
            <section className={'post'}>
                <div className={'placeHolderTitle'}></div>
                <div className={'placeHolderImage'}></div>
                <div className={'placeHolderUser'}></div>
        </section>)
    }

    return(
        <section className={'post'}>
            {title && <h2>{title}</h2>}
            {image && <img src={image} onError={removeElement}/>}
            {video && <video poster={videoPoster} controls><source src={video} type={'video/mp4'}/>Your broswer doesnt suppert video</video>}
            {selftext && <span dangerouslySetInnerHTML={html} className={'selftext'}></span>}
            {link && (
                <div className={'linkEmbed'}>
                <img alt={'image link'} src={urlImage}/>
                <a href={link}>{`"${link}"`}</a>
                </div>)}
            {author && <h3>By u/{author}</h3>}
        </section>

    )
}
