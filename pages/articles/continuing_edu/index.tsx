import React from "react";
import Link from "next/link";
import Head from "next/head";

import Container from "../../../components/Container";

const Table = () => {   
    return (
        <>
            <Head>
                <title>Безперервна освіта</title>
            </Head>
            <Container>
                <>   
                    <h1 className="heading">Таблиця контенту</h1>
                    <ul className="list vertical centered">
                        <li>
                            <Link href="/articles/continuing_edu/preview"><a>Безперервна освіта</a></Link>
                        </li>
                        <li>
                            <Link href="/articles/continuing_edu/foreign_experience"><a>Іноземний досвід</a></Link>
                        </li>
                        <li>
                            <Link href="/articles/continuing_edu/ukrainian_experience"><a>Український досвід</a></Link>
                        </li>
                        <li>
                            <Link href="/articles/continuing_edu/principles"><a>Принципи освіти протягом життя</a></Link>
                        </li>
                        <li>
                            <Link href="/articles/continuing_edu/overview"><a>Висновки</a></Link>
                        </li>
                    </ul>
                </>
            </Container>
        </>
    );
};

export default Table;