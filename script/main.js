function init() {
    var myFullpage = new fullpage('#fullpage', {
        licenseKey: 'C706A027-562E4D3C-85996AAA-AB219E10',
        anchors:['1st', '2nd', '3rd', '4th', '6th', '7th'],
        navigation: true,
        navigationTooltips: ['Video', 'Home', 'History', 'etc'],
        slidesNavigation: true
    });
}

init();