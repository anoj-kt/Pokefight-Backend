module.exports.asyncWrapper = function asyncWrapper(func) { 
  return (req,res,next) => {
    return func(req,res).catch(next);
  }
}