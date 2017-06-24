class EleveBusiness {
    constructor(layer) {
        this._layer = layer;
    }

    getAll(callback, callbackError) {
        return this._layer.selectAll(callback, callbackError);
    }
}

module.exports = EleveBusiness;