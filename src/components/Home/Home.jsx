import LeftNavbar from "../layouts/LeftNavbar";
import RightNavbar from "../layouts/RightNavbar";


const Home = () => {
    return (
        <div>
            <main className="w-11/12 mx-auto gt-5 grid grid-cols-12 mt-3">
                <aside className='col-span-3'>
                    <LeftNavbar />
                </aside>
                <aside className='col-span-6'>main content</aside>
                <aside className='col-span-3'>
                    <RightNavbar />
                </aside>
            </main>
        </div>
    );
};

export default Home;