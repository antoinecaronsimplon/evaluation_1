(function main(){

    $('#add1').click(function(){
        var addField1 = $('#addFieldExpense');
        $(addField1).append('<label for="">Autres dépenses</label><input type="text" placeholder="0,00 €">');
    });
// Add a recipe
// I add new recipes to the click
    $('#add2').click(function(){
        var addField2 = $('#addFieldRecipe');
        $(addField2).append('<label for="">Autres recettes</label><input type="text" placeholder="0,00 €">');
    });
// I replace the elements of the div created by an empty div
    $('#btnReset').click(function(){
        $('#addFieldExpense').html('');
        $('#addFieldRecipe').html('');
        $('#result').html('');
        $(message).html('');
    });

// do an addition function
// I make an addition and click function I have a result that appears in the html
    $('#valider').click(function(){
        var expense1 = parseFloat($('#expense1').val());
        var expense2 = parseFloat($('#expense2').val());
        var expense3 = parseFloat($('#expense3').val());
        var expense4 = parseFloat($('#expense4').val());
        var expense5 = parseFloat($('#expense5').val());
        var expense6 = parseFloat($('#expense6').val());
        var expense7 = parseFloat($('#expense7').val());
        var expense8 = parseFloat($('#expense8').val());
        var expense9 = parseFloat($('#expense9').val());
        var expense10 = parseFloat($('#expense10').val());
        var expense11 = parseFloat($('#expense11').val());
        var expense12 = parseFloat($('#expense12').val());
        var expense13 = parseFloat($('#expense13').val());
        var expense14 = parseFloat($('#expense14').val());
        var expense15 = parseFloat($('#expense15').val());

        // Addition recipe calculation
        var recipe1 = parseFloat($('#recipe1').val());
        var recipe2 = parseFloat($('#recipe2').val());
        var recipe3 = parseFloat($('#recipe3').val());
        var recipe4 = parseFloat($('#recipe4').val());

        // Recovering the savings input and subtract
        var saving = parseFloat($('#saving').val());

        // I display the result of my variable result in my html to make it visible
        var result = parseFloat($('#result').html(''));

        result = (recipe1 + recipe2 + recipe3 + recipe4) - (expense1 + expense2 + expense3 + expense4 + expense5 + expense6 + expense7 + expense8 + expense9 + expense10 + expense11 + expense12 + expense13 + expense14 + expense15) + (saving);
        $('#result').html(result + '<span class="euro"> €</span>');

        // I created a message for 3 proposals based on my credit
        var message = $('#message');
        if (result < 0) {
            message.html('<p>Votre budget est négative, il faut vite rebondir! Ne perdez pas espoir.</p>');
        }
        else if (result == 0){
            message.html("<p class='euro'>Votre budget est nul, il faut tenir bon! Encore quelques économies et tout sera rentré dans l'ordre.</p>");
        }
        else {
            message.html('<p class="euro">Votre budget est positif, bravo vous êtes sur la bonne voie! Continuez comme ça.</p>');
        }
    });
})();