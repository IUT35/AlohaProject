import "./categoryList.css"



const CategoryList = () => {
  return (
    <div className="cList">
      <div className="cListItem">
        <img src="https://picsum.photos/200/300" alt="" className="cListImg" />
        <div className="cListTitles">
          <h1>Concerts</h1>
          <h2>123</h2>
        </div>
      </div>
      <div className="cListItem">
        <img src="https://picsum.photos/200/300" alt="" className="cListImg" />
        <div className="cListTitles">
          <h1>Performances</h1>
          <h2>123</h2>
        </div>
      </div>
      <div className="cListItem">
        <img src="https://picsum.photos/200/300" alt="" className="cListImg" />
        <div className="cListTitles">
          <h1>Outdoors</h1>
          <h2>123</h2>
        </div>
      </div>
      <div className="cListItem">
        <img src="https://picsum.photos/200/300" alt="" className="cListImg" />
        <div className="cListTitles">
          <h1>Indoors</h1>
          <h2>123</h2>
        </div>
      </div>
      <div className="cListItem">
        <img src="https://picsum.photos/200/300" alt="" className="cListImg" />
        <div className="cListTitles">
          <h1>Sports</h1>
          <h2>123</h2>
        </div>
      </div>
    </div>
  )
}

export default CategoryList