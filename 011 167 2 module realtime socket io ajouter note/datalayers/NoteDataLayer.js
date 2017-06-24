const BaseDataLayer = require('./BaseDataLayer.js');

class NoteDataLayer extends BaseDataLayer {
    constructor(config, mysql) {
       super(config, mysql);
    }

    addOne(note) {

    }
}

module.exports = NoteDataLayer;