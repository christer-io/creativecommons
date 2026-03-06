import { Noto_Sans } from 'next/font/google';

const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
});

function Header() {
  const navLinks = [
    { href: '/post/kreditering', label: 'Kreditering' },
    { href: '/post/norske-lisenser-og-verktoy', label: 'Lisenser' },
    { href: '/post/kontakt', label: 'Kontakt oss' },
    { href: 'https://creativecommons.org', label: 'CreativeCommons.org' },
  ];

  return (
    <div>
      <header>
        <nav className="border-gray-200 bg-white px-4 py-3 lg:px-6">
          <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
            <a href="/" className="flex items-center">
              <span
                className={`${notoSans.className} self-center whitespace-nowrap text-xl font-medium text-[#4D8FE4]`}
              >
                Creative
              </span>
              <span
                className={`${notoSans.className} self-center whitespace-nowrap text-xl font-medium text-slate-700`}
              >
                {' '}
                Commons.no
              </span>
            </a>

            <div className="flex items-center lg:order-2">
              <a
                href="/"
                className="mr-2 rounded-lg px-4 py-2 text-base font-medium text-slate-700 focus:outline-none focus:ring-gray-800 lg:px-5 lg:py-2.5"
              ></a>
            </div>

            <div
              className="hidden w-full items-center justify-between lg:order-1 lg:flex lg:w-auto"
              id="mobile-menu-2"
            >
              <ul className="mt-4 flex flex-col gap-1 pt-2 pb-2 font-medium lg:mt-0 lg:flex-row lg:gap-8 lg:pt-0 lg:pb-0">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="block rounded px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900 lg:p-0 lg:hover:bg-transparent"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
