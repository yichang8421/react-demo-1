const ajax = (path) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (path === '/user') {
                resolve({
                    id: 1,
                    name: "Andy"
                });
                reject(new Error("no such path"));
            } else if (path === "/books") {
                resolve([
                    {
                        id: 1,
                        name: "JavaScript高级程序设计"
                    },
                    {
                        id: 2,
                        name: "算法"
                    }
                ]);
            } else if (path === "/movies") {
                resolve([
                    {
                        id: 1,
                        name: "肖生克的救赎"
                    },
                    {
                        id: 2,
                        name: "声之形"
                    }
                ]);
            }
        }, 2000);
    });
}

export default ajax;