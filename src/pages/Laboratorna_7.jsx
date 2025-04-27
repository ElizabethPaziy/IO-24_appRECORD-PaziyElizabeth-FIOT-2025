import React, {useState} from 'react';
import {assets} from "../assets/assets.js";

const tasks = [
    {id: 1, title: "Тема, мета ЛР №5.2, Місце розташування сайту, звіту"},
    {id: 2, title: "Виконання"},
    {id: 3, title: "Висновки"},
];

const Laboratorna_7 = () => {
    const [activeTask, setActiveTask] = useState(1);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const renderContent = () => {
        switch (activeTask) {
            case 1:
                return <div>
                    <div className="text-base font-light leading-relaxed mt-5">
                        <div className="mb-4">
                            <p className="font-semibold text-xl">Тема, мета ЛР №5.2, Місце розташування сайту, звіту</p>
                        </div>

                        <p>
                            Тема: WEB-СХОВИЩЕ. WEB STORAGE API. МОДУЛЬНОСТЬ КОДУ. СТВОРЕННЯ МОДАЛЬНОГО ВІКНА.
                            ДЕЛЕГУВАННЯ ПОДІЙ.
                        </p>

                        <p>
                            Мета:придбати практичні навички роботи створення модального вікна; повторити процес
                            створення макету, зокрема створення макету галереї довільних зображень; закріпити навички
                            роботи з делегуванням подій
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
                        <img src={assets.lab52_task1} alt='screen'/>
                        <img src={assets.lab52_task2} alt='screen'/>
                        <img src={assets.lab52_task3} alt='screen'/>
                        <img src={assets.lab52_task4} alt='screen'/>
                    </div>

                </div>;
            case 3:
                return <div>
                    <div className="mb-4 mt-4">
                        <p className="font-semibold text-xl">Висновки</p>
                    </div>
                    <p>У процесі виконання лабораторної роботи я отримала ґрунтовні знання з таких важливих аспектів
                        веб-розробки, як робота з Web Storage API, створення модальних вікон, делегування подій, а також
                        динамічне створення контенту на веб-сторінках. Зокрема, завдання, пов’язані з реалізацією
                        галереї зображень, допомогли мені краще зрозуміти, як за допомогою JavaScript можна динамічно
                        генерувати елементи на сторінці та управляти їх поведінкою при взаємодії з користувачем.
                        Використання бібліотеки для створення модальних вікон, як basicLightbox, дало можливість
                        розширити свої знання в інтеграції сторонніх бібліотек, що спрощують та пришвидшують процес
                        розробки.</p>

                    <p>У рамках виконання завдання з формою зворотного зв’язку я освоїла техніки зберігання даних у
                        локальному сховищі за допомогою Web Storage API, що дозволяє зберігати дані, навіть якщо
                        сторінка перезавантажується. Це завдання вимагало розуміння як відслідковувати введення
                        користувача в реальному часі, застосовуючи події input та submit, а також організації перевірки
                        коректності введених даних перед відправкою форми. Мені вдалося реалізувати функціонал, який
                        дозволяє не тільки зберігати введені користувачем дані, але й автоматично заповнювати поля форми
                        при наступному завантаженні сторінки, що значно покращує користувацький досвід.</p>

                    <p>Окремо хочу зазначити важливість використання методу делегування подій. Цей підхід дозволяє
                        значно спростити управління подіями на сторінці, оскільки всі події можуть бути оброблені на
                        батьківських елементах, що значно знижує кількість обробників подій і покращує продуктивність.
                        Цей досвід надає мені можливість ефективно розробляти інтерфейси з великою кількістю елементів,
                        таких як галереї чи форми, де кожен елемент потребує обробки подій.</p>

                    <p>Загалом, лабораторна робота дозволила мені значно поглибити розуміння роботи з динамічними
                        веб-елементами, ефективно взаємодіяти з API та інтегрувати сторонні бібліотеки. Цей досвід буде
                        корисний для подальшої роботи в розробці інтерактивних веб-додатків, де потрібно враховувати
                        збереження стану користувача, створення модальних вікон та обробку подій.</p>

                </div>;

        }
    };

    return (
        <div className="min-h-screen">
            <h1 className="text-4xl font-bold text-center mt-8 mb-8">Лабораторна робота 5.2</h1>
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

export default Laboratorna_7;