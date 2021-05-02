import React from "react";
import Link from "next/link";
import Header from "next/head";

import WhiteSpace from "../../../../components/WhiteSpace";
import RoadMap from "../../../../components/RoadMap";
import Container from "../../../../components/Container";

import { Headings } from "../../../../utils/it_in_edu";

function Shortcomings() {
    return (
        <>
            <Header>
                <title>Існуючі недоліки та проблеми застосування ІТ</title>
            </Header>
            <Container>
                <>
                    <RoadMap array={Headings} activeIndex={4}/>
                    <h2 className="heading">Існуючі недоліки та проблеми застосування ІТ</h2>
                    <p className="paragraph">
                        <WhiteSpace/>
                        Серед наявних проблем застосування ІТ можна виділити наступні:
                    </p>
                    <ul className="list vertical">
                        <li>Недостатність часу на підготовку до уроку, на якому використовуються комп'ютери;</li>
                        <li>Hедостатня комп'ютерна грамотність;</li>
                        <li>У робочому графіку вчителів не відведено годин для дослідження можливостей Інтернет;</li>
                        <li>Cкладно інтегрувати комп'ютер у поурочну структуру занять;</li>
                        <li>Hе вистачає комп'ютерного часу на всіх, при недостатній мотивації під час роботи учні часто відволікаються на ігри, музику, перевірку характеристик ПК і т.п.</li>
                    </ul>
                </>
            </Container>
        </>
    );
}

export default Shortcomings;