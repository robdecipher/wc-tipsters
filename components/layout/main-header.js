import Link from 'next/link';

import classes from './main-header.module.css';

function MainHeader() {

    return(
        <header className={classes.header}>
            <div className={classes.brandwrap}>
                <Link href='/' className={classes.brand}>World Cup Tipsters</Link>
                <div className={classes.headercontrols}>
                    <Link href='/'>Login</Link>
                    <button>MENU</button>
                </div>
            </div>
            <nav className={classes.navigation}>
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