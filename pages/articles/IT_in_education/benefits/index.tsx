import React from "react";
import Link from "next/link";
import Head from "next/head";

import WhiteSpace from "../../../../components/WhiteSpace";
import RoadMap from "../../../../components/RoadMap";
import Container from "../../../../components/Container";

import { Headings } from "../../../../utils/it_in_edu";

function Benefits() {
    return (
        <>
            <Head>
                <title>Переваги використання ІТ в освіті</title>
            </Head>
            <Container>
                <>
                    <RoadMap array={Headings} activeIndex={3}/>
                    <h2 className="heading">Переваги використання ІТ в освіті</h2>
                    <p className="paragraph">
                        <WhiteSpace/>
                        Серед головних переваг ІТ можна виділити:
                    </p>
                    <ul className="list vertical">
                        <li>Iндивідуалізація навчання;</li>
                        <li>Iнтенсифікація самостійної роботи учнів;</li>
                        <li>Зростання обсягу виконаних на уроці завдань;</li>
                        <li>Розширення інформаційних потоків при використанні Internet.</li>
                    </ul>
                    <p className="paragraph">
                        <WhiteSpace/>
                        Підвищення мотивації та пізнавальної активності за рахунок різноманітності форм роботи, можливості включення ігрового моменту: вирішиш вірно приклади - відкриєш картинку, повставляєш правильно всі букви - продвинешь ближче до мети казкового героя. Комп'ютер дає вчителю нові можливості, дозволяючи разом з учнем отримувати задоволення від захопливого процесу пізнання, не тільки силою уяви розсовуючи стіни шкільного кабінету, але за допомогою новітніх технологій дозволяє зануритися в яскравий барвистий світ. Таке заняття викликає у дітей емоційний підйом, навіть відсталі учні охоче працюють з комп'ютером.
                        Інтегрування звичайного уроку з комп'ютером дозволяє вчителю перекласти частину своєї роботи на ПК, роблячи при цьому процес навчання більш цікавим, різноманітним, інтенсивним. Зокрема, стає більш швидким процес запису визначень, теорем та інших важливих частин матеріалу, тому що вчителю не доводиться повторювати текст кілька разів (він вивів його на екран), учневі не доводиться чекати, поки вчитель повторить саме потрібний йому фрагмент.
                        Застосування на уроці комп'ютерних тестів і діагностичних комплексів дозволить вчителю за короткий час отримувати об'єктивну картину рівня засвоєння матеріалу, що вивчається у всіх учнів і своєчасно його скоректувати. При цьому є можливість вибору рівня складності завдання для конкретного учня. Для учня важливо те, що відразу після виконання тесту (коли ця інформація ще не втратила свою актуальність) він отримує об'єктивний результат із зазначенням помилок, що неможливо, наприклад, при усному опитуванні.
                    </p>
                    <div className="more">
                        <Link href="/articles/IT_in_education/more/distance-learning"><a>Дивіться також: Дистанційне навчання</a></Link>
                        <Link href="/articles/IT_in_education/shortcomings"><a>Далі</a></Link>
                    </div>
                </>
            </Container>
        </>
    );
}

export default Benefits;