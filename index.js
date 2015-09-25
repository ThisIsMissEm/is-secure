module.exports = function isSecure(request) {
  return (
    request.headers['x-forwarded-proto'] === 'https' ||
    request.protocol === 'https' ||
    (request.connection && request.connection.encrypted) ||
    request.secure
  );
};

