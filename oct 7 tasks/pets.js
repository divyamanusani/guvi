var Pet = /** @class */ (function () {
    function Pet(animalType, animalCount) {
        this.animalType = animalType;
        this.animalCount = animalCount;
    }
    return Pet;
}());
var petsAvailable = /** @class */ (function () {
    function petsAvailable() {
        this.petsAvail = new Array();
    }
    petsAvailable.prototype.insertPets = function (insPet) {
        var _a;
        (_a = this.petsAvail).push.apply(_a, insPet);
    };
    petsAvailable.prototype.printAvailStatus = function () {
        console.log('Pets Available = ');
        for (var i = 0; i < this.petsAvail.length; i++) {
            console.log(this.petsAvail[i].animalType, this.petsAvail[i].animalCount);
        }
        console.log('*******************');
    };
    return petsAvailable;
}());
var petsRequest = /** @class */ (function () {
    function petsRequest(petAv) {
        this.petRequests = new Array();
        this.petAv = petAv;
        this.petRequests = [];
    }
    petsRequest.prototype.insertPetReq = function (insReqPet) {
        var _a;
        (_a = this.petRequests).push.apply(_a, insReqPet);
    };
    petsRequest.prototype.printReqStatus = function () {
        console.log('Pets Requested = ');
        for (var i = 0; i < this.petRequests.length; i++) {
            console.log(this.petRequests[i].animalType, this.petRequests[i].animalCount);
        }
        console.log('******************');
    };
    petsRequest.prototype.checkMatch = function () {
        // this.petAv.petsAvail[];
        // this.petRequests[];
        var count = 0;
        for (var i = 0; i < this.petRequests.length; i++) {
            count = 0;
            for (var j = 0; j < this.petAv.petsAvail.length; j++) {
                if (this.petRequests[i].animalType === this.petAv.petsAvail[j].animalType) {
                    console.log(this.petRequests[i].animalType, this.petRequests[i].animalCount);
                    console.log(this.petAv.petsAvail[j].animalType, this.petAv.petsAvail[j].animalCount);
                    if (this.petRequests[i].animalCount <= this.petAv.petsAvail[j].animalCount) {
                        console.log(this.petRequests[i].animalCount + " " + this.petRequests[i].animalType + " are available.");
                    }
                    else {
                        console.log(this.petRequests[i].animalCount + " " + this.petRequests[i].animalType + " are  not available. Only " + this.petAv.petsAvail[j].animalCount + "\n                        " + this.petAv.petsAvail[j].animalType + " are availble.");
                    }
                }
                else {
                    count++;
                }
            }
            if (count === this.petAv.petsAvail.length) {
                console.log("Sorry " + this.petRequests[i].animalType + " are not available");
            }
        }
    };
    return petsRequest;
}());
var dogAvail = new Pet('dog', 5);
var catAvail = new Pet('cat', 2);
var monkeyAvail = new Pet('monkey', 1);
var elephantAvail = new Pet('elephant', 4);
var parrotAvail = new Pet('parrot', 2);
var peacockAvail = new Pet('peacock', 10);
var ratsAvail = new Pet('rat', 20);
var dogReq = new Pet('dog', 2);
var catReq = new Pet('cat', 2);
var monkeyReq = new Pet('monkey', 3);
var ParrotReq = new Pet('parrot', 3);
var elephantReq = new Pet('elephant', 2);
var puppyReq = new Pet('puppy', 10);
var availPetsArr = [dogAvail, catAvail, monkeyAvail, elephantAvail, parrotAvail, peacockAvail, ratsAvail];
var requestPetsArr = [dogReq, catReq, monkeyReq, ParrotReq, elephantReq, puppyReq];
var availablepets = new petsAvailable();
availablepets.insertPets(availPetsArr);
availablepets.printAvailStatus();
var requestedPets = new petsRequest(availablepets);
requestedPets.insertPetReq(requestPetsArr);
requestedPets.printReqStatus();
requestedPets.checkMatch();
