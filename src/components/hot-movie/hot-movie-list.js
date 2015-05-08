var HotMovieMain = require('./hot-movie-main');
var HotMovieSub = require('./hot-movie-sub');

class HotMovieList extends  React.Component {
         constructor(props) {
             super(props);
             this.state = {
                 data: {
                     List: {}
                 }
             };
         }

	render(){
	var _data=this.props.data;
	return(<aside className="movie-vertical-wrap J_hot_movie"><div className="movie-vertical big"><HotMovieMain data={_data[0]}/></div><div className="movie-vertical movie-vertical-wide">
<HotMovieSub data={_data[1]}/><HotMovieSub data={_data[3]}/></div><div className="movie-vertical movie-vertical-wide">
<HotMovieSub data={_data[2]}/><HotMovieSub data={_data[4]}/></div></aside>)
	}


}

module.exports=HotMovieList;
