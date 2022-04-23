const Work = () => {
    return (  
        <div className="py-10">
        <p className="text-xl font-bold leading-10 sm:text-3xl md:text-4xl text-center mb-10">Our Products</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-6 gap-10">
                <div className="text-center">
                    <img src="/Banner/art.jpg" className="aspect-[1.4] w-full" alt="Image" />
                    <p>Name</p>
                    <p>Bidding Price</p>
                    <p>Avaibility Date</p>
                </div>
                <div className="text-center">
                    <img src="/Banner/art.jpg" className="aspect-[1.4] w-full" alt="Image" />
                    <p>Name</p>
                    <p>Bidding Price</p>
                    <p>Avaibility Date</p>
                </div>
                <div className="text-center">
                    <img src="/Banner/art.jpg" className="aspect-[1.4] w-full" alt="Image" />
                    <p>Name</p>
                    <p>Bidding Price</p>
                    <p>Avaibility Date</p>
                </div>
            </div>
        </div>
    );
}
 
export default Work;