const user = { id: 10, name: 'Ugur' };
const friends = [{ id: 11, name: 'Ali' }, { id: 12, name: 'Veli' }];

const getUser = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(user);
        }, 500);
    });
};

const getFrinend = (userId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(friends);
        }, 1000);
    });
}

let ClientAuth;
getUser().then(function(user){
    ClientAuth=user.id;
    getFrinend(ClientAuth).then(function(friends)
    {
        console.log(friends);
    })
})