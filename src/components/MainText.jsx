import React from 'react'
import { assets } from "../assets/assets.js";
const MainText = () => {
    return (
        <div>
            <div className="text-base text-center font-light leading-relaxed mt-5">
                <div className="mb-4">
                    <p className="font-semibold text-lg">ЗВІТИ З ЛАБОРАТОРНИХ РОБІТ</p>
                    <p className="font-semibold text-lg">З ДИСЦИПЛІНИ «WEB-ОРІЄНТОВНАНІ ТЕХНОЛОГІЇ. ОСНОВИ FRONTEND та BACKEND РОЗРОБОК»</p>
                </div>
                <div className="mb-4 flex items-center justify-center">
                    <p className="mr-4">Студентки групи ІО-24 Пазій Єлізавети Романівни</p>
                    <img src={assets.my_photo} alt="Фото студента" className="w-24 h-32" />
                </div>
            </div>
        </div>
    )
}

export default MainText