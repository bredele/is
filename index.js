/**
 * Expose 'isTruthy'
 */

module.exports.truthy = function(data){
  if(data){
    return true;
  }
  return false;
};


/**
 * Expose 'type'
 */

module.exports.type = function(type, data){
  return (typeof data === type);
};


/**
 * Expose 'isDefined'
 */

module.exports.defined = function(data){
  return this.truthy(!this.type('undefined', data));
};
