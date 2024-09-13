import { Logo } from '@/icon/logo'
import React from 'react'
import { Button } from './ui/button'
import { Menu } from '@/icon/menu'
import { Input } from './ui/input'
import { Search } from '@/icon/search'
import { User } from '@/icon/user'
import { Like } from '@/icon/like'
import { Korzinka } from '@/icon/korzinka'

export const Header = () => {
  return (
    <div className='max-w-[1537px] w-[100%] py-5 px-7 shadow-lg shadow-gray-300 flex items-center  justify-between '>
        <Logo/>
        <Button size={'default'}  variant={'default'} startIcon={<Menu/>} >Каталог</Button>
        <label className='w-[550px] border-2 border-gray-300 h-[45px] flex items-center justify-between px-5 bg-white   '>
        <Input placeholder='Поиск'  />
        <Search/>
        </label>
        <div className='flex items-center gap-7'>
            <span className='flex items-center justify-center flex-col'>
                <User/>
                <span>Войти</span>
            </span>
            <span className='flex items-center justify-center flex-col'>
                <Like/>
                <span>Избранное</span>
            </span>
            <span className='flex items-center justify-center flex-col'>
                <Korzinka/>
                <span>Корзина</span>
            </span>
        </div>
    </div>
  )
}
