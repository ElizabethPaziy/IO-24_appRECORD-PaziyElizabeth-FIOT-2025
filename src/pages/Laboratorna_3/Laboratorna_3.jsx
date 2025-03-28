import React, {useState} from 'react';
import {assets} from "../../assets/assets.js";
import './Laboratorna_3.css'

const tasks = [
    {id: 1, title: "Тема мета ЛР №3 Місце розташування сайту, звіту"},
    {id: 2, title: "Завдання №1 Зовнішній вигляд макету. Код макету"},
    {id: 3, title: "Завдання №2"},
    {id: 4, title: "Фіксована таблична верстка"},
    {id: 5, title: "Гумова таблична верстка"},
    {id: 6, title: "Фіксована блокова верстка"},
    {id: 7, title: "Гумова блокова верстка"},
    {id: 8, title: "Завдання №3 FLEXBOX"},
    {id: 9, title: "Зовнішній вигляд сторінки"},
    {id: 10, title: "HTML код"},
    {id: 11, title: "CSS-код сторінки"},
    {id: 12, title: "Висновки"},
];

const Laboratorna3 = () => {
    const [activeTask, setActiveTask] = useState(1);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const renderContent = () => {
        switch (activeTask) {
            case 1:
                return <div>
                    <div className="text-base font-light leading-relaxed mt-5">
                        <div className="mb-4">
                            <p className="font-semibold text-xl">Тема, мета ЛР №3.1, Місце розташування сайту, звіту</p>
                        </div>

                        <p>
                            Тема: ВЕРСТКА HTML-ДОКУМЕНТУ. БЛОКОВА ВЕРСТКА. ВЕРСТКА ЗАСОБАМИ CSS та FLEXBOX.
                        </p>

                        <p>
                            Мета:
                        </p>
                        <p>
                            ⎯ придбати практичні навички роботи верстки сторінок засобами CSS, верстки на основі
                            плаваючих елементів, з’ясувати переваги та недоліки типів макетів веб-сторінок
                        </p>
                        <p>
                            ⎯ придбати практичні навички роботи верстки сторінок засобами CSS та FLEXBOX
                        </p>

                        <ul>
                            <li>
                                Посилання на репозиторій власного WEB-застосунку:
                                <a href="https://github.com/ElizabethPaziy/IO-24_appWEB-PaziyElizabeth-FIOT-2025"> https://github.com/ElizabethPaziy/IO-24_appWEB-PaziyLiza-FIOT-2025</a>
                            </li>
                            <li>
                                Посилання на репозиторій на живу сторінку власного WEB-застосунку:<a></a>
                            </li>
                            <li>
                                Посилання на репозиторій звітного HTML-документа:
                                <a href="https://github.com/ElizabethPaziy/IO-24_appRECORD-PaziyElizabeth-FIOT-2025"> https://github.com/ElizabethPaziy/IO-24_appRECORD-PaziyLiza-FIOT-2025</a>
                            </li>
                            <li>
                                Посилання на репозиторій на живу сторінку звітного HTML-документу:<a></a>
                            </li>
                            <li>
                                Посилання на репозиторій з самостійними роботами:
                                <a href="https://github.com/ElizabethPaziy/IO-24_INDEPENDENT-PaziyElizabeth-FIOT-2025"> https://github.com/ElizabethPaziy/IO-24_INDEPENDENT-PaziyLiza-FIOT-2025</a>
                            </li>
                            <li>
                                Посилання на репозиторій живу сторінку з самостійними роботами:<a></a>
                            </li>
                        </ul>

                    </div>
                </div>;
            case 2:
                return <div>
                    <div className="text-base font-light leading-relaxed mt-5">
                        <div className="mb-4">
                            <p className="font-semibold text-xl">Завдання №1 Зовнішній вигляд макету. Код макету</p>
                        </div>
                        <img src={assets.site_lab3_1} alt="Фото сайту"/>
                        <img src={assets.site_lab3_2} alt="Фото сайту"/>
                        <img src={assets.site_lab3_3} alt="Фото сайту"/>
                        <img src={assets.site_lab3_4} alt="Фото сайту"/>
                        <img src={assets.site_lab3_5} alt="Фото сайту"/>
                    </div>
                </div>;
            case 3:
                return <div>
                    <p className="font-semibold text-xl">Завдання 2</p>
                    <p>Засобами HTML та CSS виконати Завдання №2 у звітному HTML-документі , в саме: </p>
                    <p>Розмітку за допомогою таблиці (номер варіанта – остання цифра у списку групи)</p>
                    <p>Фіксована таблична верстка</p>
                    <p>Гумова таблична верстка</p>
                    <p>Розмітку за допомогою блоків (плаваючих елементів) (номер варіанта – остання цифра у списку групи
                        + 1)</p>
                    <p>Фіксована блокова верстка</p>
                    <p>Гумова блокова верстка</p>
                    <p>Варіант: 18(8)</p>
                </div>;
            case 4:
                return <div>
                    <img src={assets.variant_lab3} alt="Варіант"/>
                    <table className="lab3-table">
                        <thead>
                        <tr>
                            <td colSpan="2" className="lab3-cell lab3-cell-blue">
                                <p className="table-number-1">1</p>
                            </td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td rowSpan="2" className="lab3-cell lab3-left-cell">
                                <p className="table-number-2">2</p>
                            </td>
                            <td className="lab3-cell lab3-right-cells lab3-right-cell-up">
                                <p className="table-number-5">5</p>
                            </td>
                        </tr>
                        <tr>
                            <td className="lab3-cell lab3-right-cells lab3-right-cell-down">
                                <p className="table-number-4">4</p>
                            </td>
                        </tr>
                        </tbody>
                        <tfoot>
                        <tr>
                            <td colSpan="2" className="lab3-cell lab3-cell-blue">
                                <p className="table-number-3">3</p>
                            </td>
                        </tr>
                        </tfoot>
                    </table>
                </div>;
            case 5:
                return <div>
                    <img src={assets.variant_lab3} alt="Варіант"/>
                    <div className="lab3-table-container">
                        <table className="lab3-flex-table">
                            <thead>
                            <tr>
                                <td colSpan="2" className="lab3-flex-cell lab3-flex-header">
                                    <p className="lab3-num-1">1</p>
                                </td>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td rowSpan="2" className="lab3-flex-cell lab3-flex-left">
                                    <p className="lab3-num-2">2</p>
                                </td>
                                <td className="lab3-flex-cell lab3-flex-right lab3-flex-top">
                                    <p className="lab3-num-5">5</p>
                                </td>
                            </tr>
                            <tr>
                                <td className="lab3-flex-cell lab3-flex-right lab3-flex-bottom">
                                    <p className="lab3-num-4">4</p>
                                </td>
                            </tr>
                            </tbody>
                            <tfoot>
                            <tr>
                                <td colSpan="2" className="lab3-flex-cell lab3-flex-footer">
                                    <p className="lab3-num-3">3</p>
                                </td>
                            </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>;
            case 6:
                return <div>
                    <img src={assets.variant_lab3_2} alt="Варіант"/>
                    <div className="lab3-block">
                        <div className='lab3-block-left'>
                            <p>2</p>
                        </div>
                        <div className='lab3-block-right'>
                            <div className='lab3-block-up'><p className='number-white'>1</p></div>
                            <div className='lab3-block-center'><p>4</p></div>
                            <div className='lab3-block-down'><p className='number-white'>3</p></div>
                        </div>
                    </div>
                </div>;
            case 7:
                return <div>
                    <div>
                        <img src={assets.variant_lab3_2} alt="Варіант"/>
                        <div className="flex-container">
                            <div className="side-block">
                                <p>2</p>
                            </div>
                            <div className="main-block">
                                <div className="top-section">
                                    <p className="white-text">1</p>
                                </div>
                                <div className="middle-section">
                                    <p>4</p>
                                </div>
                                <div className="bottom-section">
                                    <p className="white-text">3</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>;
            case 8:
                return <div>
                    <p className="font-semibold text-xl">Завдання 3</p>
                    <p>Кожному студенту виконати свій номер варіанта Завдання №3, за технологією FLEXBOX та засобами
                        CSS.</p>
                    <p> У звітному HTML-документі розмістити скріншот сторінки, яка була виконана технологією
                        FLEXBOX.</p>
                    <p>У звітному HTML-документі розмістити HTML- код та CSS-код сторінки, яка була виконана технологією
                        FLEXBOX.</p>
                    <p>Варіант: 18(8)</p>
                    <img src={assets.variant} alt="Варіант"/>
                </div>;
            case 9:
                return <div>
                    <div className="task2-container">
                        <div className="task2-header">
                            <a>Форми навчання</a>
                            <a>Заходи</a>
                            <a>Про академію</a>
                            <a>Контакти</a>
                            <a className="task2-city">Київ</a>
                        </div>
                        <div className="task2-row2">
                            <div className="task2-side2">
                                <p className='task2-bold-text'>курси програмування <span className="task2-bold-blue">з 100% гарантією</span> працевлаштування
                                </p>
                                <h3 className='task2-text-grey'>З SCHOOL ти отримаєш високоплачувану роботу своєї мрії.
                                    Ми готуємо висококласних IT-спеціалістів</h3>
                            </div>
                            <div className="task2-main2">
                                <div className="task2-logo2-container">
                                    <img src={assets.school} alt=''/>
                                </div>
                            </div>
                        </div>

                        <div className="task2-info2-container">
                            <p className="task2-black-header">відгуки від роботодавців</p>
                            <p className="task2-orange-header">підтверджена якість</p>
                        </div>
                        <div className='task2-info3-container'>
                            <p>Школа програмування - єдина, що має відгуки від роботодавців, які входять до списку
                                найкращих компаній
                                DOU.UA. А випускники курсів з інкубатором отримують гарантії працевлаштування впродовж 6
                                місяців після успішного закінчення навчання. Але зазвичай їх забирають до себе наші
                                офіційні партнери ще до закінчення курсу.</p>
                        </div>
                        <div className="task2-row">
                            <div className="task2-side">
                                <iframe
                                    width="320"
                                    height="170"
                                    src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                                <h3 className='task2-text-grey'>Відгук INCORA про випускників Okten</h3>
                            </div>
                            <div className="task2-main">
                                <div className="task2-logo-container">
                                    <img src={assets.epam} alt="Лого 1" className="task2-logo"/>
                                    <img src={assets.incora} alt="Лого 2" className="task2-logo"/>
                                    <img src={assets.binariks} alt="Лого 3" className="task2-logo"/>
                                    <img src={assets.rolique} alt="Лого 4" className="task2-logo"/>
                                    <img src={assets.eleks} alt="Лого 5" className="task2-logo"/>
                                    <img src={assets.global} alt="Лого 6" className="task2-logo"/>
                                    <img src={assets.intetics} alt="Лого 7" className="task2-logo"/>
                                    <img src={assets.softserve} alt="Лого 8" className="task2-logo"/>
                                </div>
                            </div>
                        </div>
                        <div className="task2-info-container">
                            <p className="task2-white-header">популярні напрямки</p>
                            <p className="task2-orange-header">курсів програмування</p>
                        </div>
                        <div className="task2-card-container">
                            <article className="task2-card task2-flex">
                                <img src={assets.javascript} className="task2-card-photo" alt="JAVASCRIPT"/>
                                <section className="task2-desc-blue-big">Complex</section>
                                <section className="task2-desc-header">JAVASCRIPT</section>
                                <section className="task2-desc-orange">Комплексний курс</section>
                                <section className="task2-desc">Стартовий рівень: початківець</section>
                                <section className="task2-desc">Тривалість: 5-11 місяців</section>
                                <section className="task2-desc">Ціна: від 14500 грн.</section>
                                <section className="task2-desc-blue-small">Залишилось 3 місця</section>
                                <section className="task2-btn">Детальніше</section>
                            </article>
                            <article className="task2-card task2-flex">
                                <img src={assets.java} className="task2-card-photo" alt="JAVA"/>
                                <section className="task2-desc-blue-big">Complex</section>
                                <section className="task2-desc-header">JAVA</section>
                                <section className="task2-desc-orange">Комплексний курс</section>
                                <section className="task2-desc">Стартовий рівень: початківець</section>
                                <section className="task2-desc">Тривалість: 5-11 місяців</section>
                                <section className="task2-desc">Ціна: від 14500 грн.</section>
                                <section className="task2-desc-blue-small">Залишилось 6 місць</section>
                                <section className="task2-btn">Детальніше</section>
                            </article>
                            <article className="task2-card task2-flex">
                                <img src={assets.python} className="task2-card-photo" alt="Python"/>
                                <section className="task2-desc-blue-big">Complex</section>
                                <section className="task2-desc-header">PYTHON</section>
                                <section className="task2-desc-orange">Комплексний курс</section>
                                <section className="task2-desc">Стартовий рівень: початківець</section>
                                <section className="task2-desc">Тривалість: 5-11 місяців</section>
                                <section className="task2-desc">Ціна: від 14500 грн.</section>
                                <section className="task2-desc-blue-small">Залишилось 4 місця</section>
                                <section className="task2-btn">Детальніше</section>
                            </article>
                        </div>
                        <div className="task2-footer">
                            <a className="task2-logo">Paziy Liza</a>
                            <div className="task2-footer-right">
                                <a><img className="task2-social" src={assets.instagram} alt='instagram'/></a>
                                <a><img className="task2-social" src={assets.facebook} alt='facebook'/></a>
                                <a><img className="task2-social" src={assets.twitter} alt='twitter'/></a>
                            </div>
                        </div>
                    </div>

                </div>;
            case 10:
                return <div>
                    <img src={assets.html} alt='HTML'/>
                    <img src={assets.html2} alt='HTML'/>
                </div>;
            case 11:
                return <div>
                    <img src={assets.css} alt='CSS'/>
                    <img src={assets.css2} alt='CSS'/>
                    <img src={assets.css3} alt='CSS'/>
                    <img src={assets.css4} alt='CSS'/>
                </div>;
            case 12:
                return <div>
                    <p>У ході виконання лабораторної роботи я ознайомилася з різними методами верстки веб-сторінок:
                        табличною, блоковою та версткою з використанням технології Flexbox.</p>

                    <p><strong>Таблична верстка</strong></p>
                    <p><strong>Переваги:</strong> проста у використанні для структурованих даних, забезпечує однаковий
                        вигляд на різних пристроях.</p>
                    <p><strong>Недоліки:</strong> складність у адаптації під мобільні пристрої, менш гнучке керування
                        розташуванням елементів.</p>

                    <p><strong>Блокова верстка</strong></p>
                    <p><strong>Переваги:</strong> більш сучасний підхід, дозволяє краще контролювати розташування
                        елементів, зручна для адаптивного дизайну.</p>
                    <p><strong>Недоліки:</strong> може бути складнішою у реалізації, потребує більшого обсягу CSS-коду.
                    </p>

                    <p><strong>Flexbox</strong></p>
                    <p><strong>Переваги:</strong> гнучке керування розташуванням елементів, зручність у створенні
                        адаптивного дизайну.</p>
                    <p><strong>Недоліки:</strong> потребує певного рівня знань, може бути важко зрозуміти для
                        початківців.</p>

                    <p>Під час виконання завдань я набралася практичного досвіду у створенні різних типів макетів,
                        навчилася застосовувати Flexbox для побудови зручних та адаптивних веб-інтерфейсів. Це допоможе
                        мені в подальшій роботі з версткою сайтів та створенні сучасних веб-додатків.</p>

                </div>;
            default:
                return <div>Виберіть розділ</div>;
        }
    };

    return (
        <div className="min-h-screen">
            <h1 className="text-4xl font-bold text-center mt-8 mb-8">Лабораторна робота 3.1</h1>
            <div className="flex flex-col lg:flex-row items-start gap-5 mt-5 px-4">
                <div
                    className={`flex flex-col gap-2 w-64 lg:w-48 ${sidebarOpen ? 'block' : 'hidden'} lg:block`}>
                    {tasks.map(task => (
                        <p
                            key={task.id}
                            className={`pl-3 py-2 border rounded transition-all cursor-pointer mt-4`}
                            onClick={() => setActiveTask(task.id)}
                        >
                            {task.title}
                        </p>
                    ))}
                </div>

                <button
                    className="lg:hidden p-2 border border-gray-300 rounded bg-white mb-4"
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                    {sidebarOpen ? 'Закрити меню' : 'Відкрити меню'}
                </button>

                <div className="w-full grid grid-cols-1 gap-4 gap-y-6">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
};

export default Laboratorna3;