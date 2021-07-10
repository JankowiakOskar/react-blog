const initialState = {
	posts: {
		data: [],
		areLoading: false,
		error: {
			message: "",
		},
	},
	comments: {
		data: [],
		areLoading: false,
		error: {
			message: "",
		},
	},
};

export const blogReducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};
