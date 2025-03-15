import { ReactNode } from 'react';
import * as PropTypes from 'prop-types';
import { Link } from '@inertiajs/react';

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <main>
            <header>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
            </header>
            <article>{children}</article>
        </main>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};
