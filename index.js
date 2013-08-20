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
  return truthy(typeof data !== 'undefined');
};
