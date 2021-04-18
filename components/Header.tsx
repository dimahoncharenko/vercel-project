import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function Header() {
    const router = useRouter();
    return (
        <header className="header">
            <div className="header__content container">
                <div>
                    <span className="logo"></span>
                    {(router.pathname !== "/" ? (
                        <Link href="/"><a className="toHome">На головну</a></Link>
                    ) : null)}
                </div>
                <div className="student">
                    <p>Виконав студент групи 33ПОкт</p>
                    <p>Гончаренко Дмитро</p>
                </div>
            </div>
        </header>
    );
}

export default Header;