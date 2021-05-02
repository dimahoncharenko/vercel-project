import React from "react";
import Head from "next/head";
import Container from "../../components/Container";

const AboutMe = () => {
    return (
        <>
            <Head>
                <title>Про автора</title>
            </Head>
            <div className="about_me">
                <div className="about_me__content">
                    <Container>
                        <>
                            <h1 className="about_me__heading">
                                Привіт, мене звуть Гончаренко Дмитро
                            </h1>
                            <p className="about_me__paragraph">
                                Я - студент Національного педагогічного університету імені М.П. Драгоманова, 
                                навчаюся на Інженерно-педагогічному факультеті, здобуваю ступінь "бакалавра" за спеціальністю "Комп'ютерні технології" 
                                (015 Професійна освіта "Комп'ютерні технології").
                            </p>
                            <p className="about_me__paragraph">
                                Полюбляю комп'ютери, вивчати комп'ютерні дисципліни та дисципліни, які пов'язані з комп'ютерами. Серед моїх найулюбленіших
                                галузей комп'ютерних наук, є:  
                            </p>
                            <ul className="about_me__list">
                                <li>Веб-дизайн</li>
                                <li>Інформаційно-комунікаційні мережі</li>
                                <li>Розробка та аналіз алгоритмів</li>
                                <li>Статичний аналіз програм</li>
                                <li>Web-програмування</li>
                                <li>Архітектура комп'ютера</li>
                                <li>Машинне навчання</li>
                                <li>UI та UX дизайн</li>
                            </ul>
                        </>
                    </Container>
                </div>
            </div>
        </>
    );
};

export default AboutMe;