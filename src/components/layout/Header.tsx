import { HeaderSearch } from "../search/HeaderSearch";

export default function Header() {
  return (
    <header >
      <div className="py-5 container mx-auto  bg-white">
        <a href="/">
          <img
            src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
            alt="Logo"
            className="h-[40px] w-[50px]"
          />
        </a>
        <HeaderSearch/>
      </div>
    </header>
  );
}
