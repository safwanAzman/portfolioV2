import React from 'react';
import Card from '../Card';

//work import
import azzahra from '../../assets/work/azzahra.png';
import kasihgold from '../../assets/work/kasihgold.png';
import csccovid from '../../assets/work/csccovid.png';
import efms from '../../assets/work/efms.png';
import emandate from '../../assets/work/emandate.png';
import arrahnu from '../../assets/work/arrahnu.png';
import csctestkit from '../../assets/work/csctestkit.png';
import crems from '../../assets/work/crems.png';
import cces from '../../assets/work/cces.png';

export default function Work() {
    return (
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-2">
            <Card
                href="https://www.myazzahra.com/portal/"
                target="_blank"
                src={azzahra}
                title="Azzahra portal"
                subtitle="Laravel & Bootstrap"
                icon="eye"
            />
            <Card
                href="https://cscabs.net.my/kasihgold"
                target="_blank"
                src={kasihgold}
                title="Kasih Gold"
                subtitle="Tall Stack"
                icon="eye"
            />
            <Card
                href="https://cscabs.net.my/covid/"
                target="_blank"
                src={csccovid}
                title="Covid Report"
                subtitle="Laravel & Tailwindcss"
                icon="eye"
            />
            <Card
                href="https://www.koputraonline.com.my/fms/"
                target="_blank"
                src={efms}
                title="FMS"
                subtitle="Tall Stack"
                icon="eye"
            />
            <Card
                href="https://fmsonline.tekun.gov.my/emandateV2"
                target="_blank"
                src={emandate}
                title="Emandate"
                subtitle="Tall Stack"
                icon="eye"
            />
            <Card
                href="https://www.koputraonline.com.my/arrahnu/login"
                target="_blank"
                src={arrahnu}
                title="Arrahnu"
                subtitle="Tall Stack"
                icon="eye"
            />
            <Card
                href="https://cces.cscabs.net.my/"
                target="_blank"
                src={cces}
                title="Cces"
                subtitle="Tall Stack"
                icon="eye"
            />
            <Card
                href="#"
                target=""
                src={csctestkit}
                title="Csc Testkit"
                subtitle="Expo React Native"
                icon="eye-slash"
            />
            <Card
                href="#"
                target=""
                src={crems}
                title="CREMs"
                subtitle="Expo React Native"
                icon="eye-slash"
            />
        </div>
    )
}