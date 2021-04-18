import React from "react";
import Link from "next/link";
import Header from "next/head";

function IndexPage() {
    return (
        <>
            <Header>
                <title>Головна сторінка</title>
            </Header>
            <h1 className="heading">Таблиця контенту</h1>
            <ul className="list vertical centered">
                <li>
                    <Link href="/preview"><a>ІТ у професійній діяльності вчителя</a></Link>
                </li>
                <li>
                    <Link href="/stages"><a>Етапи розвитку ІТ</a></Link>
                </li>
                <li>
                    <Link href="/competence"><a>ІТ-компетентність</a></Link>
                </li>
                <li>
                    <Link href="/benefits"><a>Переваги використання ІТ в освіті</a></Link>
                </li>
                <li>
                    <Link href="/shortcomings"><a>Існуючі недоліки та проблеми застосування ІТ</a></Link>
                </li>
            </ul>
        </>
    );
}

export default IndexPage;
