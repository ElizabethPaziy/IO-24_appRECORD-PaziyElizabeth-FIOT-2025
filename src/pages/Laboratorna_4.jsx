import React, {useState} from 'react';
import {assets} from "../assets/assets.js";

const tasks = [
    {id: 1, title: "Тема, мета ЛР №3.2, Місце розташування сайту, звіту"},
    {id: 2, title: "Декстопна версія"},
    {id: 3, title: "Планшетна версія"},
    {id: 4, title: "Телефонна версія"},
    {id: 5, title: "Висновки"},
];

const Laboratorna_4 = () => {
    const [activeTask, setActiveTask] = useState(1);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const renderContent = () => {
        switch (activeTask) {
            case 1:
                return <div>
                    <div className="text-base font-light leading-relaxed mt-5">
                        <div className="mb-4">
                            <p className="font-semibold text-xl">Тема, мета ЛР №3.2, Місце розташування сайту, звіту</p>
                        </div>

                        <p>
                            Тема: АДАПТИВНА ВЕРСТКА. МЕДІА-ЗАПИТИ. МЕТАТЕГ VIEWPORT. СТРАТЕГІЯ MOBILE FIRST.
                        </p>

                        <p>
                            Мета: Адаптивна верстка. Медіа-запити. Медіа-типи. Медіа-функції.Метатег viewport.
                            Інструменти розробника. Стратегія Mobile First.
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
                                Посилання на репозиторій живу сторінку з самостійними роботами:<a href="https://elizabethpaziy.github.io/IO-24_INDEPENDENT-PaziyElizabeth-FIOT-2025/">https://elizabethpaziy.github.io/IO-24_INDEPENDENT-PaziyElizabeth-FIOT-2025/</a>
                            </li>
                        </ul>

                    </div>
                </div>;
            case 2:
                return <div>
                    <div className="mb-4 mt-4">
                        <p className="font-semibold text-xl">Декстопна версія</p>

                        <p>На екранах із великою роздільною здатністю інтерфейс виглядає просторим та зручним для
                            взаємодії. Елементи розташовані з рівномірними проміжками, що створює чітку візуальну
                            ієрархію.

                            Меню представлено у вигляді горизонтального списку, а його елементи мають достатній відступ
                            між собою. Кнопка входу має значний розмір і закруглені краї, що робить її помітною.
                            Індикатор кількості товарів у кошику розташований у верхньому кутку, забезпечуючи швидкий
                            доступ до нього.

                            Основний контент розбитий на дві частини: зображення товару розміщене ліворуч, а опис та
                            кнопка покупки – праворуч. Зображення товару велике, що дозволяє розглянути деталі.</p>
                        <img src={assets.dekstop} alt='dekstop'/>
                        <img src={assets.dekstop2} alt='dekstop'/>
                        <img src={assets.dekstop3} alt='dekstop'/>
                    </div>

                </div>;
            case 3:
                return <div>
                    <div className="mb-4 mt-4">
                        <p className="font-semibold text-xl">Планшетна версія</p>
                        <p>На планшетах дизайн залишається зручним, але стає компактнішим. Відступи зменшуються, а
                            шрифти адаптуються для збереження читабельності.

                            Меню залишається горизонтальним, проте проміжки між елементами зменшуються. Кнопка входу
                            також стає меншою, а індикатор кошика змінює розмір для гармонійного вигляду.

                            Основний контент змінює структуру: зображення товару стає трохи меншим, а текстова частина
                            набуває більш лаконічного вигляду. У деяких випадках використовується адаптивне розташування
                            в колонку для зручності перегляду.
                        </p>
                        <img src={assets.tablet} alt='tablet'/>
                        <img src={assets.tablet2} alt='tablet'/>
                        <img src={assets.tablet3} alt='tablet'/>
                    </div>

                </div>;
            case 4:
                return <div>
                    <div className="mb-4 mt-4">
                        <p className="font-semibold text-xl">Телефонна версія</p>

                        <p>Для маленьких екранів реалізовано спрощений варіант дизайну. Меню приховане та відображається
                            у
                            вигляді випадаючого списку, що відкривається за допомогою кнопки. Всі елементи стають більш
                            компактними, а кнопки та іконки зменшуються.

                            Основний контент змінює свою структуру: зображення товару та його опис відображаються в
                            стовпчик. Висота зображення товару значно зменшується, щоб зберегти баланс між контентом і
                            розміром екрану.

                            Завдяки такій адаптації сайт залишається зручним і функціональним на будь-яких пристроях,
                            забезпечуючи комфортний досвід користувачам незалежно від розміру екрану.</p>
                        <img src={assets.phone} alt='phone'/>
                        <img src={assets.phone2} alt='phone'/>
                        <img src={assets.phone3} alt='phone'/>
                    </div>
                </div>;
            case 5:
                return <div>
                    <div className="mb-4 mt-4">
                        <p className="font-semibold text-xl">Висновки</p>
                        <p>
                            У ході виконання лабораторної роботи було реалізовано адаптивну верстку веб-застосунку,
                            що включає три основні варіанти відображення:
                            <strong>Десктопна версія</strong> – забезпечує зручний інтерфейс для користувачів із
                            великими екранами, розділяючи контент на логічні блоки. Всі елементи мають достатні
                            відступи, що сприяє кращому сприйняттю інформації. Меню відображається у вигляді
                            горизонтального списку, що дозволяє легко орієнтуватися серед розділів сайту. Основний
                            контент представлений двома частинами: зображення товару розташоване ліворуч, а
                            текстовий опис – праворуч. Це робить сайт більш структурованим і зручним у використанні.
                        </p>

                        <p><strong>Планшетна версія</strong> – оптимізована для пристроїв середнього розміру. Тут
                            елементи стають компактнішими, а відступи між ними зменшуються, щоб забезпечити баланс
                            між вільним простором і інформаційним наповненням. Меню залишається у горизонтальному
                            форматі, але його пункти розташовані щільніше. Основний контент також адаптується –
                            зображення товару трохи зменшується, а текст стає більш лаконічним, що полегшує
                            сприйняття інформації. У деяких випадках використовується гнучке компонування, коли
                            елементи можуть розташовуватися у дві колонки або переходити у вертикальну структуру.
                        </p>

                        <p><strong>Мобільна версія</strong> – спрямована на максимально зручне використання на
                            невеликих екранах смартфонів. Всі елементи стають ще компактнішими, а навігаційне меню
                            приховується у вигляді кнопки-бургеру, яка відкриває випадаючий список. Основний контент
                            відображається у стовпчик, щоб уникнути горизонтального прокручування та забезпечити
                            зручність взаємодії. Зображення товарів зменшуються, а текстові блоки формуються так,
                            щоб не перевантажувати користувача зайвою інформацією. Завдяки такій адаптації сайт
                            залишається функціональним, а користувач може легко знайти необхідну інформацію навіть
                            на екрані смартфона. </p>

                        <p>У процесі роботи було використано методи адаптивної верстки, серед
                            яких <strong>медіа-запити</strong>, що дозволяють налаштовувати стилі залежно від ширини
                            екрану, <strong>метатег viewport</strong>, який забезпечує коректне масштабування
                            сторінки на мобільних пристроях, а також <strong>стратегія Mobile First</strong>, що
                            передбачає початкову розробку інтерфейсу для мобільних пристроїв із подальшим
                            ускладненням для більших екранів. </p>

                        <p>Лабораторна робота дозволила глибше зрозуміти принципи адаптивної верстки, навчитися
                            правильно використовувати медіа-запити та організовувати елементи сторінки відповідно до
                            різних пристроїв. Отримані навички є важливими для створення сучасних веб-застосунків,
                            які забезпечують якісний користувацький досвід незалежно від пристрою, на якому вони
                            відкриваються. </p>

                    </div>
                </div>
                    ;

        }
    };

    return (
        <div className="min-h-screen">
            <h1 className="text-4xl font-bold text-center mt-8 mb-8">Лабораторна робота 3.2</h1>
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

export default Laboratorna_4;