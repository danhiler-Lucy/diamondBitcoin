function mainPage() {
    this.pageId = 9; //contactus
    this.status = false;
    this.citiesArray = [{
            city: 'New York',
            message: '<span>Motiganz USA, Inc.</span>',
            address: '1200 Avenue of the Americas, NY, USA',
            location: {
                lat: 40.7580596,
                lng: -73.9770891
            },
            contactInfo: {
                email: 'sales@motiganz.com',
                mobile: '+1-212-302-0040'
            }
        }/*,
        {
            city: 'HONG KONG',
            message: 'Our factory and representatives in <span>Hong Kong, China</span>',
            address: 'PETER BUILDING, NO.58, QUEEN’S ROAD CENTRAL, HONG KONG',
            location: {
                lat: 22.2824024,
                lng: 114.1558026
            },
            contactInfo: {
                email: 'info@belodiam.com',
                web: 'www.belodiam.com',
                tel: '+852 2185 7118',
                fax: '+852 2187 2618',
            }
        },
        {
            city: 'TOKYO',
            message: 'Our representatives in <span>Tokyo, Japan</span>',
            address: '3-9-6 GINZA CHUO, TOKYO JAPAN',
            location: {
                lat: 35.6715558,
                lng: 139.7678838
            },
            contactInfo: {
                email: 'info@arisawagroup.co.jp',
                web: ' www.arisawagroup.co.jp',
                tel: '+81 03.5816 08 88',
                fax: '+81 03.5816 06 88'
            }
        },
        {
            city: 'NEW YORK',
            message: 'dob USA Inc. <span>New York, US</span>',
            address: '22 West 48th Street, Suite 804,  New York, NY 10036',
            location: {
                lat: 40.7576349,
                lng: -73.97953649999999
            },
            contactInfo: {
                tel: '(212) 764-0088/5888',
                mobile: '+1 (929) 350-3287',
                fax: '(212) 764-0188',
                email: 'paul@dob.com'
            }
        },
        {
            city: 'LONDON',
            message: 'Our representatives in <span>London, UK</span>',
            address: 'M.VAINER ltd, 15 Greville street, London ECIN 85Q',
            location: {
                lat: 51.5194213,
                lng: -0.107281
            },
            contactInfo: {
                tel: '020 7242 7078',
                fax: '020 7430 2345',
                mobile: '07860 369 193',
                web: 'www.diamonds@mvainer.co.uk'
            }
        },
        {
            city: 'SINGAPORE',
            message: 'Our representatives in <span>Singapore</span>',
            address: '391B Orchard Road, #14-09 Ngee Ann City Tower B, Singapore 238874',
            location: {
                lat: 1.302707,
                lng: 103.834289
            },
            contactInfo: {
                tel: '+65 6733 3082',
                fax: '+65 6732 3240',
                email: 'ivy.choa@ivymasterpiece.com',
                web: 'www.ivymasterpiece.com'
            }
        },
        {
            city: 'XIAMEN',
            message: 'Our representatives in <span>Xiamen, China</span>',
            address: 'No 1-83 XI TI BIE SHU, XIAMEN FU JIAN PROVINCE CHINA',
            location: {
                lat: 24.5562606,
                lng: 118.3241151
            },
            contactInfo: {
                tel: '+86 186 592 00 800',
                email: 'partsh@yahoo.com'
            }
        },
        {
            city: 'JAKARATA',
            message: 'Our representatives in <span>Jakarta, Singapore</span>',
            address: 'Sudirman Tower Condominium, Jl Garnisun Dalam, N°8, Jakarta 12930',
            location: {
                lat: -6.2200427,
                lng: 106.8160912
            },
        },
        {
            city: 'AUSTRALIA',
            message: 'Our representatives in <span>Albury, Australia</span>',
            address: '663 Young Street  ALBURY  NSW  2640',
            location: {
                lat: -36.0729652,
                lng: 146.9253411
            },
            contactInfo: {
                'Postal Address': 'PO Box 868 ALBURY   NSW   2640',
                tel: '+ 61 2 6041 6315',
                mobile: '0473 595 528',
                email: 'office@tremac.com.au'
            }
        },
        {
            city: 'ITALY',
            message: 'Our representatives in <span>Italy</span>',
            address: 'Via della Spiga, 9 20121 Milano, Italy',
            location: {
                lat: 45.4692555,
                lng: 9.1977671
            },
            contactInfo: {
                place: 'Diamond Love Bond',
                tel: '+39 02 76009691',
                email: 'info@diamondlovebond.it'
            }
        }*/
    ];
}

var activeMainPage = new mainPage();

$(function () {
    activeMainPage.setMap();
    activeMainPage.inflateCities();
});

