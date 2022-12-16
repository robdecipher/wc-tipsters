import { useState } from 'react';
import Link from 'next/link';

import classes from './main-header.module.css';

function MainHeader() {

    const [isNavExpanded, setIsNavExpanded] = useState(false);

    return(
        <header className={classes.header}>
            <div className={'max-wrap'}>
                <div className={classes.brandwrap}>
                    <Link href='/' className={classes.brand}>World Cup Tipsters</Link>
                    <div className={classes.headercontrols}>
                        <Link href='/'>Login</Link>
                        <Link href='/'>Sign Up</Link>
                        <button className={classes.menutoggle} onClick={
                            () => {
                                setIsNavExpanded(!isNavExpanded);
                            }
                        }>{isNavExpanded ? 'CLOSE' : 'MENU'}</button>
                    </div>
                </div>
                <nav className={isNavExpanded ? 'navigation expanded' : 'navigation'}>
                    <ul>
                        <li>
                            <Link href='/'>Live Table</Link>
                        </li>
                        <li>
                            <Link href='/'>Predictions</Link>
                        </li>
                        <li>
                            <Link href='/'>Results</Link>
                        </li>
                        <li>
                            <Link href='/'>Video</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );

}

export default MainHeader;