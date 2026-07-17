sap.ui.jsview("chip.view.Main", {
    getControllerName: function() {
        return "chip.controller.Main";
    },
    createContent: function(oController) {
    
                var oBtn = new sap.m.Button("btn1",{
                    text: "Click Me",
                    icon: "sap-icon://accept",
                    press: oController.onPress
                });

                var oInput = new sap.m.Input("input1", {
                placeholder: "Enter text here",
                liveChange: oController.onLiveChange   
               });
               
              return [oBtn, oInput];

    },
});