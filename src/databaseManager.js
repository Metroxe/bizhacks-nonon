const Session = require("session");
class DatabaseManager {
	static instance;
	sessionArr;

	constructor() {
		this.sessionArr = [];
	}

	getInstance() {
		if (!DatabaseManager.instance) {
			DatabaseManager.instance = new DatabaseManager();
		}
		return DatabaseManager.instance;
	}

	createSession() {
		const session = new Session();
		this.sessionArr.push(session);
		return session;
	}

	getSession(id) {
		for(let session of this.sessionArr) {
			if (session.customerCode === id || session.adminCode === id) {
				return session;
			}
		}
		return undefined;
	}
}