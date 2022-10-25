import '../../App.css';
import {Link, Route, Routes} from "react-router-dom";
import React from "react";
function Home() {
    return ( <div className={'app'}>
            <><Link to={'/'}>Home</Link></>
            <div className={'container'}>
                <ul>
                    <li><Link className={'link'} to={'/'}>Home</Link></li>
                    <li><Link  className={'link'} to={'/users'}>Users</Link></li>
                    <ul>
                        <li><Link className={'link'} to={'/users/vasya'}>Vasya</Link></li>
                        <li><Link className={'link'} to={'/users/peter'}>Peter</Link></li>
                    </ul>
                </ul>

            </div>
        </div>
    );
}
export default Home;
