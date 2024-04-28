import Link from "next/link";

export default function Header() {
    return(
    <div className="w-full relative text-black z-10">
        <nav className="container relative flex flex-wrap items-center justify-between mx-auto p-8">
            <Link href="/" className="font-bold text-3xl">Home</Link>
            <div className="space-x-4">
                <Link href="/admin">Admin</Link>
                <Link href="/document">Documents</Link>
                <Link href="login">login</Link>
            </div>
        </nav>
    </div>);
}
