import React from "react";
import Link from "next/link";
import Head from "next/head";

import Container from "../../../components/Container";

const Table = () => {   
    return (
        <>
            <Head>
                <title>ІТ в професійній діяльності вчителя</title>
            </Head>  
            <Container>
                <>
                    <h1 className="heading">Таблиця контенту</h1>
                    <ul className="list vertical centered">
                        <li>
                            <Link href="/articles/IT_in_education/preview"><a>ІТ у професійній діяльності вчителя</a></Link>
                        </li>
                        <li>
                            <Link href="/articles/IT_in_education/stages"><a>Етапи розвитку ІТ</a></Link>
                        </li>
                        <li>
                            <Link href="/articles/IT_in_education/competence"><a>ІТ-компетентність</a></Link>
                        </li>
                        <li>
                            <Link href="/articles/IT_in_education/benefits"><a>Переваги використання ІТ в освіті</a></Link>
                        </li>
                        <li>
                            <Link href="/articles/IT_in_education/shortcomings"><a>Існуючі недоліки та проблеми застосування ІТ</a></Link>
                        </li>
                    </ul>
                </>
            </Container>
        </>
    );
};

export default Table;