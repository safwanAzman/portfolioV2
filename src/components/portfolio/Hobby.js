import React from 'react';
import Card from '../Card';

//work import
import mycomponent from '../../assets/work/mycomponent.png';
import room from '../../assets/work/homepage.png';
import blogr from '../../assets/work/blogr.png';
import todo from '../../assets/work/todo.png';
import jomskate from '../../assets/work/jomskate.png';

export default function Hobby() {
    return (
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-2">
            <Card
                href="https://frontend-mentor-room-home-page.vercel.app/"
                target="_blank"
                src={room}
                title="Room Home Page"
                subtitle="React & Tailwindcss"
                icon="eye"
            />
            <Card
                href="https://tailwindcomponents.com/u/safwanazman"
                target="_blank"
                src={mycomponent}
                title="My Component"
                subtitle="Tailwindcss"
                icon="eye"
            />
            <Card
                href="https://blogr-landing-page-pearl.vercel.app/"
                target="_blank"
                src={blogr}
                title="Blogr Page"
                subtitle="React & Tailwindcss"
                icon="eye"
            />
            <Card
                href="https://todolist.safwan-azman.ml/"
                target="_blank"
                src={todo}
                title="Todo List"
                subtitle="React & Tailwindcss"
                icon="eye"
            />
            <Card
                href="https://apps.apple.com/my/app/jomskate/id1609835126"
                target="_blank"
                src={jomskate}
                title="Jom Skate"
                subtitle="Expo React Native"
                icon="eye"
            />
        </div>
    )
}