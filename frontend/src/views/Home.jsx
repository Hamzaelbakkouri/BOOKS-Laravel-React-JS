import React from 'react'

const Home = () => {
    return (
        <div className='w-full'>
            <div>welcome to our website</div>
            <div className="carousel w-full mt-20">
                <div id="item1" className="carousel-item w-90">
                    <img src="https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9781524798642_p0_v5%5D&call=url%5Bfile:common/decodeProduct.chain%5D" className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-90 ">
                    <img src="https://images-us.bookshop.org/ingram/9781538724897.jpg?height=500&v=v2-7a60a2b942751777667640729ca6d385" className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-90">
                    <img src="https://images-us.bookshop.org/ingram/9780316365215.jpg?height=500&v=v2-c0409e24ed8260a42d521bc651199649" className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-90">
                    <img src="https://images-us.bookshop.org/ingram/9781668007846.jpg?height=500&v=v2" className="w-full" />
                </div>
                <div id="item5" className="carousel-item w-90">
                    <img src="https://images-us.bookshop.org/ingram/9780593577608.jpg?height=500&v=v2-c6784e79ee74d4ea94de42dbb8070bb1" className="w-full" />
                </div>
                <div id="item7" className="carousel-item w-90">
                    <img src="https://images-us.bookshop.org/ingram/9781250793782.jpg?height=500&v=v2-46089c0adde558174ef63b08d2412c5e" className="w-full" />
                </div>
                <div id="item8" className="carousel-item w-90">
                    <img src="https://images-us.bookshop.org/ingram/9780316592031.jpg?height=500&v=v2-233482937eaa0811bb20773b4b6a543e" className="w-full" />
                </div>
                <div id="item9" className="carousel-item w-90">
                    <img src="https://images-us.bookshop.org/ingram/9780593321201.jpg?height=500&v=v2-3559920d7919523c7314f5f676233858" className="w-full" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
                <a href="#item5" className="btn btn-xs">5</a>
                <a href="#item6" className="btn btn-xs">6</a>
                <a href="#item7" className="btn btn-xs">7</a>
                <a href="#item8" className="btn btn-xs">8</a>
                <a href="#item9" className="btn btn-xs">9</a>
            </div>
        </div>
    )
}

export default Home
