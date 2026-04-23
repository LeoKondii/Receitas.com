import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo">
          <span className="logo-icon">🍽</span>
          <span className="logo-text">
            Receitas<span className="logo-dot">.com</span>
          </span>
        </div>
        <p className="header-tagline">Encontre sua próxima receita favorita</p>
      </div>
    </header>
  );
}