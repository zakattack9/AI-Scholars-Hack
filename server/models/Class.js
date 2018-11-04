const bookshelf = require('./bookshelf');

class Class extends bookshelf.Model {
  get tableName() {
    return 'class';
  }

  get hasTimestamps() {
    return true;
  }
}

module.exports = bookshelf.model('Class', Class);
