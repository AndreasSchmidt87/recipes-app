import Link from 'next/link';

export default function Header() {
    return (
        <header>
            <nav>
                <Link href="/" >Startseite</Link>
                <Link href="/dessert" >Veggie</Link>
                <Link href="/veggie" >Desserts</Link>
            </nav>
        </header>
    )
}