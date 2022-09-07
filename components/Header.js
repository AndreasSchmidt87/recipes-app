import Link from 'next/link';

export default function Header() {
    return (
        <header>
            <Link href="/" ><a>Startseite</a></Link>
            <Link href="/veggie" ><a>Veggie</a></Link>
            <Link href="/dessert" ><a>Desserts</a></Link>
        </header>
    )
}