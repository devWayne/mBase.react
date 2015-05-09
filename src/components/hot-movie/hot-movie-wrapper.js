var HotMovieList=require('./hot-movie-list-test');
var DPApp = require("dpapp");
var $=require("zepto");
class HotMovieWrapper extends  React.Component {
         constructor(props) {
             super(props);
             this.state = {
                 data: {
			 List: [{Movie:{}},{Movie:{}},{Movie:{}},{Movie:{}},{Movie:{}}]
                 }
             };
         }
         componentDidMount() {
	     var self=this;
             DPApp.getCityId({
                 success: function(e) {
                     DPApp.ajax({
                         url: self.props.url,
                         data: {
                             "source":"eftemain",
			     "filter":1,
			     "limit":5,
			     "start":0,
			     "cityid":e.cityId
                         },
                         keys: [
                             "List",
			     "PreSale",
			     "FavCount",
			     "IsGoToMovieDetail",
			     "MinPrice",
			     "ShowCountForToday",
			     "CinemaCountForToday",
			     "Movie",
			     "Flag",
			     "Info",
			     "HasMovieShow",
			     "Name",
			     "LargeImage",
			     "Grade",
			     "Image"
                         ],
                         success: function(data) {
                             self.setState({
                                 data: data
                             });
                         }
                     })

                 }
             })
         }
	
	 scaleFix(){
		var bigItem=$('.big.item img'),
    		smallItem=$('.small.item img');
		var SCALE = 208/148;
		bigItem.height(bigItem.width()*SCALE);
		smallItem.height(smallItem.width()*SCALE);
	}

	render(){
		var Lists = this.state.data.List;
		this.scaleFix();
		var bigItem=document.querySelector('.big.item img'),
		smallItem=document.querySelector('.small.item img');

		return (  <section className="section nav-lay">

			<div className="navbar b-line J_native_url J_ga" data-ga="movie5_newmain_allmovies" data-url="dianping://movielist">热映电影<span className="look-all">全部<span className="arrow-ent right"></span></span></div>
			
<HotMovieList data={Lists}/>
			</section>)
	}

}

module.exports = HotMovieWrapper;

