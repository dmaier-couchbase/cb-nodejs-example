var HOST = '192.168.7.183';
var BUCKET = 'demo';
var PWD = 'test';

var couchbase = require('couchbase');
var _cluster = new couchbase.Cluster('couchbase://' + HOST);
var _bucket;


module.exports = {

   connect : function(success) {

     _bucket =  _cluster.openBucket(BUCKET, PWD, function (err) {
	 
	     if (err) {
		     console.log('ERR: Could not connect to the bucket', err);
	     }
	     else {

		success();
	     }   
     });

     return _bucket;
   },

   bucket : function() {
       
     return _bucket;	
   }	
};

