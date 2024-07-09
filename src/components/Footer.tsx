const Footer = () => {
  return (
    <div className="flex w-full px-4 md:px-6 py-4 items-start mt-12">
      <div className="flex flex-col w-full">
        <p>Fabelhafte Funde</p>
      </div>
      <div className="flex w-full justify-center">&copy; MarBenz</div>
      <div className="flex flex-col md:flex-row w-full justify-end items-end gap-0 md:gap-2">
        <a href="">Disclaimer</a>
        <a href="">Datenschutz</a>
      </div>
    </div>
  );
};

export default Footer;
