const Work = () => {
    return (  
        <div className="py-10">
        <p className="text-xl font-bold leading-10 sm:text-3xl md:text-4xl text-center mb-10">Our Products</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-6 gap-10">
                <div className="text-center">
                    <img src="/product/image1.jpeg" className="aspect-[1.4] w-full" alt="Image" />
                    <p>Ram Sharma</p>
                    <p>Bidding Starts at Rs. 1000</p>
                    <p>Avaibility Date: 12/05/2022</p>
                    <div className="flex">
                    <input className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="number" placeholder="Write your bid here "></input>
                    <button className="px-2
                              py-2.5order border-custom-blue
                              bg-green-600
                              text-white
                              font-medium
                              text-xs
                              leading-tight
                              uppercase
                              rounded
                              shadow-md
                              hover:bg-green-700 hover:shadow-lg
                              focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0
                              active:bg-green-800 active:shadow-lg
                              transition
                              duration-150
                              ease-in-out
                              ml-1">Place bid</button>
                              </div>
                </div>
                <div className="text-center">
                    <img src="/product/image3.jpeg" className="aspect-[1.4] w-full" alt="Image" />
                    <p>Shreya Shukla</p>
                    <p>Bidding Starts at Rs. 3000</p>
                    <p>Avaibility Date: 25/05/2022</p>
                    <div className="flex">
                    <input className="form-control block w-full px-3 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="number" placeholder="Write your bid here "></input>
                    <button className="px-2
                              py-2.5
                              bg-green-600
                              text-white
                              font-medium
                              text-xs
                              leading-tight
                              uppercase
                              rounded
                              shadow-md
                              hover:bg-green-700 hover:shadow-lg
                              focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0
                              active:bg-green-800 active:shadow-lg
                              transition
                              duration-150
                              ease-in-out
                              ml-1">Place bid</button>
                              </div>
                </div>
                <div className="text-center">
                    <img src="/product/image2.jpeg" className="aspect-[1.4] w-full" alt="Image" />
                    <p>Anamika Rai</p>
                    <p>Bidding Starts at Rs. 500</p>
                    <p>Avaibility Date: 20/06/2022</p>
                    <div className="flex">
                    <input className="form-control block w-full px-3 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="number" placeholder="Write your bid here "></input>
                    <button className="px-2
                              py-2.5
                              bg-green-600
                              text-white
                              font-medium
                              text-xs
                              leading-tight
                              uppercase
                              rounded
                              shadow-md
                              hover:bg-green-700 hover:shadow-lg
                              focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0
                              active:bg-green-800 active:shadow-lg
                              transition
                              duration-150
                              ease-in-out
                              ml-1">Place bid</button>
                              </div>
                </div>
            </div>
        </div>
    );
}
 
export default Work;