import moment from 'moment';
import logo from '../../assets/logo.png';
import Navbar from '../Navbar/Navbar';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router';


const Header = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-4 mt-3'>
            <header className='flex flex-col items-center justify-center gap-2'>
                <img className='w-[350px]' src={logo} alt="" />
                <h4 className="text-lg text-gray-400 ">Journalism Without Fear or Favour</h4>
                <p className="text-base font-semibold text-gray-300">
                    {
                        moment().format('dddd, MMMM Do YYYY, h:mm:ss a')
                    }
                </p>
                <div className="flex flex-row items-center justify-center gap-2 bg-base-200 rounded-base p-2">
                    <button className="btn btn-error text-white text-lg">Latest</button>
                    {/* <marquee className='text-lg'>Match Highlights: Germany vs Spain — as it happened ! Match Highlights: Germany vs Spain as...</marquee> */}
                    <Marquee pauseOnHover={true} className='space-x-40'>
                        <Link to='/news' className='text-lg'>Match Highlights: Germany vs Spain — as it happened ! Match Highlights: Germany vs Spain as...</Link>
                        <Link to='/news' className='text-lg'>Match Highlights: Germany vs Spain — as it happened ! Match Highlights: Germany vs Spain as...</Link>
                        <Link to='/news' className='text-lg'>Match Highlights: Germany vs Spain — as it happened ! Match Highlights: Germany vs Spain as...</Link>
                        <Link to='/news' className='text-lg'>Match Highlights: Germany vs Spain — as it happened ! Match Highlights: Germany vs Spain as...</Link>
                    </Marquee>
                </div>
                
                <section className='w-11/12 mx-auto'>
                    <Navbar />
                </section>
            </header>
        </div>
    );
};


export default Header;