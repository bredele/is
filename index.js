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
 * Expose 'isDefined'
 */

module.exports.defined = function(data){
  console.log(this);
  return this.truthy(typeof data !== 'undefined');
};
