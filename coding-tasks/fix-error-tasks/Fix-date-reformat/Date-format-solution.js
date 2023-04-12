// possible Solution is

// given date is 1999-12-31

// output "2000-01-01"
function reFormatAndAddADay({ givenDate }) {
    var updatedDate = new Date(givenDate);
    updatedDate.setDate(updatedDate.getDate() + 1);
    return updatedDate.toISOString().slice(0, 10);
}