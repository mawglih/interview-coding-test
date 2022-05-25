function reFormatAndAddADay({ data, importState, caller, callback }) {
    dd = (new Date(givenDate)).getDate();
    mm = (new Date(givenDate)).getMonth() + 1;
    yyyy = (new Date(givenDate)).getFullYear();

    dd += 1;
    if (dd > 31) {
        dd = 1;
        mm += 1;
    }
    if (dd < 10) {
        dd = '0' + dd
    }
    if (mm < 10) {
        mm = '0' + mm
    }
    return yyyy + '-' + mm + '-' + dd;
}
