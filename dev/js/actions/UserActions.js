export const validateUser = userData => {
    return dispatch => {
        const url = "http://localhost:3000/user/login";

        fetch(url,
            {
                method: "POST",
                body: JSON.stringify(userData)
            })
            .then(function (res) { return res.json();})
            .then(function (data) { 
                dispatch({
                    type: "VALIDATE_USER_DATA",
                    payload: data
                });
             });
    };
};