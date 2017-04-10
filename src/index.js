const Attributes = require('drupal-attribute');

class DrupalFieldItem {
  constructor(content) {
    this.attributes = new Attributes();
    this.content = content;
  }
}

module.exports = DrupalFieldItem;