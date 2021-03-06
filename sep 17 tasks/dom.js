
        function createli(elem, num) {
            var arr = []
            for (let i = 0; i < num; i++) {
                arr.push(document.createElement('li'));
                elem.appendChild(arr[i]);
            }
            return arr;
        }

        function createEle(ele, className) {
            var k = document.createElement(ele);
            if (className)
                k.setAttribute('class', className);

            return k;
        }

        var header = createEle('header', 'header');
        var white = createEle('div', 'absoluteWhite');
        var photo = createEle('div', 'absolutePhoto');
        var abname = createEle('div', 'absoluteName');
        abname.innerHTML = 'DIVYA SRI';

        var img = createEle('img');
        img.setAttribute('src', 'divya.jpg');

        photo.appendChild(img);
        header.append(white, photo, abname);


        var addr = createEle('div', 'address');
        addr.innerHTML = 'Nallakunta,Tirupati 12345|987654321|hello@kickresume.com';

        var hr = createEle('hr');

        ////////////////
        var bodySec = createEle('div', 'bodySection');
        var left = document.createElement('div');
        var right = document.createElement('div');
        left.setAttribute('id', 'left');
        right.setAttribute('id', 'right');


        var icon1 = createEle('i', 'fa fa-user-circle');
        icon1.innerHTML = '&nbsp;Profile';

        var para1 = createEle('p');
        para1.innerHTML = 'Innovative optimized solution seeker.Excited to be ' +
            'at the deployment phase of my new career as a web developer.';

        var icon2 = createEle('i', 'fas fa-book-reader');
        icon2.innerHTML = '&nbsp;Skills';




        var table = createEle('table');
        var caption = createEle('caption');
        var h3 = createEle('h3');
        h3.innerHTML = 'Technical Skills';
        table.append(caption);

        // var percent = [];
        // var circle = [];
        // var td2Arr = [];
        // var td1Arr = ['JavaScript', 'HTML', 'CSS', 'Java', 'Protractor', 'Deployment'];
        // var tdArr = [];
        // var trArr = [];
        // for (i = 0; i < 6; i++) {
        //     percent[i] = createEle('div', 'percentage');
        //     circle[i] = createEle('div', 'circle circle' + (i + 1));
        //     td2Arr.push(percent[i].appendChild(circle[i]));
        // }
        // console.log(td2Arr);
        // for (i = 0; i < 6; i++) {
        //     trArr[i] = createEle('tr');
        //     for (j = 0; j < 2; j++) {
        //         tdArr[j] = createEle('td');
        //         if (j === 0) {
        //             tdArr[j].innerHTML = td1Arr[i];
        //         }

        //         else {
        //             tdArr[j].innerHTML = td2Arr[i];
        //         }

        //     }
        //     trArr[i].append(tdArr[0], tdArr[1]);
        // }
        var count = 1;
        var td1Arr = ['JavaScript', 'HTML', 'CSS', 'Java', 'Protractor', 'Deployment'];


        for (var i = 0; i < 6; i++) {
            var tr = createEle('tr');
            for (var j = 0; j < 2; j++) {
                var td = createEle('td');
                if (j == 0) {
                    td.innerHTML = td1Arr[count - 1];
                }

                else {
                    var div1 = createEle('div', 'percentage');
                    var div2 = createEle('div', 'circle circle' + (count++));
                    div1.append(div2);
                    td.append(div1);
                }
                tr.append(td);

            }
            table.append(tr);
        }


        var skill = createEle('i', 'fa fa-desktop');
        skill.innerHTML = "&nbsp;Work Experience";

        var hthree = createEle('h3');
        hthree.innerHTML = "QA Automation Engineer (June 2018-Dec 2018)";

        var hfour = createEle('h4');
        hfour.innerHTML = "Responsibilities:";

        var ul1 = createEle('ul');
        var li6 = createli(ul1, 7);
        li6[0].innerHTML = 'Involved in various phases of Software Development Life Cycle (SDLC) of the application.';
        li6[1].innerHTML = 'Developed the Automation Test Scripts for testing the applications using Protractor and JavaScript.';
        li6[2].innerHTML = 'Worked on tool Tellus which schedules jobs and lets us know if the application is running successfully.';
        li6[3].innerHTML = 'Used Protractor to perform End to end testing for single page application developed using Angular 2.';
        li6[4].innerHTML = 'Worked on development of SUIT tool application.';
        li6[5].innerHTML = 'Used Jenkins to automate the build and deploy process and Git was used for project management and version management.';
        li6[6].innerHTML = 'Technologies involved are JavaSript, Protractor, Angular2, JSON';
        ///////right
        var iwork = createEle('i', 'fa fa-desktop');
        iwork.innerHTML = "&nbsp;Work Experience";


        var head3 = createEle('h3');
        var head4 = createEle('h4');
        head3.innerHTML = "Software Engineer 1 (Jan 2019-Nov 2019)";
        head4.innerHTML = "Responsibilities:";

        var ul2 = createEle('ul');
        var li3 = createli(ul2, 4);
        li3[0].innerHTML = "Developed Backend Engineering code for Portfolio Swap using C++.";
        li3[1].innerHTML = "Worked on writing reusable and recursive functions in C++.";
        li3[2].innerHTML = "Used Jenkins to automate the build and deploy process and Git was used for project management and version management.";
        li3[3].innerHTML = "Worked with the database team to understand the properties of the portfolios and implemented the functions accordingly for swapping the old portfolio with the new one.";

        var imini = createEle('i', 'fab fa-java');
        imini.innerHTML = "&nbsp;<b>Java Mini Projects</b>";

        var ul3 = createEle('ul');
        var li2 = createli(ul3, 3);
        li2[0].innerHTML = 'Built an email administration application.';
        li2[1].innerHTML = 'Built a student database application.';
        li2[2].innerHTML = 'Built a new bank account application.';

        var icap = createli('i', 'fas fa-graduation-cap');
        icap.innerHTML = "&nbsp;Education";

        var ul4 = createEle('ul');
        var liedu = createli(ul4, 3);
        liedu[0].innerHTML = "B.Tech CSE in G PullaReddy Engineering College, Kurnool (2014-2018) with 8.6 CGPA";
        liedu[1].innerHTML = "Intermediate from VijayaRatna Junior College, Hyderabad with 94.6%";
        liedu[2].innerHTML = "SSC from Sri Sathya Sai Higher Secondary School, Puttaparthi with 10 CGPA";
        var br1 = createEle('br');
        var br2 = createEle('br');
        caption.append(h3);
        bodySec.append(left, right);
        left.append(icon1, para1, icon2, table, br1, br2, skill, hthree, hfour, ul1);
        right.append(iwork, head3, head4, ul2, imini, ul3);
        document.body.append(header, addr, hr, bodySec);