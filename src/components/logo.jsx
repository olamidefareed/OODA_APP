const Logo = (size) => {
  return (
    <div className="w-fit">
      <img src="/Logo.svg" alt="Logo" width={size || 30} />
    </div>
  );
};

export default Logo;
