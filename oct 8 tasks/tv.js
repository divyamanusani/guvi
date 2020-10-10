var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var channelNums = {
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
};
var playmedia = 1;
var powerBtn = 1;
var TV = /** @class */ (function () {
    function TV(moreFeatues, brand) {
        this.extraDetails = moreFeatues;
        this.brand = brand;
        this.channel = 1;
        this.volume = 50;
        console.log(this.volume);
        console.log(this.channel);
        document.getElementById('reset').onclick = this.resetTV();
        document.querySelector('#channelInc').onclick = this.channelInc();
        document.querySelector('#channelDec').onclick = this.channelDec();
        document.querySelector('#volumeInc').onclick = this.increaseVolume();
        document.querySelector('#volumeDec').onclick = this.decreaseVolume();
        for (var index = 0; index <= 9; index++) {
            document.querySelector('#channel' + index).onclick = this.setChannels(index);
        }
    }
    TV.prototype.setChannels = function (chan) {
        var _this = this;
        return function () {
            _this.setChannel(chan);
        };
    };
    TV.prototype.increaseVolume = function () {
        var _this = this;
        return function () {
            if (_this.volume < 100) {
                _this.setVolume(_this.volume + 1);
                _this.getMovieInfo();
            }
            else {
                console.log('Sorry highest volume');
            }
        };
    };
    TV.prototype.decreaseVolume = function () {
        var _this = this;
        return function () {
            if (_this.volume > 0) {
                _this.setVolume(_this.volume - 1);
                _this.getMovieInfo();
            }
            else {
                console.log('Sorry least volume');
            }
        };
    };
    TV.prototype.channelInc = function () {
        var _this = this;
        return function () {
            if (_this.channel < 50) {
                _this.setChannel(_this.channel + 1);
                _this.getMovieInfo();
            }
            else {
                console.log('only 100 channels available');
            }
        };
    };
    TV.prototype.channelDec = function () {
        var _this = this;
        return function () {
            if (_this.channel > 0) {
                _this.setChannel(_this.channel - 1);
                _this.getMovieInfo();
            }
            else {
                console.log('no channel');
            }
        };
    };
    TV.prototype.setVolume = function (volumeNum) {
        if (volumeNum >= 0 && volumeNum <= 100) {
            this.volume = volumeNum;
        }
        var iframe = document.getElementsByTagName("iframe")[0];
        iframe.contentWindow.document.body.getElementsByTagName('video')[0].volume = this.volume / 100;
        this.getMovieInfo();
    };
    TV.prototype.setChannel = function (channel) {
        if (channel >= 0 && channel <= 50) {
            this.channel = channel;
        }
        var iframe = document.getElementsByTagName("iframe")[0];
        iframe.src = channelNums[this.channel];
        console.log(this.channel);
        console.log(channelNums[this.channel]);
        this.getMovieInfo();
    };
    TV.prototype.resetTV = function () {
        var _this = this;
        return function () {
            _this.setVolume(50);
            _this.setChannel(1);
            _this.getMovieInfo();
        };
    };
    TV.prototype.getMovieInfo = function () {
        var para = document.getElementById('movieInfo');
        para.innerHTML = this.brand + " TV at Channel " + this.channel + ", volume " + this.volume;
    };
    return TV;
}());
var LED = /** @class */ (function (_super) {
    __extends(LED, _super);
    function LED(tvDetails, brand) {
        return _super.call(this, tvDetails, brand) || this;
    }
    LED.prototype.getAdditionalFeature = function () {
        console.log("Thickness: " + this.extraDetails.size);
        console.log("Energy Usage: " + this.extraDetails.energyUsage);
        console.log("Refresh rate: " + this.extraDetails.refreshRate);
        console.log("Back Light: " + this.extraDetails.backLight);
    };
    return LED;
}(TV));
var Plasma = /** @class */ (function (_super) {
    __extends(Plasma, _super);
    function Plasma(tvDetails, brand) {
        return _super.call(this, tvDetails, brand) || this;
    }
    Plasma.prototype.getAdditionalFeature = function () {
        console.log("Thickness: " + this.extraDetails.size);
        console.log("Energy Usage: " + this.extraDetails.energyUsage);
        console.log("Refresh rate: " + this.extraDetails.refreshRate);
        console.log("Back Light: " + this.extraDetails.backLight);
    };
    return Plasma;
}(TV));
var changetoled = function () {
    var ledStyle = document.getElementsByTagName('iframe')[0];
    ledStyle.id = "ledframe";
};
var changetoplasma = function () {
    var plasmaStyle = document.getElementsByTagName('iframe')[0];
    plasmaStyle.id = "plasmaframe";
};
var playPause = function () {
    playmedia++;
    var iframe = document.getElementsByTagName("iframe")[0];
    if (playmedia % 2 == 0)
        iframe.contentWindow.document.body.getElementsByTagName('video')[0].play();
    else
        iframe.contentWindow.document.body.getElementsByTagName('video')[0].pause();
};
var powerOnOff = function () {
    powerBtn++;
    if (powerBtn % 2 === 0) {
        document.getElementsByTagName('iframe')[0].src = "";
    }
    else {
        document.getElementsByTagName('iframe')[0].src = "videoFiles/sample.mp4";
    }
};
var sony = new TV({
    size: 'xs',
    energyUsage: 'moderate',
    refreshRate: 2,
    backLight: 'yes'
}, 'panasonic');
