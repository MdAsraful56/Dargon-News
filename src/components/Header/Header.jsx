import logo from '../../assets/logo.png';


const Header = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-4 mt-3'>
            <header className='flex flex-col items-center justify-center gap-2'>
                <img className='w-[350px]' src={logo} alt="" />
                <h4 className="text-lg text-gray-400">Journalism Without Fear or Favour</h4>
                <div className="flex flex-row items-center justify-center gap-4">
                    <button className="btn btn-error text-white text-lg">Latest</button>
                    <p className="">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
                </div>
            </header>
        </div>
    );
};

export default Header;