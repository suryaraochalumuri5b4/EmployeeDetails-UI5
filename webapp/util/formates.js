sap.ui.define(['sap/ui/core/format/NumberFormat',
                'sap/ui/core/format/DateFormat'
],
    function(NumberFormat,DateFormat){
        
        return{
            formatEmpName:function(inp){
            if(inp){
                return inp.toUpperCase();
            }

        },

        formatCurrency:function(amount,currency){
            var oCurrencyFormat = NumberFormat.getCurrencyInstance();
            return oCurrencyFormat.format(amount,currency);

        },
        formatDate:function(date){
          var oDate;
        // If date is a string
        if (typeof date === "string") {
            oDate = new Date(date.replace(" ", "T"));
        } else {
            oDate = date;
        }

        var oDateFormat = DateFormat.getDateInstance({
           pattern: "MM-dd-yyyy"
        });
        return oDateFormat.format(oDate);

        }

        }
       
    }
)