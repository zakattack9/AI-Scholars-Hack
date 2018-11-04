const bookshelf = require('./bookshelf');

class Stats extends bookshelf.Model {
  get tableName() {
    return 'stats';
  }

  get hasTimestamps() {
    return true;
  }
}

module.exports = bookshelf.model('Stats', Stats);
