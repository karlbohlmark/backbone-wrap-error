module.exports = function backboneWrapError(onError, originalModel, options) {
  return function(model, resp) {
    resp = model === originalModel ? resp : model;
    if (onError) {
      onError(originalModel, resp, options);
    } else {
      originalModel.trigger('error', originalModel, resp, options);
    }
  };
};