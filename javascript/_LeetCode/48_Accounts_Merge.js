/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function (accounts) {
  const parents = {};
  const email2name = {};

  const find = (x) => {
    if (parents[x] !== x) {
      parents[x] = find(parents[x]);
    }
    return parents[x];
  };

  const union = (x, y) => {
    parents[find(x)] = find(y);
  };

  for (const [name, ...emails] of accounts) {
    for (const email of emails) {
      if (!parents[email]) {
        parents[email] = email;
      }
      email2name[email] = name;
      union(email, emails[0]);
    }
  }

  const emails = {};
  for (const email of Object.keys(parents)) {
    const parent = find(email);
    if (parent in emails) {
      emails[parent].push(email);
    } else {
      emails[parent] = [email];
    }
  }

  return Object.entries(emails).map(([email, x]) => [
    email2name[email],
    ...x.sort(),
  ]);
};

/**
 * Solution 1: Union Find + Hash Table
 *
 * Based on the problem description, use a union-find data structure to merge accounts with the same email address.
 *
 * first, iterate through all the accounts. for the ith account, we iterate through all its email addresses. if an email address appears
 * in the hash table d, we use the union-find to merge the account's index i with previously appeared account's index; otherwise we, map this
 * email address to the accounts index i.
 *
 * next, we iterate through all the accounts again. For the ith account, we use the union-find to find it's root node, and then add all the
 * email addresses of that account to the hash table g, where the key is the root node, and the value is the account's email addresses.
 *
 * the time complexity is O(n x logn), and the space complexity is O(n). Here, n is the number of accounts.
 *
 */
