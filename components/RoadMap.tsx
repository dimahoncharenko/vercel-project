import React from "react";
import Link from "next/link";

import { Headings } from "../utils/it_in_edu";

type Props = {
    array: Headings,
    activeIndex: number
};

function RoadMap({ array, activeIndex }: Props) {
    return (
        <ul className="road-map">
            {array.map((el, index) => {
                return <li className="road-map__item" key={index}> 
                <span className={`circle ${index === activeIndex ? 'active' : ''}`}></span>
                <Link href={el.href}><a>{el.heading}</a></Link>
            </li>
            })}
        </ul>
    );
}

export default RoadMap;