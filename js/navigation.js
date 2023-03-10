$(function () {
    $(".menu li").mouseenter(function () {
        $(this).children("ul").stop().slideDown(150);
    });
    $(".menu li").mouseleave(function () {
        $(this).children("ul").stop().slideUp(150);
    });
    console.log($(".menu li ul li a"));
    $(".menu li ul li a").mouseover(function () {
        $(this).css("background", "#fff")
        $(this).css("color", "#4390C3")

    });
    $(".menu li ul li a").mouseout(function () {
        $(this).css("background", "#9FE5FF")
        $(this).css("color", "#000")

    });
})
window.addEventListener('load', function () {
    // var map = new AMap.Map('container');
    // map.setZoom(15);
    // map.setCenter([102.833669, 24.88149])
    var map = new AMap.Map('container', {
        resizeEnable: true,
        center: [102.833669, 24.88149],
        zoom: 13
    });

    // 搜索路线
    // 给起点和终点添加自动补全功能
    new AMap.Autocomplete({
        input: "node1"
    })
    new AMap.Autocomplete({
        input: "node2"
    })



    btn.onclick = function () {
        //使用插件
        new AMap.Walking({
            map: map,
            panel: "panel"
        }).search([
            { keyword: node1.value, city: "宁波" },
            { keyword: node2.value, city: "宁波" }
        ], function (status, data) {
            console.log(data);
        });
    }

    //实时路况图层
    var trafficLayer = new AMap.TileLayer.Traffic({
        zIndex: 10
    });
    var satellite_imagery = new AMap.TileLayer.Satellite({
        zIndex: 13
    });
    var roadnetwork = new AMap.TileLayer.Satellite({
        zIndex: 13
    });
    //获取卫星图和实时路况图按钮
    trafficLayer.setMap(map);
    satellite_imagery.setMap(map);
    roadnetwork.setMap(map);

    var isVisible = true;
    var isVisibletwo = false;
    function toggle() {
        if (isVisibletwo) {
            trafficLayer.hide();
            isVisibletwo = false;
        } else {
            trafficLayer.show();
            isVisibletwo = true;
        }
    }

    function toggletwo() {
        if (isVisible) {
            satellite_imagery.hide();
            roadnetwork.hide();
            isVisible = false;
        } else {
            satellite_imagery.show();
            roadnetwork.show();
            isVisible = true;
        }
    }



    var buttontwo = this.document.querySelector(".satellite_network button")
    buttontwo.addEventListener('click', function () {
        toggletwo();
    })
    buttontwo.click();


    var button = this.document.querySelector(".input-item button")
    button.addEventListener('click', function () {
        toggle();
    })
    button.click();

    // 点击导航按钮隐藏功能模块
    var navigation_button = this.document.querySelector("#search button")
    var menu = this.document.querySelector(".menu")
    navigation_button.addEventListener('click', function () {
        menu.style.display = 'none';
        // console.log(menu);
        // navigation_button.style.backgroundColor = ''
        // menu && console.log("成功了");
    })


    // mapObj = new AMap.Map('iCenter');
    // mapObj.plugin('AMap.Geolocation', function () {
    //     geolocation = new AMap.Geolocation({
    //         enableHighAccuracy: true,//是否使用高精度定位，默认:true
    //         timeout: 10000,          //超过10秒后停止定位，默认：无穷大
    //         maximumAge: 0,           //定位结果缓存0毫秒，默认：0
    //         convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
    //         showButton: true,        //显示定位按钮，默认：true
    //         buttonPosition: 'LB',    //定位按钮停靠位置，默认：'LB'，左下角
    //         buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
    //         showMarker: true,        //定位成功后在定位到的位置显示点标记，默认：true
    //         showCircle: true,        //定位成功后用圆圈表示定位精度范围，默认：true
    //         panToLocation: true,     //定位成功后将定位到的位置作为地图中心点，默认：true
    //         zoomToAccuracy: true      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
    //     });
    //     mapObj.addControl(geolocation);
    //     geolocation.getCurrentPosition();
    //     AMap.event.addListener(geolocation, 'complete', onComplete);//返回定位信息
    //     AMap.event.addListener(geolocation, 'error', onError);      //返回定位出错信息
    // });
})
