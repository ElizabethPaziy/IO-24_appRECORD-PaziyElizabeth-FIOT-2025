import React, {useState} from 'react';
import {assets} from "../assets/assets.js";

const tasks = [
    {id: 1, title: "Тема, мета ЛР №2, Місце розташування сайту, звіту"},
    {id: 2, title: "Способи підключення стилів"},
    {id: 3, title: "СЕЛЕКТОРИ"},
    {id: 4, title: "Селектори тегу"},
    {id: 5, title: "Селектори класу"},
    {id: 6, title: "Селектори ідентифікаторів"},
    {id: 7, title: "Інші селектори"},
    {id: 8, title: "CSS: Шрифти Текст Таблиці Фон Контур Списки CSS Просунутий"},
    {id: 9, title: "Висновки до ЛР №2"},
];

const Laboratorna_2 = () => {
    const [activeTask, setActiveTask] = useState(1);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const renderContent = () => {
        switch (activeTask) {
            case 1:
                return <div>
                    <div className="text-base font-light leading-relaxed mt-5">
                        <div className="mb-4">
                            <p className="font-semibold text-xl">Тема, мета ЛР №2, Місце розташування сайту, звіту</p>
                        </div>

                        <p>
                            Тема: КАСКАДНІ ТАБЛИЦІ СТИЛІВ. СЕЛЕКТОРИ .ІДЕНТИФІКАТОРИ. СТИЛЬОВЕ ОФОРМЛЕННЯ ТЕКСТОВИХ
                            ЕЛЕМЕНТІВ В HTML-ДОКУМЕНТАХ.

                        </p>

                        <p>
                            Мета: придбати практичні навички роботи з селекторами, ідентифікаторами, списками,
                            різноманітними властивостями кольору і фону, зовнішними та внутрішними відступами,
                            плаваючими елементами, оформленням текстових елементів
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
                                Посилання на репозиторій живу сторінку з самостійними
                                роботами:<a>https://elizabethpaziy.github.io/IO-24_INDEPENDENT-PaziyElizabeth-FIOT-2025/</a>
                            </li>
                        </ul>

                    </div>
                </div>;
            case 2:
                return <div>
                    <div className="mb-4 mt-4">
                        <p className="font-semibold text-xl">Методи підключення CSS у веб-розробці</p>
                        <p>
                            CSS (Cascading Style Sheets) використовується для оформлення веб-сторінок, і існує кілька
                            способів його
                            підключення до HTML-документів. Вибір методу залежить від масштабу проєкту, вимог до
                            підтримки коду
                            та продуктивності сайту.
                        </p>

                        <p className="font-semibold">1. Вбудовані стилі (Inline CSS)</p>
                        <p>
                            Вбудовані стилі застосовуються безпосередньо до HTML-елемента за допомогою атрибута style.
                            Це дозволяє швидко змінювати зовнішній вигляд окремих елементів, але ускладнює
                            масштабованість коду.
                        </p>

                        <p className="font-semibold">2. Внутрішні стилі (Internal CSS)</p>
                        <p>
                            Внутрішні стилі визначаються у секції head HTML-документа за допомогою тегу style. Вони
                            діють
                            на всі елементи поточної сторінки, але не поширюються на інші файли.
                        </p>

                        <p className="font-semibold">3. Зовнішні стилі (External CSS)</p>
                        <p>
                            Зовнішні стилі зберігаються у окремих файлах із розширенням .css та підключаються через тег
                            link.
                            Це найефективніший метод для великих проєктів, оскільки забезпечує централізоване керування
                            стилями
                            та дозволяє використовувати один файл для кількох сторінок.
                        </p>

                        <p className="font-semibold">4. Імпортовані стилі (Imported CSS)</p>
                        <p>
                            Використання директиви @import дозволяє підключати один CSS-файл до іншого. Це зручно для
                            модульної структури коду, але може впливати на продуктивність через додаткові запити до
                            сервера.
                        </p>

                        <p>
                            Залежно від потреб проєкту, можна комбінувати кілька методів підключення стилів, щоб
                            забезпечити
                            максимальну гнучкість і ефективність розробки.
                        </p>
                    </div>

                </div>;
            case 3:
                return <div>
                    <div className="mb-4 mt-4">
                        <p className="font-semibold text-xl">СЕЛЕКТОРИ В CSS</p>
                        <p>
                            У CSS селектори відіграють ключову роль у визначенні, до яких HTML-елементів
                            застосовуватимуться стилі. Вони дозволяють точно та ефективно налаштовувати вигляд
                            веб-сторінок, що значно покращує їхню структуру, функціональність та візуальне сприйняття.
                        </p>

                        <p className="font-semibold">Основні типи селекторів:</p>

                        <p className="font-semibold">1. Селектор тегу</p>
                        <p>
                            Дозволяє вибирати всі елементи певного тегу
                            (наприклад, <code>&lt;p&gt;</code>, <code>&lt;h1&gt;</code>, <code>&lt;button&gt;</code>).
                            Це зручно для встановлення загального стилю для всіх елементів одного типу на сторінці.
                        </p>

                        <p className="font-semibold">2. Селектор класу</p>
                        <p>
                            Використовується для вибору всіх елементів, які мають спільний клас. Це забезпечує
                            можливість застосовувати однакові стилі до кількох незалежних елементів, що робить дизайн
                            більш гнучким.
                        </p>

                        <p className="font-semibold">3. Селектор ідентифікатора</p>
                        <p>
                            Вибирає конкретний елемент за його унікальним <code>id</code>. Цей метод використовується
                            для стилізації окремих важливих елементів, які не повинні повторюватися на сторінці.
                        </p>

                        <p className="font-semibold">4. Селектор атрибута</p>
                        <p>
                            Дозволяє вибирати елементи, що містять певний атрибут або його значення. Це корисно для
                            стилізації елементів форм або спеціальних компонентів.
                        </p>

                        <p className="font-semibold">5. Універсальний селектор</p>
                        <p>
                            Позначається <code>*</code> і застосовується до всіх елементів на сторінці. Використовується
                            для встановлення базових стилів, наприклад, обнулення відступів
                            (<code>margin</code>, <code>padding</code>).
                        </p>

                        <p className="font-semibold">6. Сусідній селектор</p>
                        <p>
                            Дозволяє вибрати елемент, що йде безпосередньо після іншого елемента. Використовується для
                            стилізації лише певних елементів, які слідують за іншими.
                        </p>

                        <p className="font-semibold">7. Дочірній селектор</p>
                        <p>
                            Вибирає лише ті елементи, які є безпосередніми дочірніми елементами певного батьківського
                            елемента. Це зручно для вибіркового оформлення вкладених блоків.
                        </p>

                        <p className="font-semibold">8. Комбінований селектор</p>
                        <p>
                            Дозволяє вибирати кілька елементів одночасно, застосовуючи до них однакові стилі.
                            Використовується для спрощення CSS-коду.
                        </p>

                        <p className="font-semibold">9. Груповий селектор</p>
                        <p>
                            Об'єднує кілька селекторів у єдиний вираз, що допомагає зменшити дублювання стилів і зробити
                            код більш структурованим.
                        </p>

                        <p className="font-semibold">10. Псевдокласи та псевдоелементи</p>
                        <p>
                            Використовуються для зміни стилів елементів у певних станах
                            (наприклад, <code>:hover</code>, <code>:focus</code>) або для створення віртуальних
                            елементів (<code>::before</code>, <code>::after</code>), які не присутні в HTML-коді.
                        </p>

                        <p>
                            Селектори в CSS є потужним інструментом для гнучкого налаштування стилів. Вміння правильно
                            використовувати різні типи селекторів дозволяє створювати ефективний, читабельний та
                            масштабований код для веб-проєктів.
                        </p>
                    </div>

                </div>;
            case 4:
                return <div>
                    <div className="mb-4 mt-4">
                        <p className="font-semibold text-xl">Селектори тегу</p>
                        <p>
                            Код для селекторів тегу:
                        </p>
                        <img src={assets.tag_selector_code} alt="Код селектора тегу"/>
                        <p>
                            Фото:
                        </p>
                        <img src={assets.tag_selector_photo} alt="Селектор тегу"/>
                    </div>
                </div>
            case 5:
                return <div>
                    <div className="mb-4 mt-4">
                        <p>
                            Код для селекторів класу:
                        </p>
                        <img src={assets.class_selector_code} alt="Код селектора класу"/>
                        <p>
                            Фото:
                        </p>
                        <img src={assets.class_selector_photo} alt="Селектор класу"/>
                    </div>
                </div>
            case 6:
                return <div>
                    <div className="mb-4 mt-4">
                        <p>
                            Код для селекторів ідентифікаторів:
                        </p>
                        <img src={assets.identificator_selector_code} alt="Код селектора ідентифікаторів"/>
                        <p>
                            Фото:
                        </p>
                        <img src={assets.identificator_selector_photo} alt="Селектор ідентифікторів"/>
                    </div>
                </div>
            case 7:
                return <div>
                    <div className="mb-4 mt-4">
                        <p className="font-semibold text-xl">Інші селектори</p>
                        <p>У моєму CSS є кілька типів селекторів, окрім селекторів тегів, класів та ідентифікаторів. Ось
                            основні з них:</p>

                        <p><strong>Псевдокласи:</strong> Це селектори, які застосовуються до елементів, коли вони
                            знаходяться в певному стані, наприклад:</p>
                        <ul>
                            <li>:hover — застосовується, коли курсор знаходиться над елементом (наприклад, на кнопці).
                            </li>
                            <li>:focus — застосовується, коли елемент знаходиться в фокусі (наприклад, поле вводу, на
                                яке користувач клікнув або перейшов через клавішу Tab).
                            </li>
                            <li>:first-child — вибирає перший дочірній елемент батьківського контейнера.</li>
                            <li>:nth-child(n) — вибирає n-й дочірній елемент (де n може бути числом або формулою).</li>
                        </ul>

                        <p><strong>Псевдоелементи:</strong> Це селектори, які дозволяють стилізувати частини елементів
                            або додавати контент, наприклад:</p>
                        <ul>
                            <li>::before — додає контент перед вмістом елемента.</li>
                            <li>::after — додає контент після вмісту елемента.</li>
                        </ul>

                        <p><strong>Атрибутні селектори:</strong> Вибирають елементи на основі значень їх атрибутів,
                            наприклад:</p>
                        <ul>
                            <li>[type="text"] — вибирає всі елементи з атрибутом type, що дорівнює "text".</li>
                            <li>[disabled] — вибирає всі елементи з атрибутом disabled.</li>
                        </ul>

                    </div>
                </div>
            case 8:
                return <div>
                    <div className="mb-4 mt-4">
                        <p className="font-semibold text-xl">CSS: Шрифти Текст Таблиці Фон Контур Списки CSS
                            Просунутий</p>
                        <p>
                            Шрифти:
                        </p>
                        <img src={assets.font_code} alt="Шрифти"/>
                        <img src={assets.font_photo} alt="Фото шрифта"/>
                        <p>
                            Фон:
                        </p>
                        <img src={assets.background_code} alt="Фон"/>
                        <img src={assets.background_photo} alt="Фото фону"/>
                        <p>
                            Колір тексту:
                        </p>
                        <img src={assets.text_color_code} alt="Колір тексту"/>
                        <img src={assets.text_color_photo} alt="Фото коліру тексту"/>
                        <p>
                            CSS-властивості для таблиць
                        </p>
                        <img src={assets.table_lab2_code} alt="Таблиця"/>
                        <img src={assets.table_lab2_photo} alt="Фото Таблиці"/>
                        <p>
                            CSS-властивості для багаторівневих списків
                        </p>
                        <img src={assets.list_lab2_code} alt="Список"/>
                        <img src={assets.list_lab2_photo} alt="Фото списку"/>

                    </div>
                </div>
            case 9:
                return <div>
                    <div className="mb-4 mt-4">
                        <p className="font-semibold text-xl">ВИСНОВКИ</p>
                        <p>У рамках виконання цієї лабораторної роботи я отримала можливість поглибити свої знання про
                            каскадні таблиці стилів та їх застосування в оформленні веб-сторінок. Вивчення різних типів
                            селекторів (тегів, класів, ідентифікаторів, а також інших типів селекторів, таких як
                            сусідні, дочірні та атрибутні) дозволило зрозуміти, як стилі можуть бути застосовані до
                            різних елементів HTML-документів. Практика застосування CSS для оформлення шрифтів, кольору
                            тексту, фону, контурів та таблиць допомогла розширити навички стилізації веб-сторінок.</p>

                        <p>Важливим аспектом було вивчення каскадування та спадкування стилів. Я зрозуміла, як правильно
                            використовувати ці концепції для визначення пріоритетів стилів та ефективного управління
                            виглядом документу. Виконання стилізації резюме згідно з макетом дало можливість
                            попрактикуватися в створенні не тільки функціональних, а й візуально приємних
                            інтерфейсів.</p>

                        <p>Важливою частиною роботи було створення макету в Figma, що дозволило краще зрозуміти процес
                            планування дизайну сторінки перед її версткою. Після створення макету я перейшла до першого
                            етапу верстки — створення основного HTML-документа, що надало мені додаткові навички в
                            роботі з HTML та CSS.</p>

                        <p>Ця лабораторна робота допомогла мені не тільки вдосконалити технічні навички, а й розвинути
                            вміння організувати робочий процес, правильно планувати і застосовувати знання на
                            практиці.</p>


                    </div>
                </div>;
            default:
                return <div>Виберіть розділ</div>;
        }
    };

    return (
        <div className="min-h-screen">
            <h1 className="text-4xl font-bold text-center mt-8 mb-8">Лабораторна робота 2</h1>
            <div className="flex flex-col lg:flex-row items-start gap-5 mt-5 px-4">
                {/* Sidebar */}
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

export default Laboratorna_2;