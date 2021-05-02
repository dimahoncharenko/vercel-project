import React from "react";
import Link from "next/link";
import Head from "next/head";

const Articles = () => {
    return (
        <>
            <Head>
                <title>Каталог статей</title>
            </Head>
            <div className="cards">
                <div className="card">
                    <img src="/it.svg" className="icon"/>
                    <Link href="/articles/IT_in_education"><a className="card__link">ІТ у професійній діяльності вчителя</a></Link>
                </div>
                <div className="card">
                    <img src="/forever.svg" className="icon"/>
                    <Link href="/articles/continuing_edu"><a className="card__link">Безперервна освіта</a></Link>
                </div>
            </div>
        </>
    );
};

export default Articles;