type tvStatus = "on" | "ON" | 'OFF' | "of";

let channelNums = {
    0: "videoFiles/sample.mp4",
    1: "videoFiles/sin.mp4",
    2: "videoFiles/sintel.mp4",
    3: "videoFiles/video1.mp4",
    4: "videoFiles/video2.mp4",
    5: "videoFiles/video3.mp4",
    6: "videoFiles/video4.mp4",
    7: "videoFiles/video5.mp4",
    8: "videoFiles/video6.mp4",
    9: "videoFiles/video7.mp4",
    10: "videoFiles/video8.mp4",
    11: "videoFiles/video9.mp4",
    12: "videoFiles/video11.mp4",
    13: "videoFiles/sample.mp4",
    14: "videoFiles/sin.mp4",
    15: "videoFiles/sintel.mp4",
    16: "videoFiles/video1.mp4",
    17: "videoFiles/video2.mp4",
    18: "videoFiles/video3.mp4",
    19: "videoFiles/video4.mp4",
    20: "videoFiles/video5.mp4",
    21: "videoFiles/video6.mp4",
    22: "videoFiles/video7.mp4",
    23: "videoFiles/video8.mp4",
    24: "videoFiles/video9.mp4",
    25: "videoFiles/video11.mp4",
    26: "videoFiles/sample.mp4",
    27: "videoFiles/sin.mp4",
    28: "videoFiles/sintel.mp4",
    29: "videoFiles/video1.mp4",
    30: "videoFiles/video2.mp4",
    31: "videoFiles/video3.mp4",
    32: "videoFiles/video4.mp4",
    33: "videoFiles/video5.mp4",
    34: "videoFiles/video6.mp4",
    35: "videoFiles/video7.mp4",
    36: "videoFiles/video8.mp4",
    37: "videoFiles/video9.mp4",
    38: "videoFiles/video11.mp4",
    39: "videoFiles/sample.mp4",
    40: "videoFiles/sin.mp4",
    41: "videoFiles/sintel.mp4",
    42: "videoFiles/video1.mp4",
    43: "videoFiles/video2.mp4",
    44: "videoFiles/video3.mp4",
    45: "videoFiles/video4.mp4",
    46: "videoFiles/video5.mp4",
    47: "videoFiles/video6.mp4",
    48: "videoFiles/video7.mp4",
    49: "videoFiles/video8.mp4",
    50: "videoFiles/video9.mp4"
}

let playmedia = 1;
let powerBtn = 1;
interface tvDetails {
    size: string;
    energyUsage: string;
    refreshRate: number;
    backLight: string;
}


class TV {
    extraDetails: tvDetails;
    brand: string;
    channel: number;
    price: number;
    inches: number;
    onOffStatus: tvStatus;
    volume: number;
    constructor(moreFeatues: tvDetails, brand: string) {


        this.extraDetails = moreFeatues;
        this.brand = brand;
        this.channel = 1;
        this.volume = 50;
        console.log(this.volume);
        console.log(this.channel);


        (<HTMLButtonElement>document.getElementById('reset')).onclick = this.resetTV();
        (<HTMLButtonElement>document.querySelector('#channelInc')).onclick = this.channelInc();
        (<HTMLButtonElement>document.querySelector('#channelDec')).onclick = this.channelDec();
        (<HTMLButtonElement>document.querySelector('#volumeInc')).onclick = this.increaseVolume();
        (<HTMLButtonElement>document.querySelector('#volumeDec')).onclick = this.decreaseVolume();
        for (var index = 0; index <= 9; index++) {
            (<HTMLButtonElement>document.querySelector('#channel' + index)).onclick = this.setChannels(index);
        }
       


    }
    setChannels(chan: number): () => void {
        return () => {
            this.setChannel(chan);
        }
    }
    increaseVolume(): () => void {
        return () => {
            if (this.volume < 100) {
                this.setVolume(this.volume + 1);
                this.getMovieInfo();
            }
            else {
                console.log('Sorry highest volume');
            }

        }

    }

