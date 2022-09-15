import { useState } from 'react';
import Link from 'next/link';

import classes from './main-header.module.css';

function MainHeader() {

    const [isNavExpanded, setIsNavExpanded] = useState(false);

    return(
        <header className={classes.header}>
            <div className={classes.brandwrap}>
                <Link href='/' className={classes.brand}>World Cup Tipsters</Link>
                <div className={classes.headercontrols}>
                    <Link href='/'>Login</Link>
                    <button className={classes.menutoggle} onClick={
                        () => {
                            setIsNavExpanded(!isNavExpanded);
                        }
                    }>{isNavExpanded ? 'CLOSE' : 'MENU'}</button>
                </div>
            </div>
            <nav className={isNavExpanded ? 'navigation' : 'navclosed'}>
                <ul>
                    <li>
                        <Link href='/'>Live Table</Link>
                    </li>
                    <li>
                        <Link href='/'>Matches</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );

}

export default MainHeader;