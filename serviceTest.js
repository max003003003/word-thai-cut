const app = angular.module('App',['firebase'])
let simple 

let db =new PouchDB('fibaseTest' )

  db.info().then((info) =>{
    console.log(info);
  })


db.get('mittens').then(function (doc) {
 simple = doc
});

app.service('$firebase', ['firebase',function(firebase) {
  const config = {
    apiKey: "AIzaSyCDYXgsOs-n1dUgsKJ16-E7Hcm6UbNIgkg",
    authDomain: "hallo-42e85.firebaseapp.com",
    databaseURL: "https://hallo-42e85.firebaseio.com",
    storageBucket: "hallo-42e85.appspot.com",
    messagingSenderId: "899590444510"
  };
  firebase.initializeApp(config);
  
 
  
 this.signIn = function(email, password) {
     return firebase.auth().signInWithEmailAndPassword(email,password)
      
 }

 this.signUp = function( email, password) {
   return firebase.auth().createUserWithEmailAndPassword(email,password)
     
 }


 this.loginWithGmail = function(email,password) {
   // not implement
 }
 
 

 
 this.resetPassword= function(email) {
   const auth = firebase.auth()
   return auth.sendPasswordResetEmail(email) 
 }

 this.getCurrentUser = function() {
   var user = firebase.auth().currentUser;
  if (user) {
    return user
  } else {
   
  }
 }
 this.signOut = function() {
 return firebase.auth().signOut() 

 }

 this.push = function(obj) {   
   obj.t=firebase.database.ServerValue.TIMESTAMP    
   return firebase.database().ref('note/'+this.getCurrentUser().uid).push(obj)
     
 }

  this.set = function(obj) {   
   obj.t=firebase.database.ServerValue.TIMESTAMP    
  return  firebase.database().ref('note/'+this.getCurrentUser().uid).set(obj)
    
 }

  
 this.readonce = function() {    
   return  firebase.database().ref('note/'+this.getCurrentUser().uid).once('value')  
 }

this.offline = function() {
   var myConnectionsRef = firebase.database().ref('users/joe/connections');

// stores the timestamp of my last disconnect (the last time I was seen online)
var lastOnlineRef = firebase.database().ref('users/joe/lastOnline');

var connectedRef = firebase.database().ref('.info/connected');
connectedRef.on('value', function(snap) {
  if (snap.val() === true) {
    // We're connected (or reconnected)! Do anything here that should happen only if online (or on reconnect)

    // add this device to my connections list
    // this value could contain info about the device or a timestamp too
    var con = myConnectionsRef.push(true);

    // when I disconnect, remove this device
    con.onDisconnect().remove();

    // when I disconnect, update the last time I was seen online
    lastOnlineRef.onDisconnect().set(firebase.database.ServerValue.TIMESTAMP);
    lastOnlineRef.onDisconnect().set({"n":'somethidng'});
  }
});
}
  
 
}])
 
 
app.controller('submit',['$scope', '$firebase',  function($scope , $firebase ){
 
    $scope.notes=[]
    $scope.note=''
    $scope.email=''
    $scope.password=''
    $scope.login = function(){      
       $firebase.signIn($scope.email,$scope.password)
     }

   $scope.signUp= function() {
 
       $firebase.signup($scope.email,$scope.password)
   }

   $scope.sigIn = function() {

   }
   $scope.signInWithEmail= function() {
     $firebase.signIn($scope.email,$scope.password)

   }
  $scope.resetPassword = function() {
   $firebase.resetPassword($scope.email)
  }
    
  $scope.getUID = function() {
   
   console.log($firebase.getCurrentUser().uid)
 }

 $scope.pullNote = function() {
   $firebase.readonce().then((res)=>{      
        $scope.$apply( function(){
          $scope.notes=res.val()
          console.log(res.val())
          
        })
   })
 
 }

 $scope.offline = function() {
   console.log('offline')

   $firebase.offline();
 }

//  $scope.setData = function(){
    
//    firebase.database().ref('pouch/'+$firebase.getCurrentUser().uid).set(simple).then((re)=>{
//      console.log(re)
//    })
//    }

$scope.mockingdata = function() {
  console.log("Mocking")
  //  for(let i = 0;i<10;i++)
  //  {
  //    db.put({_id:i.toString() ,"v":i})
  //  }

  //  for(let i =0;i<10;i++)
  //  {
  //    db.get(i.toString()).then((res)=>{
  //      console.log(res)
  //    })
  //  }
   firebase.database().ref('note/'+$firebase.getCurrentUser().uid).once('value').then((res)=>{
       var changes = db.changes({
  since: 'now',
  live: true,
  include_docs: true
}).on('change', function(change) {
  // handle change
}).on('complete', function(info) {
  // changes() was canceled
}).on('error', function (err) {
  console.log(err);
});

            
        // console.log(res.val())
        // const obj ={ "_id":$firebase.getCurrentUser().uid+"125" ,"v":res.val() }
        
        //   db.put(obj).then((res)=>{
        //      console.log('finished')
        //    })
     
          
 })  

 

}
$scope.setData = function() {
   
  
   firebase.database().ref('pouch/'+$firebase.getCurrentUser().uid).once('value').then((res)=>{
     console.log(res.val())
     //db.put(res.val())
     db.get('mittens').then((info) =>{
   console.log(info);
 })

   })
 

   
}
   
 
   
}])

console.log(moment.TIMESTAMP)
