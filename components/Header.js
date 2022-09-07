import Link from 'next/link';

export default function Header() {
    return (
        <header>
            <nav>
                <Link href="/" >Startseite</Link>
                <Link href="https://recipes-app-sage.vercel.app/veggie" >Veggie</Link>
                <Link href="https://recipes-app-sage.vercel.app/dessert" >Desserts</Link>
            </nav>
        </header>
    )
}