import navi from '../data/global_navi.json';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Hd = ({leng, setLeng}) =>{
    return(
        <header className="fixed-top py-3 bg-white border-bottom">
            <div className="container d-flex gap-4">
                <h1 className="h3 m-0">로고</h1>
                <nav>
                    <ul>
                        {
                            navi[leng]["menu"].map( (v, i) => <li key={i}>
                                <Link to={v.to}>{v.text}</Link>
                                </li>)
                            
                        }
                        

                    </ul>
                </nav>

                <ul className='d-flex gap-3 ms-auto'>
                    <li>
                        <Link to="/en">영어</Link>
                    </li>
                    <li>
                        <Link to="/cn">중국어</Link>
                    </li>
                    <li>
                        <Link to="/kr">한국어</Link>
                    </li>
                </ul>

            </div>
        </header>
    );
}

export default Hd;