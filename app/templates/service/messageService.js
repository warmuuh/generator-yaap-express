module.exports = MessageService;
function MessageService (){

};

MessageService.prototype = {
	init: function() /* @PostConstruct */{
		console.log("Fetching all messages from DB");
	},
    getMessage: function( /*@Default("World")*/ name ) {
		return "Hello " + name + "!";
	}
};
