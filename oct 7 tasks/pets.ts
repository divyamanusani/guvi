

class Pet {
    animalType: String;
    animalCount: number;
    constructor(animalType: String, animalCount: number) {
        this.animalType = animalType;
        this.animalCount = animalCount;
    }
}

class petsAvailable {
    petsAvail: Array<Pet> = new Array();
    constructor() {
    }


     insertPets(insPet: Pet[]) {
        this.petsAvail.push(...insPet);
    }
    printAvailStatus() {
        console.log('Pets Available = ');
        for (var i = 0; i < this.petsAvail.length; i++) {
            console.log(this.petsAvail[i].animalType, this.petsAvail[i].animalCount);
        }
        console.log('*******************');
    }

}

class petsRequest {
    petAv: petsAvailable;

    petRequests: Array<Pet> = new Array();
    constructor(petAv: petsAvailable) {
        this.petAv = petAv;
        this.petRequests=[];
    }

    insertPetReq(insReqPet: Pet[]) {
        this.petRequests.push(...insReqPet);
    }

    printReqStatus() {
        console.log('Pets Requested = ')
        for (var i = 0; i < this.petRequests.length; i++) {
            console.log(this.petRequests[i].animalType, this.petRequests[i].animalCount);
        }
        console.log('******************');
    }

    checkMatch() {
        var count = 0;
        for (var i = 0; i < this.petRequests.length; i++) {
            count = 0;
            for (var j = 0; j < this.petAv.petsAvail.length; j++) {
                if (this.petRequests[i].animalType === this.petAv.petsAvail[j].animalType) {
                    if (this.petRequests[i].animalCount <= this.petAv.petsAvail[j].animalCount) {
                        console.log(`${this.petRequests[i].animalCount} ${this.petRequests[i].animalType} are available.`)
                    }
                    else {
                        console.log(`${this.petRequests[i].animalCount} ${this.petRequests[i].animalType} are  not available. Only ${this.petAv.petsAvail[j].animalCount}
                        ${this.petAv.petsAvail[j].animalType} are availble.`);
                    }
                }
                else {
                    count++;
                }

            }
            if (count === this.petAv.petsAvail.length) {
                console.log(`Sorry ${this.petRequests[i].animalType} are not available`);
            }
        }
    }
}

let dogAvail = new Pet('dog', 5);
let catAvail = new Pet('cat', 2);
let monkeyAvail = new Pet('monkey', 1);
let elephantAvail = new Pet('elephant', 4);
let parrotAvail = new Pet('parrot', 2);
let peacockAvail = new Pet('peacock', 10);
let ratsAvail = new Pet('rat', 20);

let dogReq = new Pet('dog', 2);
let catReq = new Pet('cat', 2);
let monkeyReq = new Pet('monkey', 3);
let ParrotReq = new Pet('parrot', 3);
let elephantReq = new Pet('elephant', 2);
let puppyReq = new Pet('puppy', 10);

var availPetsArr = [dogAvail, catAvail, monkeyAvail, elephantAvail, parrotAvail, peacockAvail, ratsAvail];
let requestPetsArr = [dogReq, catReq, monkeyReq, ParrotReq, elephantReq, puppyReq];

let availablepets = new petsAvailable();
availablepets.insertPets(availPetsArr);
availablepets.printAvailStatus();

let requestedPets = new petsRequest(availablepets);
requestedPets.insertPetReq(requestPetsArr);
requestedPets.printReqStatus();

requestedPets.checkMatch();





