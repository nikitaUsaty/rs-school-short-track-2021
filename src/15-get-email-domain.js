/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const at = '@';
  const domain = email.lastIndexOf(at);
  return email.slice([domain + 1]);
}

module.exports = getEmailDomain;
