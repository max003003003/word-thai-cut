const app = angular.module('App',['firebase'])

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
        })
   })
    //$scope.$apply()
 }

 $scope.offline = function() {
   console.log('offline')

   $firebase.offline();
 }

 $scope.setData = function(){
   const obj = {
      n: $scope.note,
      d: moment.now(),
      t: ''
      
   }
   
  console.log(obj)
   $firebase.set(obj)
 }
   
}])

