module.exports = Dashboard;
function Dashboard (){

};

Dashboard.prototype = {
	showDashboard: function() /* @GET("/")*/{
		return {view:'dashboard', model: {message: "Hello World!"}};
	},
    showGreets: function( name ) /* @POST("/") @Param*/{
		return {view:'dashboard', model: {message: "Hello " + name + "!"}};
	}
};
