sap.ui.define(['sap/ui/model/json/JSONModel'], function(JSONModel){
    return {
        createEmpModel: function(){
            var oEmpModel = new JSONModel();
            oEmpModel.loadData("model/empData.json");
            return oEmpModel;
        }
    };

});