const os = require("os");
const path = require("path");
const sanitize_filename = require("sanitize-filename");

const Manager = require("./password");
const current_user = os.userInfo().username;
const db_path = path.join("./", "users", sanitize_filename(current_user));