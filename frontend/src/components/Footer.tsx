import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest w-full py-16 px-margin-mobile md:px-margin-desktop flex flex-col items-center gap-8">
      <div className="max-w-container-max w-full grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 flex flex-col gap-4">
          <img src="/images/Navigation/Logo.png" alt="Loluna Logo" className="h-10 object-contain object-left max-w-fit" />
          <p className="text-on-surface-variant font-label-md">
            Premium Baby Skincare. Gentle by Nature, Proven by Science.
          </p>
          <div className="flex gap-4 mt-4">
            <Link href="#" className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-sm">language</span>
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-sm">share</span>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-primary text-sm uppercase tracking-wider">About Us</h4>
          <div className="flex flex-col gap-3">
            <Link className="text-on-surface-variant hover:text-primary transition-colors text-sm" href="/about">Company Profile</Link>
            <Link className="text-on-surface-variant hover:text-primary transition-colors text-sm" href="#">Founder Story</Link>
            <Link className="text-on-surface-variant hover:text-primary transition-colors text-sm" href="#">CSR</Link>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-primary text-sm uppercase tracking-wider">Product</h4>
          <div className="flex flex-col gap-3">
            <Link className="text-on-surface-variant hover:text-primary transition-colors text-sm" href="#">Ingredients</Link>
            <Link className="text-on-surface-variant hover:text-primary transition-colors text-sm" href="#">Technology</Link>
            <Link className="text-on-surface-variant hover:text-primary transition-colors text-sm" href="#">Store Locator</Link>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-primary text-sm uppercase tracking-wider">Contact</h4>
          <div className="flex flex-col gap-3">
            <p className="text-on-surface-variant text-sm">Indonesia: +62 21 5571123</p>
            <p className="text-on-surface-variant text-sm">Vietnam: +84 21 5571123</p>
            <p className="text-on-surface-variant text-sm">Singapore: +65 21 5571123</p>
          </div>
        </div>
      </div>
      <div className="w-full border-t border-outline-variant/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-on-surface-variant text-sm opacity-90">
          © 2024 Loluna Premium Baby Skincare. Gentle by Nature, Proven by Science.
        </p>
        <div className="flex gap-6">
          <Link className="text-on-surface-variant hover:text-primary transition-colors text-sm" href="#">Privacy Policy</Link>
          <Link className="text-on-surface-variant hover:text-primary transition-colors text-sm" href="#">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
