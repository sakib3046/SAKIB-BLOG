import Link from 'next/link'

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="container">
      <header className="header">
        <Link className="text-3xl font-black" href="/">
          SAKIB <span className='text-[#6e45e2]'>BlOG</span>
        </Link>
      </header>
      <main>{children}</main>
      <footer className="footer">
      </footer>
    </div>
  )
}