    decreaseVolume(): () => void {
        return () => {
            if (this.volume > 0) {
                this.setVolume(this.volume - 1);
                this.getMovieInfo();
            }
            else {
                console.log('Sorry least volume');
            }

        }

    }
    channelInc(): () => void {
        return () => {
            if (this.channel < 50) {
                this.setChannel(this.channel + 1);
                this.getMovieInfo();
            }
            else {
                console.log('only 100 channels available');
            }

        }

    }
    channelDec(): () => void {
        return () => {
            if (this.channel > 0) {
                this.setChannel(this.channel - 1);
                this.getMovieInfo();
            }
            else {
                console.log('no channel');
            }

        }

    }

    setVolume(volumeNum: number) {
        if (volumeNum >= 0 && volumeNum <= 100) {
            this.volume = volumeNum;
        }
        var iframe = (<HTMLIFrameElement>document.getElementsByTagName("iframe")[0]);
        (<HTMLVideoElement>iframe.contentWindow.document.body.getElementsByTagName('video')[0]).volume = this.volume / 100;
        this.getMovieInfo();
    }

    setChannel(channel: number) {
        if (channel >= 0 && channel <= 50) {
            this.channel = channel;
        }
        var iframe = (<HTMLIFrameElement>document.getElementsByTagName("iframe")[0]);
        iframe.src = channelNums[this.channel];
        console.log(this.channel);
        console.log(channelNums[this.channel]);
        this.getMovieInfo();
    }

    resetTV(): () => void {
        return () => {
            this.setVolume(50);
            this.setChannel(1);
            this.getMovieInfo();
        }
    }

    getMovieInfo() {
        var para = (<HTMLParagraphElement>document.getElementById('movieInfo'));
        para.innerHTML = `${this.brand} TV at Channel ${this.channel}, volume ${this.volume}`;
    }

}

class LED extends TV {
    constructor(tvDetails: tvDetails, brand: string) {
        super(tvDetails, brand);
    }
    getAdditionalFeature() {
        console.log("Thickness: " + this.extraDetails.size);
        console.log("Energy Usage: " + this.extraDetails.energyUsage);
        console.log("Refresh rate: " + this.extraDetails.refreshRate);
        console.log("Back Light: " + this.extraDetails.backLight);
    }

}

class Plasma extends TV {
    constructor(tvDetails: tvDetails, brand: string) {
        super(tvDetails, brand);
    }
    getAdditionalFeature() {
        console.log("Thickness: " + this.extraDetails.size);
        console.log("Energy Usage: " + this.extraDetails.energyUsage);
        console.log("Refresh rate: " + this.extraDetails.refreshRate);
        console.log("Back Light: " + this.extraDetails.backLight);
    }
}


let changetoled = () => {

    var ledStyle = (<HTMLIFrameElement>document.getElementsByTagName('iframe')[0]);
    ledStyle.id = "ledframe";

}

let changetoplasma = () => {
    var plasmaStyle = (<HTMLIFrameElement>document.getElementsByTagName('iframe')[0]);
    plasmaStyle.id = "plasmaframe";
}

let playPause = () => {
    playmedia++;

    var iframe = (<HTMLIFrameElement>document.getElementsByTagName("iframe")[0]);
    if (playmedia % 2 == 0)
        iframe.contentWindow.document.body.getElementsByTagName('video')[0].play();
    else
        iframe.contentWindow.document.body.getElementsByTagName('video')[0].pause();

};

let powerOnOff = () => {
    powerBtn++;
    if (powerBtn % 2 === 0) {
        document.getElementsByTagName('iframe')[0].src = "";
    }
    else {
        document.getElementsByTagName('iframe')[0].src = "videoFiles/sample.mp4";
    }
}



let sony = new TV({
    size: 'xs',
    energyUsage: 'moderate',
    refreshRate: 2,
    backLight: 'yes'
}, 'panasonic');



