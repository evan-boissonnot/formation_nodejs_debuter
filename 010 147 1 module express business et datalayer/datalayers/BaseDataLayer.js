class BaseDataLayer {
    constructor(config, mysql) {
       this._connection = mysql.createConnection({
            host     : config.notes.database.host,
            user     : config.notes.database.user,
            password : config.notes.database.password,
            database : config.notes.database.name
        });

        this._mysql = mysql;
    }

    get connection() {
        return this._connection;
    }
}

module.exports = BaseDataLayer;