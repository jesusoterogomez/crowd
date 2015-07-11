// simple-todos.js
Crowd = new Mongo.Collection("crowd");

if (Meteor.isClient) {
  // This code only runs on the client
  Template.list.helpers({
    crowd: function () {
      return Crowd.find({});
    }
  });

	Template.actions.events({
  		"click .create-crowd": function (event) {
    	// This function is called when the new task form is submitted

	    Crowd.insert({
	      name: "New Crowd" + Math.random(999),
	      createdAt: new Date() // current time
	    });

	    // Prevent default form submit
	    return false;
	  }
	});

}