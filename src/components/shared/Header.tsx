type HeaderProps = {
  title: string;
  subTitle?: string;
};

const Header = ({ title, subTitle }: HeaderProps) => {
  return (
    <>
      <h3 className="h3-bold text-dark-600">{title}</h3>
      {subTitle && <p className="p-16-regular mt-4 mb-10">{subTitle}</p>}
    </>
  );
};

export default Header;
