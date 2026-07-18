sap.ui.define(['sap/ui/core/format/NumberFormat'],
    function(NumberFormat){
        
        return{
            formatEmpName:function(inp){
            if(inp){
                return inp.toUpperCase();
            }

        },

        formatCurrency:function(amount,currency){
            var oCurrencyFormat = NumberFormat.getCurrencyInstance();
            return oCurrencyFormat.format(amount,currency);

        }

        }
       
    }
)