module.exports = Dashboard;
function Dashboard (){

};

Dashboard.prototype = {
    "@Autowired": ["messageService"],
    
	showDashboard: function( /*@Param*/ name ) /* <% if (restOnly) { %> @POST("/message") @JSON <% } else { %> @GET("/") @POST("/") <% } %>*/{
	   var msg = this.messageService.getMessage(name);
        <% if (restOnly) { %>
            return {message: msg};     
        <% } else { %>
            return {view:'dashboard', model: {message: msg}};     
        <% } %>
	}
    
};
