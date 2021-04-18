import React from "react";
import Link from "next/link";

import WhiteSpace from "../../../components/WhiteSpace";
import Bold from "../../../components/Bold";

function Advices() {
    return (
        <>
            <h2 className="heading">Методичні поради для педагогів по впровадженню ІКТ у навчально-виховний процес</h2>
            <p className="paragraph">
                <WhiteSpace/>
                Майбутнє будь-якої держави визначається системою освіти, яка в ній існує! Наш час - це епоха постійних змін у технологіях, 
                зокрема освітніх, а використання персонального комп’ютера є стрижнем інформаційних технологій навчання. Середовище електронного навчання – 
                це освітній простір, у якому відбувається формування якостей і вмінь необхідних сучасній людині ХХІ століття, таких, як медіаграмотність, 
                критичне мислення, здатність до рішення творчих завдань, уміння мислити глобально, готовність працювати в команді й громадянська свідомість. 
                Знання й уміння ХХІ століття сприяють формуванню в учнів самостійності й розвитку в них громадянських, професійних і лідерських якостей.
            </p>
            <ul className="list vertical">
                <li>З ІКТ може працювати лише той вчитель, який користується всім арсеналом традиційних методик.</li>
                <li>Не всі вчителі психологічно готові до використання ІКТ, розуміють тенденції розвитку інформаційних технологій, можливості та результати їх впровадження.</li>
                <li>При підготовці вчителя до використання ІКТ необхідно проводити поступове, практичне навчання з демонстрацією можливостей технічних засобів та програмних засобів електронного призначення.</li>
            </ul>
            <p className="paragraph">
                <WhiteSpace/>
                Уроку з використанням ІКТ властиво:
            </p>
            <ul className="list vertical">
                <li>Принцип адаптивності: пристосування комп'ютера до індивідуальних особливостей дитини;</li>
                <li>Керованість: у будь-який момент можлива корекція вчителем процесу навчання;</li>
                <li>Інтерактивність і діалоговий характер навчання;</li>
                <li>ІКТ мають здатність "відгукуватися" на дії учня і вчителя, "вступати" з ними в діалог, що і становить головну особливість методик комп'ютерного навчання.</li>
                <li>Оптимальне поєднання індивідуальної та групової роботи;</li>
                <li>Підтримання в учня стану психологічного комфорту при спілкуванні з комп'ютером;</li>
                <li>Необмежене навчання: зміст, його інтерпретації і додатки мають великий розмір.</li>
            </ul>
            <p className="paragraph">
                <WhiteSpace/>
                Комп'ютер може використовуватися на всіх етапах:
            </p>
            <ul className="list vertical">
                <li>При підготовці до уроку;</li>
                <li>В процесі навчання: – при поясненні (введення) нового матеріалу, закріпленні, – повторенні, – контролі.</li>
            </ul>
            <p className="paragraph">
                <WhiteSpace/>
                <Bold>Урок з використанням ІКТ</Bold> - це урок дотримання основних дидактичних принципів: систематичності та послідовності, доступності, диференційованого підходу, науковості та ін.
            </p>
            <p className="paragraph">
                <WhiteSpace/>
                Використання ІКТ у навчальному процесі передбачає, що вчитель будь-якої шкільної дисципліни вміє:
            </p>
            <ul className="list vertical">
                <li>Обробляти текстову, цифрову, графічну та звукову інформацію за допомогою відповідних процесорів і редакторів для підготовки дидактичних матеріалів, щоб працювати з ними на уроці;</li>
                <li>Створювати слайди з даного навчального матеріалу, використовуючи редактор презентації MS Power Point і продемонструвати презентацію на уроці;</li>
                <li>Bикористовувати наявні готові програмні продукти;</li>
                <li>Oрганізувати роботу з електронним підручником на уроці;</li>
                <li>Застосовувати навчальні програмні засоби (навчальні, закріплюють, контролюючі);</li>
                <li>Здійснювати пошук необхідної інформації в Інтернеті в процесі підготовки до уроків і позакласних заходів;</li>
                <li>Oрганізувати роботу з учнями з пошуку необхідної інформації в Інтернеті безпосередньо на уроці;</li>
                <li>Працювати на уроці з матеріалами web-сайтів;</li>
                <li>Pозробляти тести, використовуючи готові програми-оболонки або самостійно, і проводити комп'ютерне тестування.</li>
            </ul>
            <div className="more">
                <Link href="/competence"><a>Повернутись</a></Link>
            </div>
        </>
    );
}

export default Advices;