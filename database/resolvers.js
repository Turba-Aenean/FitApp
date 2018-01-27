module.exports = {
	Query: {
		loginUser: (parent, { username, password }, db) => {
			return db.loginUser(username, password);
		},
		getExercisePlans: (parent, { id, type }, db) => {
			return db.getExercisePlans(id, type);
		},
		getDietPlans: (parent, { id, type }, db) => {
			return db.getDietPlans(id, type);
		},
		getSpotters: (parent, { id, type }, db) => {
			return db.getSpotters(id, type);
		},
		getDailyRecords: (parent, {id}, db) => {
			return db.getDailyRecords(id);
		},
		getPersonalRecord: (parent, {id}, db) => {
			return db.getPersonalRecord(id);
		},

	},

	Mutation: {
		setUser: (parent, obj, db) => {
			return db.setUser(obj);
		}
	},

	Diet_Plan: {
		client: (parent, args, db) => {
			console.log(parent)
			return db.getUserByID(parent.client_id);
		},

		trainer: (parent, args, db) => {
			console.log(parent)
			return db.getUserByID(parent.trainer_id);
		}
	},

	Exercise_Plan: {
		client: (parent, args, db)=>{
			return db.getUserByID(parent.client_id)
		},
		trainer: (parent, args, db) =>{
			return db.getUserByID(parent.trainer_id)
		}
	},

	Spotter: {
		client: (parent, args, db)=>{
			return db.getUserByID(parent.client_id)
		},
		trainer: (parent, args, db)=>{
			return db.getUserByID(parent.trainer_id)
		}
	},

	Daily_Record:{
		user:(parent, args, db)=>{
			return db.getUserByID(parent.user_id)
		}
	},

	Personal_Record:{
		user: (parent, args, db)=> {
			return db.getUserByID(parent.user_id);
		}
	}
}
