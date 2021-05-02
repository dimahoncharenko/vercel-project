import React from "react";
import Link from "next/link";
import Header from "next/head";

function IndexPage() {
    return (
        <>
            <Header>
                <title>Головна сторінка</title>
            </Header>
            <div className="cards">
                <div className="card">
                    <img src="/reading.svg" className="icon"/>
                    <Link href="/articles"><a className="card__link">Каталог статей</a></Link>
                </div>
                <div className="card">
                    <img src="/writer.svg" className="icon"/>
                    <Link href="/about_me"><a className="card__link">Про автора</a></Link>
                </div>
            </div>
        </>
    );
}

export default IndexPage;
