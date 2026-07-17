sap.ui.jsview("chip.view.Training", {
    getControllerName: function() {
        return "chip.controller.Training";
    },
    createContent: function(oController) {
        var oInput = new sap.m.Input("input1", {
                placeholder: "Enter Training details here",
                
            });
        var oBtn = new sap.m.Button("btn1",{
                    text: "Click Me",
                    icon: "sap-icon://accept",
                    press: oController.onPress
                });
        return [oInput, oBtn];
    },

});