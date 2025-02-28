import { NavLink } from 'react-router-dom';
import borderwidth from '../assets/border-width.svg';
import style from '../../style/NavBar/NavBar.module.css';

export default function VendorNavBar() {
    return (
        <nav className={style.navbar}>
            <NavLink to="." end>FoodApp</NavLink>
            <ul>
                <li><NavLink to="." end>訂單</NavLink></li>
                <li><NavLink to="mealamount">供餐數量設定</NavLink></li>
                <li><NavLink to="allmeals">所有餐點</NavLink></li>
                <li><NavLink to="settlement">月結算</NavLink></li>
                <li><NavLink to="/">登出</NavLink></li>
            </ul>
        </nav>
    );
};