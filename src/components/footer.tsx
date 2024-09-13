import { Logo } from '@/icon/logo'
import React from 'react'

export const Footer = () => {
  return (
    <div className='w-[100%] h-[500px] bg-slate-200 flex items-center justify-center'>
      <div className='flex items-start justify-around w-[100%]'>
        <div className='flex flex-col items-start justify-start gap-3'>
          <span className='mb-3'><Logo /></span>
          <a href="tel:+99 893 374-66-44" className='transition-transform duration-300 hover:text-red-500 hover:scale-105'>+99 893 374-66-44</a>
          <span className='transition-transform duration-300 hover:text-red-500 hover:scale-105'>справочная служба</span>
          <a href="tel:+99 890 253-77-53" className='transition-transform duration-300 hover:text-red-500 hover:scale-105'>+99 890 253-77-53</a>
          <span className='transition-transform duration-300 hover:text-red-500 hover:scale-105'>интернет-магазин</span>
          <strong className='mt-3 transition-transform duration-300 hover:text-red-500 hover:scale-105'>Оставайтесь на связи</strong>
        </div>
        <div className='flex flex-col gap-3'>
          <strong className='transition-transform duration-300 hover:text-red-500 hover:scale-105'>Условия обмена и возврата</strong>
          <ul className='flex flex-col gap-3'>
            <li className='transition-transform duration-300 hover:text-red-500 hover:scale-105'>Условия обмена и возврата</li>
            <li className='transition-transform duration-300 hover:text-red-500 hover:scale-105'>О компании</li>
            <li className='transition-transform duration-300 hover:text-red-500 hover:scale-105'>Контакты</li>
            <li className='transition-transform duration-300 hover:text-red-500 hover:scale-105'>Доставка</li>
            <li className='transition-transform duration-300 hover:text-red-500 hover:scale-105'>Оплата</li>
          </ul>
        </div>
        <div className='flex flex-col gap-3'>
          <strong className='transition-transform duration-300 hover:text-red-500 hover:scale-105'>Клиентам</strong>
          <ul className='flex flex-col gap-3'>
            <li className='transition-transform duration-300 hover:text-red-500 hover:scale-105'>Личный кабинет</li>
            <li className='transition-transform duration-300 hover:text-red-500 hover:scale-105'>Блог</li>
            <li className='transition-transform duration-300 hover:text-red-500 hover:scale-105'>Обратная связь</li>
          </ul>
        </div>
        <div className='flex flex-col gap-3'>
          <strong className='transition-transform duration-300 hover:text-red-500 hover:scale-105'>Информация</strong>
          <ul className='flex flex-col gap-3'>
            <li className='transition-transform duration-300 hover:text-red-500 hover:scale-105'>Пользовательское соглашение</li>
            <li className='transition-transform duration-300 hover:text-red-500 hover:scale-105'>Политика конфиденциальности и оферта</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
