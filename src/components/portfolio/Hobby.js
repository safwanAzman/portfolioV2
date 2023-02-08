import React from 'react';
import Card from '../Card';

//work import
import mycomponent from '../../assets/work/mycomponent.png';
import todo from '../../assets/work/todo.png';
import jomskate from '../../assets/work/jomskate.png';
import frontendMentor from '../../assets/work/frontendMentor.png';

export default function Hobby() {
    return (
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-2">
            <Card
                href="https://www.frontendmentor.io/profile/safwanAzman"
                target="_blank"
                src={frontendMentor}
                title="My Challenge Solutions"
                subtitle="Frontend Mentor"
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
                href="https://todo-list-frontend-gyjy2qeqh-safwanazman.vercel.app/"
                target="_blank"
                src={todo}
                title="Todo List"
                subtitle="React & Tailwindcss"
                icon="eye"
            />
            <Card
                href="https://www.jomskate.tk/"
                target="_blank"
                src={jomskate}
                title="Jom Skate"
                subtitle="Expo React Native"
                icon="eye"
            />
        </div>
    )
}