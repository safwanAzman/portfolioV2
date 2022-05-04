import React from 'react';
import Card from '../Card';
import dkita from '../../assets/work/dkita.png';
export default function Freelancers() {
    return (
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-2">
            <Card
                href="https://apps.apple.com/my/app/dkita-services-app/id1614068909"
                target="_blank"
                src={dkita}
                title="Dkita service"
                subtitle="Expo React Native"
                icon="eye"
            />
        </div>
    )
}