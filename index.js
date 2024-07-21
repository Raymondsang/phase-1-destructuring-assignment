const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};


const [moo, neigh, baa, oink, cluck] = farmAnimals.split(' ');
console.log(moo, neigh, baa, oink, cluck);




const [bessie, , dolly, babe, little] = farmAnimals.split(' ');
console.log(bessie, dolly, babe, little);



const [blackAndWhite, , black, pink] = farmAnimals.split(' ');
console.log(blackAndWhite, black, pink);




const [r, o, y, g, b, indg, v] = colors;
console.log(r, o, y, g, b, indg, v);


const [red, orange, yellow, green, blue, indigo, violet] = colors;
console.log('colors'); 


const [r1, o1, y1, g1, b1, , v1] = colors;
console.log(r1, o1, y1, g1, b1, v1);


const [, , , , , indg1] = colors;
console.log(indg1);



const { muppetName, color, song, job, partner } = muppet;
console.log(muppetName, color, song, job, partner);

const {
  album: {
    theMuppetMovie: { song2, song4 }
  },
  nestedJob,
  nestedPartner
} = nestedMuppet;

console.log(song2, song4, nestedJob, nestedPartner);