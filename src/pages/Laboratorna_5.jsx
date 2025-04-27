import React, {useState} from 'react';
import {assets} from "../assets/assets.js";

const tasks = [
    {id: 1, title: "Тема, мета ЛР №4, Місце розташування сайту, звіту"},
    {id: 2, title: "Виконання"},
    {id: 3, title: "Висновки"},
];

const Laboratorna_5 = () => {
    const [activeTask, setActiveTask] = useState(1);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const renderContent = () => {
        switch (activeTask) {
            case 1:
                return <div>
                    <div className="text-base font-light leading-relaxed mt-5">
                        <div className="mb-4">
                            <p className="font-semibold text-xl">Тема, мета ЛР №4, Місце розташування сайту, звіту</p>
                        </div>

                        <p>
                            Тема: ОБ'ЄКТ. МЕТОДИ ОБ'ЄКТА. МАСИВ ОБ'ЄКТІВ. ДЕСТРУКТУРИЗАЦІЯ ОБ'ЄКТІВ. CALLBACK.
                            СТРІЛОЧНІ ФУНКЦІЇ. СТРІЛОЧНІ ФУНКЦІЇ ЯК КОЛБЕКИ. ПЕРЕБИРАЮЧІ МЕТОДИ МАСИВУ
                        </p>

                        <p>
                            Мета: придбати практичні навички роботи з об'єктами. Методи об'єкта.. Callback. Стрілочні
                            функції. Стрілочні функції як колбеки.Реалізація програм засовами мови JAVASCRIPT
                        </p>

                        <ul>
                            <li>
                                Посилання на репозиторій власного WEB-застосунку:
                                <a href="https://github.com/ElizabethPaziy/IO-24_appWEB-PaziyElizabeth-FIOT-2025"> https://github.com/ElizabethPaziy/IO-24_appWEB-PaziyLiza-FIOT-2025</a>
                            </li>
                            <li>
                                Посилання на репозиторій на живу сторінку власного WEB-застосунку:<a
                                href="https://elizabethpaziy.github.io/IO-24_appWEB-PaziyElizabeth-FIOT-2025/">https://elizabethpaziy.github.io/IO-24_appWEB-PaziyElizabeth-FIOT-2025/</a>
                            </li>
                            <li>
                                Посилання на репозиторій звітного HTML-документа:
                                <a href="https://github.com/ElizabethPaziy/IO-24_appRECORD-PaziyElizabeth-FIOT-2025"> https://github.com/ElizabethPaziy/IO-24_appRECORD-PaziyLiza-FIOT-2025</a>
                            </li>
                            <li>
                                Посилання на репозиторій на живу сторінку звітного HTML-документу:<a
                                href="https://elizabethpaziy.github.io/IO-24_appRECORD-PaziyElizabeth-FIOT-2025/">https://elizabethpaziy.github.io/IO-24_appRECORD-PaziyElizabeth-FIOT-2025/</a>
                            </li>
                            <li>
                                Посилання на репозиторій з самостійними роботами:
                                <a href="https://github.com/ElizabethPaziy/IO-24_INDEPENDENT-PaziyElizabeth-FIOT-2025"> https://github.com/ElizabethPaziy/IO-24_INDEPENDENT-PaziyLiza-FIOT-2025</a>
                            </li>
                            <li>
                                Посилання на репозиторій живу сторінку з самостійними роботами:<a
                                href="https://elizabethpaziy.github.io/IO-24_INDEPENDENT-PaziyElizabeth-FIOT-2025/">https://elizabethpaziy.github.io/IO-24_INDEPENDENT-PaziyElizabeth-FIOT-2025/</a>
                            </li>
                        </ul>

                    </div>
                </div>;
            case 2:
                return <div>
                    <div className="mb-4 mt-4">
                        <p>Парний варіант 18</p>
                        <img src={assets.lab4_task1} alt='screen'/>
                        <img src={assets.lab4_task2} alt='screen'/>
                        <img src={assets.lab4_task3} alt='screen'/>
                        <img src={assets.lab4_task4} alt='screen'/>
                        <img src={assets.lab4_task5} alt='screen'/>
                        <img src={assets.lab4_task6} alt='screen'/>
                        <img src={assets.lab4_task7} alt='screen'/>
                    </div>

                </div>;
            case 3:
                return <div>
                    <div className="mb-4 mt-4">
                        <p className="font-semibold text-xl">Висновки</p>
                    </div>
                    <p>У процесі виконання лабораторної роботи №4 я здобула цінний практичний досвід роботи з об’єктами
                        в JavaScript, їхніми методами, масивами об’єктів, деструктуризацією, стрілочними функціями,
                        callback-функціями та перебираючими методами масивів. Ця робота дала змогу мені краще зрозуміти,
                        як сучасна мова JavaScript дозволяє ефективно працювати з даними, використовуючи різні підходи
                        та техніки.

                        Я навчилась створювати функції, які приймають об’єкти як аргументи, обробляють або змінюють їх,
                        використовуючи callback-функції. Це допомогло мені краще засвоїти принципи побудови гнучкої та
                        масштабованої структури коду. Робота з масивами об’єктів виявилась особливо важливою, оскільки
                        вона часто застосовується при розробці вебзастосунків. За допомогою методів map, filter, reduce,
                        some, every, forEach, sort тощо я навчилась ефективно аналізувати, змінювати та сортувати дані.

                        Також я попрактикувалась у написанні стрілочних функцій, які суттєво спрощують синтаксис та
                        покращують читабельність коду. Особливо корисною була робота з класами, інкапсуляцією та
                        геттерами/сеттерами — це дало змогу мені глибше зануритись у об’єктно-орієнтоване програмування
                        в JavaScript. Завдання з використанням класів дозволили реалізувати логіку роботи програм в
                        організованій та структурованій формі.

                        Загалом ця лабораторна робота допомогла мені систематизувати та закріпити теоретичні знання з
                        теми, а також застосувати їх на практиці. Я впевнено можу сказати, що після її виконання мій
                        рівень володіння JavaScript значно зріс, і я стала краще орієнтуватись у написанні коду, який є
                        не лише функціональним, а й зручним для подальшого розвитку та підтримки.

                    </p>
                </div>;

        }
    };

    return (
        <div className="min-h-screen">
            <h1 className="text-4xl font-bold text-center mt-8 mb-8">Лабораторна робота 4</h1>
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

export default Laboratorna_5;