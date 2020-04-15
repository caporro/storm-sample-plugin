module.exports = {
            custom_signature: null, // not yet used - rsa public key or null
            nodeOptions: null,
            arguments: null,
            setNodeOptions: function(nodeOptions){
                                    this.nodeOptions = nodeOptions;
                              },
            setArguments: function(arguments){
                                    this.arguments = arguments;
                              },
            run: function(){
                  var args = this.arguments;

                    return new Promise(function(resolve, reject)   {
                          //return number of arguments
                          var args_json = JSON.parse(args);
                          var count = Object.keys(args_json).length;
                          resolve(count);

                    })




            }
}
