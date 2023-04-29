let users = [
{ 
        username: "David",
        email: "david@frontend",
        password: "test123",
        subcriptionsStatus: "VIP",
        discordId: "Mitri#001",
        lessonsCompleted: [0, 1],
},
{
    username: "Mitri",
    email: "mitri@frontend",
    subcriptionsStatus: "vip",
    discordId: "Mitri#001",
    lessonsCompleted: [0,1,2,3],
}

]
console.log(users[0].lessonsCompleted.map(elem => elem * 2));
