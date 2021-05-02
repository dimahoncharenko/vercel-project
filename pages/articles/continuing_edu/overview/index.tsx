import React from "react";
import Head from "next/head";
import Link from "next/link";

import WhiteSpace from "../../../../components/WhiteSpace";
import Bold from "../../../../components/Bold";
import RoadMap from "../../../../components/RoadMap";
import Container from "../../../../components/Container";

import { Headings } from "../../../../utils/continuing_edu";

const Overview = () => {
    return (
        <>
            <Head>
                <title>Висновки</title>
            </Head>
            <Container>
                <>
                    <RoadMap array={Headings} activeIndex={4}/>  
                    <h2 className="heading">Висновки</h2>
                    <p className="paragraph">
                        <WhiteSpace/>
                        Зростаюче різноманіття пізнавально-інформаційних запитів різних верств населення неможливо задовольнити в рамках існуючих форм 
                        традиційної освіти. Загострюється проблема невідповідності сформованої системи освіти новим потребам суспільства й людини. Це 
                        породжує вимогу іншого підходу до організації масової освітньої діяльності дорослих – навчання повинне відповідати різнорівневим 
                        інтересам і можливостям громадян, органічно вписуватися в їхній спосіб життя, враховувати специфіку запитів того чи іншого контингенту 
                        й навіть окремих груп населення. Освіта протягом життя покликана підвищувати рівень загальних знань і розширювати можливості участі 
                        громадян у культурній, соціальній і політичній діяльності країни. Вона повинна внести вклад у подальшу демократизацію суспільства, 
                        а також сприяти посиленню позиції людини в професійній діяльності.
                    </p>
                    <p className="paragraph">
                        <WhiteSpace/>
                        У цих умовах потрібен новий погляд на роль і значення неперервної освіти, яка відповідає сучасним освітнім потребам. Назріла необхідність 
                        у розробці теоретично обґрунтованих, практично значимих і переконливих концептуальних підходів до організації системи неперервної освіти в 
                        Україні. Однією з найбільш істотних проблем становлення системи неперервної освіти є подолання стереотипу ставлення до неформальної освіти 
                        як неповноцінної.
                    </p>
                </>
            </Container>
        </>
    );
};

export default Overview;