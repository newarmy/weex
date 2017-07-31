let api = {
    getAll: function(cb) {
        setTimeout(function () {
            let arr1 = [
                {id: 0, name: '产品1', num: 20},
                {id: 1, name: '产品1', num: 20},
                {id: 2, name: '产品1', num: 10},
                {id: 3, name: '产品1', num: 120},
                {id: 4, name: '产品1', num: 210},
                {id: 5, name: '产品1', num: 220},
                {id: 6, name: '产品1', num: 20222},
                {id: 7, name: '产品1', num: 203},
                {id: 8, name: '产品1', num: 202}
            ];
            cb(arr1);
        }, 2000)
    },
	login: function(obj, cb) {
		setTimeout(function() {
			if(obj.name && obj.pwd) {
				cb(true);
			} else {
				cb(false);
			}
		}, 1000);
	}
};

export  default  api;