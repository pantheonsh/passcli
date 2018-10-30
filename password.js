const sqlite = require("better-sqlite3");

class PasswordManager {
    /**
     * @param {String} db_path
     * @param {String} master_key 
     */
    constructor(db_path, master_key) {
        this.db = new sqlite(db_path);
    }

    getAllRecords() {

    }

    getPassword(record_id) {

    }

    newRecord({ name, password }) {
        
    }
}

module.exports = PasswordManager;