activeMainPage.setMap = function () {
    var uluru = {
        lat: -25.363,
        lng: 131.044
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: activeMainPage.citiesArray[0].address
    });
    var marker = new google.maps.Marker({
        position: activeMainPage.citiesArray[0].address,
        map: map
    });
}
activeMainPage.changeMapToCity = function (elm) {
    var address = $(elm).attr('address');
    var locationMessage = $(elm).attr('message');
    var city = $(elm).attr('city');

    // Finding the city object which corresponds to the given city element
    var cityObject = this.citiesArray.find(object => {
        return object.city === city;
    });
    // Retrieve the location object from the city object and assign it to the map
    var location = cityObject.location;
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map,
        animation: google.maps.Animation.DROP
    });

    var cityObject = activeMainPage.citiesArray.find(cityObject => cityObject.city === city);
    $('.mainContentWrapper .citiesStructure .cityOption').removeClass('active');
    $('.mainContentWrapper .mapStructure .leftSide .locationStructure #location').html(locationMessage);
    $('.mainContentWrapper .mapStructure .rightSide').empty();

    var contactDetail = `<div class='contactDetail'>
                                <span>${address}</span>
                            </div>`;
    $('.mainContentWrapper .mapStructure .rightSide').append(contactDetail);
    for (var property in cityObject.contactInfo) {
        var capProperty = activeMainPage.capitalize(property);
        var propertyValue = cityObject.contactInfo[property];
        var divider = '';
        if (property === 'tel') {
            divider = '.';
        } else if (property === 'fax') {
            divider = '';
        } else {
            divider = ':';
        }

        var contactDetail = `<div class='contactDetail'>
                                <span>${capProperty}${divider}</span>
                                <span>${propertyValue}</span>
                            </div>`
        $('.mainContentWrapper .mapStructure .rightSide').append(contactDetail);
    }
    $(elm).addClass('active');
}

activeMainPage.inflateCities = function () {
    var cities = activeMainPage.citiesArray;
    cities.forEach(city => {
        var cityElement = `<p class='cityOption' city='${city.city}' message='${city.message}' address='${city.address}' onclick='activeMainPage.changeMapToCity(this)'>${city.city}</p>`;
        $('.mainContentWrapper .citiesStructure').append(cityElement);
    });

    activeMainPage.changeMapToCity($('.cityOption[city="New York"]'));
}
activeMainPage.capitalize = function (str) {
    var lowerCase = str.toLowerCase();
    return lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);
}
activeMainPage.checkInputs = function () {
    var name = $('#contactus_name').val();
    var company = $('#contactus_company').val();
    var email = $('#contactus_email').val();
    var phone = $('#contactus_phone').val();
    var message = $('#contactus_message').val();
    activeMainPage.status = true;
    $('.inputsStructure input').removeClass('wrongInput');
    $('.inputsStructure textarea').removeClass('wrongInput');
    if (name === '') {
        $('#contactus_name').addClass('wrongInput');
        activeMainPage.status = false;
    }
    if (company === '') {
        $('#contactus_company').addClass('wrongInput');
        activeMainPage.status = false;
    }
    if (email === '') {
        $('#contactus_email').addClass('wrongInput');
        activeMainPage.status = false;
    }
    if (phone === '') {
        $('#contactus_phone').addClass('wrongInput');
        activeMainPage.status = false;
    }
    if (message === '') {
        $('#contactus_message').addClass('wrongInput');
        activeMainPage.status = false;
    }
    var json = {
        name: name,
        company: company,
        email: email,
        phone: phone,
        message: message
    }
    if (!activeMainPage.status) {
        return true;
    }
    activeMainPage.sendInputs(json);
}
activeMainPage.sendInputs = function (json) {
    $.ajax({
        url: activeMainTool.serverSrc + 'contacts',
        type: 'post',
        data: json,
        headers: {
            token: activeMemberManager.token
        },
        dataType: 'json',
        success: function (data) {
            console.log('Contact:');
            console.log(data);
            activeMainTool.redirectPage(0);
        },
        error: function (data) {
            console.log(data);
            if (data.status === 403 || data.status === 400) {
                activeMainTool.invalidToken();
            }

        }
    });
    $('.submitButton').html('THANKS');
    $('.submitButton').addClass('submitButtonGreen');
    $('#contactus_name').val('');
    $('#contactus_company').val('');
    $('#contactus_email').val('');
    $('#contactus_phone').val('');
    $('#contactus_message').val('');
    setTimeout(function () {
        $('.submitButton').html('SUBMIT');
        $('.submitButton').removeClass('submitButtonGreen');
    }, 2000);
}