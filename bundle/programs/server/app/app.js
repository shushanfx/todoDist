var require = meteorInstall({"imports":{"api":{"tasks.js":["meteor/meteor","meteor/mongo","meteor/check",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/api/tasks.js                                                                                              //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
module.export({Tasks:function(){return Tasks}});var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});var Mongo;module.import('meteor/mongo',{"Mongo":function(v){Mongo=v}});var check;module.import('meteor/check',{"check":function(v){check=v}});
                                                                                                                     // 2
                                                                                                                     // 3
                                                                                                                     //
var Tasks = new Mongo.Collection('tasks');                                                                           // 5
                                                                                                                     //
Meteor.methods({                                                                                                     // 7
  'tasks.insert': function () {                                                                                      // 8
    function tasksInsert(text) {                                                                                     // 7
      check(text, String);                                                                                           // 9
                                                                                                                     //
      // Make sure the user is logged in before inserting a task                                                     // 11
      if (!this.userId) {                                                                                            // 12
        throw new Meteor.Error('not-authorized');                                                                    // 13
      }                                                                                                              // 14
                                                                                                                     //
      Tasks.insert({                                                                                                 // 16
        text: text,                                                                                                  // 17
        createdAt: new Date(),                                                                                       // 18
        owner: this.userId,                                                                                          // 19
        username: Meteor.users.findOne(this.userId).username                                                         // 20
      });                                                                                                            // 16
    }                                                                                                                // 22
                                                                                                                     //
    return tasksInsert;                                                                                              // 7
  }(),                                                                                                               // 7
  'tasks.remove': function () {                                                                                      // 23
    function tasksRemove(taskId) {                                                                                   // 7
      check(taskId, String);                                                                                         // 24
                                                                                                                     //
      Tasks.remove(taskId);                                                                                          // 26
    }                                                                                                                // 27
                                                                                                                     //
    return tasksRemove;                                                                                              // 7
  }(),                                                                                                               // 7
  'tasks.setChecked': function () {                                                                                  // 28
    function tasksSetChecked(taskId, setChecked) {                                                                   // 7
      check(taskId, String);                                                                                         // 29
      check(setChecked, Boolean);                                                                                    // 30
                                                                                                                     //
      Tasks.update(taskId, { $set: { checked: setChecked } });                                                       // 32
    }                                                                                                                // 33
                                                                                                                     //
    return tasksSetChecked;                                                                                          // 7
  }()                                                                                                                // 7
});                                                                                                                  // 7
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},"server":{"main.js":["meteor/meteor","../imports/api/tasks.js",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// server/main.js                                                                                                    //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});module.import('../imports/api/tasks.js');
                                                                                                                     // 2
                                                                                                                     //
Meteor.startup(function () {                                                                                         // 4
  // code to run on server at startup                                                                                // 5
});                                                                                                                  // 6
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},{"extensions":[".js",".json"]});
require("./server/main.js");
//# sourceMappingURL=app.js.map
