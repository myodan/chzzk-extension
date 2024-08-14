import logo from "~/assets/logo.svg";

function App() {
  return (
    <main className="w-96 flex flex-col bg-base-200">
      <header className="bg-base-300 flex flex-1 justify-center p-4">
        <img src={logo} alt="logo" className="w-16" />
      </header>
      <section className="flex flex-col gap-2 p-4">
        {Array.from({ length: 1 }).map((_, index) => (
          <div key={index} className="flex gap-2 justify-between items-center">
            <input
              type="checkbox"
              className="toggle toggle-sm"
              checked
              disabled
            />
            <p>
              <span className="text-base font-bold">
                {browser.i18n.getMessage("bypassGrid")}
              </span>
              <span className="text-xs line-clamp-1">
                {browser.i18n.getMessage("bypassGridDesc")}
              </span>
            </p>
          </div>
        ))}
      </section>
      <footer className="bg-base-300 flex justify-center px-4 py-2">
        <ul className="flex flex-wrap items-center text-xs">
          <li>
            <a href="https://github.com/myodan/chzzk-extension" target="_blank">
              GitHub
            </a>
          </li>
        </ul>
      </footer>
    </main>
  );
}

export default App;
