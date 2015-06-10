function getShortMessages(messages) {
  return messages.filter(function(el) {
    return el.message.length < 50;
  }).map(function(obj) {
    return obj.message;
  });
}

module.exports = getShortMessages
