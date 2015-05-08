class HotMovieSub extends  React.Component {

	render()
	{
	var data=this.props.data;
	
	if (data.Flag) {
	var classString = 'movie-flag ',
	flagName = (parseInt(data.Flag) & 2) ? "promo" :
		(parseInt(data.Flag) & 4) ? "sold" : false;
	 	if(flagName){
    		classString += flagName;
		var Flag=<div className={classString}></div>
		}
  	}
	return (<div  className="J_native_url J_ga small item" data-ga="movie5_newmain_hotmovie"  data-ga-value="" data-ga-label=""  data-url="">
		{Flag}
                 <div className="block-bg">
            <span className="">{data.Movie.Name}
	    </span>
		<strong className="num">{data.Movie.Grade}</strong>
		</div>
        	<div className="image"><img src={data.Movie.Image}/></div>
    		</div>)
 	}
}

module.exports=HotMovieSub;
