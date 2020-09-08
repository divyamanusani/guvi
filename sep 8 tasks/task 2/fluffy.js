var cat = {
    name: 'Fluffy',
    activities: ['play', 'eat cat food'],
    catFriends: [
        {
            name: 'bar',
            activities: ['be grumpy', 'eat bread omblet'],
            weight: 8,
            furcolor: 'white'
        },
        {
            name: 'foo',
            activities: ['sleep', 'pre-sleep naps'],
            weight: 3
        }
    ]
}

// Add height and weight to Fluffy
cat.height = '1.5ft';
cat.weight = '10kg';
console.log(cat);

// Fluffy name is spelled wrongly. Update it to Fluffyy
cat.name = 'Fluffyy';
console.log('cat name updated to ',cat.name);

//List all the activities of Fluffyy's catFriends.
cat.catFriends.forEach((cats) => {
    console.log(cat.name, 's friend ', cats.name, ' activities are ', cats.activities.join(','));
});

// Print the catFriends names.
cat.catFriends.forEach((catName) => {
    console.log(catName.name);
});

// Print the total weight of catFriends
var tot_weight = 0;
cat.catFriends.forEach((cats) => {
    tot_weight += cats.weight;
});
console.log('Total weight of cat friends ', tot_weight);


// Print the total activities of all cats.
var activities_count=0;
cat.catFriends.forEach((cats)=>{
    activities_count+=cats.activities.length;
})
activities_count+=cat.activities.length;
console.log('total activities=',activities_count);


// Add 2 more activities to bar & foo cats
cat.catFriends[0].activities.push('meowing','playing_ball');
cat.catFriends[1].activities.push('purring','peeing');c

//Update the fur color of bar
cat.catFriends[0].furcolor='grey';
console.log(cat);





