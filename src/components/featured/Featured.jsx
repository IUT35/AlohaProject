import "./featured.css"

export const featured = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <img src="https://picsum.photos/240/250?random=1" alt="photo" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Izmir</h1>
                <h2>Properties 123</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://picsum.photos/240/250?random=2" alt="photo" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Istanbul</h1>
                <h2>Properties 123</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://picsum.photos/240/250?random=3" alt="photo" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Ankara</h1>
                <h2>Properties 123</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://picsum.photos/240/250?random=4" alt="photo" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Antalya</h1>
                <h2>Properties 123</h2>
            </div>
        </div>
    </div>
  )
}

export default featured