import React, {useState} from 'react';
import {assets} from "../assets/assets.js";

const tasks = [
    {id: 1, title: "Тема, мета ЛР №5.1, Місце розташування сайту, звіту"},
    {id: 2, title: "Виконання"},
    {id: 3, title: "Висновки"},
];

const Laboratorna_6 = () => {
    const [activeTask, setActiveTask] = useState(1);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const renderContent = () => {
        switch (activeTask) {
            case 1:
                return <div>
                    <div className="text-base font-light leading-relaxed mt-5">
                        <div className="mb-4">
                            <p className="font-semibold text-xl">Тема, мета ЛР №5.1, Місце розташування сайту, звіту</p>
                        </div>

                        <p>
                            Тема: КЛАСИ. ОБ'ЄКТНА МОДЕЛЬ ДОКУМЕНТА (DOM). ПОДІЇ. ОБ'ЄКТ ПОДІЇ. ДЕЛЕГУВАННЯ ПОДІЙ.
                            THROTTLE.
                        </p>

                        <p>
                            Мета: придбати практичні навички роботи з об'єктами. Методи об'єкта.. Callback. Стрілочні
                            функції. Стрілочні функції як колбеки. Реалізація програм засовами мови JAVASCRIPT

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
                        <img src={assets.lab5_task1} alt='screen'/>
                        <img src={assets.lab5_task2} alt='screen'/>
                        <img src={assets.lab5_task3} alt='screen'/>
                        <img src={assets.lab5_task4} alt='screen'/>
                        <img src={assets.lab5_task5} alt='screen'/>
                        <img src={assets.lab5_task6} alt='screen'/>
                        <img src={assets.lab5_task7} alt='screen'/>
                        <img src={assets.lab5_task8} alt='screen'/>
                        <img src={assets.lab5_task9} alt='screen'/>
                        <img src={assets.lab5_task10} alt='screen'/>
                    </div>

                </div>;
            case 3:
                return <div>
                    <div className="mb-4 mt-4">
                        <p className="font-semibold text-xl">Висновки</p>
                    </div>
                    <p>У процесі виконання лабораторної роботи №5.1 було поглиблено знання та практичні навички з
                        JavaScript, зокрема в частині роботи з об'єктами, обробкою подій, застосуванням делегування
                        подій, використанням стрілочних функцій і функцій зворотного виклику (callback). Особливу увагу
                        приділено вивченню концепції "throttle", яка дозволяє оптимізувати обробку подій, що часто
                        спрацьовують, зменшуючи навантаження на браузер і підвищуючи продуктивність веб-додатку. Під час
                        лабораторної роботи було створено інтерактивні HTML-елементи, які динамічно реагують на дії
                        користувача (натискання кнопок, переміщення миші, введення даних тощо), з використанням
                        можливостей DOM та Event API. Застосування сучасних підходів до написання коду, зокрема
                        стрілочних функцій і делегування подій, дозволило досягти більшої гнучкості, масштабованості та
                        чистоти коду. Отримані результати демонструють розуміння принципів побудови інтерактивних
                        веб-додатків і вміння застосовувати теоретичні знання на практиці. Ця лабораторна робота також
                        стала хорошою підготовкою до подальшого вивчення асинхронного програмування, обробки
                        HTTP-запитів і побудови повноцінних веб-інтерфейсів.</p>
                </div>;

        }
    };

    return (
        <div className="min-h-screen">
            <h1 className="text-4xl font-bold text-center mt-8 mb-8">Лабораторна робота 5.1</h1>
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

export default Laboratorna_6;