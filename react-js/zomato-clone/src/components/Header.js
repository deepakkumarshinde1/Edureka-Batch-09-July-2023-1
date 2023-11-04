const Header = (props) => {
  return (
    <>
      <div
        className={`col-12 d-flex justify-content-between py-2 ${props.bgColor}`}
      >
        <p className="m-0 brand">e!</p>
        <div>
          <button className="btn text-white">Login</button>
          <button className="btn btn-outline-light">
            <i className="fa fa-search" aria-hidden="true"></i>Create a Account
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
