/**
* Bitfield structure implementation
* @copyright  Badescu Theodor <theo@btheo.com>
* @created_at 12/06/2016
*/

var bitField = function(fields) {
 /**
  * This could easily be extended by other classes,
  * but for demo purposes, we are setting the fields
  * to a default 0 value.
  */
  this.fields = fields || 0;
  
  /**
  * Checks if the bit is 1 ( true value )
  */
  this.is = function(field) {
  	return typeof field === "number" ? (this.fields & (1 << field)) !== 0 : 0;
  }
  
  /**
  * Defaultly sets a bit to 1 ( true value )
  */
  this.set = function(field, value) {
    var value = value !== undefined ? value : true;
  	this.fields = (this.fields & ~(1 << field)) | (value << field);
  }
  
  /**
  * Simply calls the set function with a false value
  */
  this.unset = function(field) {
  	return this.set(field, false);
  }
};
