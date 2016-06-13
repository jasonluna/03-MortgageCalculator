// defining options for monthly payments or bimonthly and giving them values
var months = [
    ["monthly", 12],
    ["Bimonthly", 6]
];
// populating option bar with monthly or bimonthly and their respective values
for (var i = 0; i < months.length; i++) {
    $("<option>").val(months[i][1]).html(months[i][0]).appendTo("#period");

}
// getting all the values from user input and calculating the results
$(document).ready(function() {
    $('#calculate').on('click', function() {
        var loanBalance = $('#loanBalance').val();
        var interestRate = $('#interestRate').val();
        var loanTerm = $('#loanTerm').val();
        var period = $('#period').val();
        var numberOfPayments = loanTerm * period;
        var monthlyInterestRate = (interestRate / 100) / period;
        var compoundedIntestRate = Math.pow((1 + monthlyInterestRate), numberOfPayments);
        var interestQuotient = (monthlyInterestRate * compoundedIntestRate) / (compoundedIntestRate - 1);
        var monthlyPayment = loanBalance * interestQuotient;
        monthlyPayment =  Math.round(monthlyPayment * 100) / 100
        


// posting results on the html page
        $('#totalRent').html("your rent is $" + monthlyPayment + ".");

    })

});
