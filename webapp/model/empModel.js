sap.ui.define(['sap/ui/model/json/JSONModel', 'sap/ui/model/resource/ResourceModel'], function(JSONModel,ResourceModel){
    return {
        createEmpModel: function(){
            var oEmpModel = new JSONModel();
            oEmpModel.loadData("model/empData.json");
            return oEmpModel;
        },
        createResourceModel: function(){
            var oResourceModel = new ResourceModel({
                bundleUrl:"i18n/i18n.properties"
            });
           return oResourceModel;

        }

    };

});