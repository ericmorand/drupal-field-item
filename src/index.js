const Attributes = require('drupal-attribute');

class DrupalFieldItem {
  constructor() {
    this.attributes = new Attributes();
    this.content = null;
  }
}

module.exports = DrupalFieldItem;